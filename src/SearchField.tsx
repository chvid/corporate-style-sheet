import { useEffect, useRef, useState } from "react";

const elementAndAllParents = (e: ParentNode | null) => {
  const result = [];
  while (e) {
    result.push(e);
    e = e.parentNode;
  }
  return result;
};

const data = [
  { value: 42, label: "Brigtworks ApS", description: "Østerbrogade 107A 3 2, København Ø 2100 DK" },
  { value: 87, label: "Århus Suppekøkken A/S", description: "Gammel Torv 12, Århus V 8210" }
];

export const SearchField: React.FC<{ placeholder: string; size: number }> = ({ placeholder, size }) => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const [searchString, setSearchString] = useState("");
  const anchorElementRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState<null | { x: number; y: number }>(null);
  useEffect(() => {
    const reposition = () => {
      const r = anchorElementRef.current!.getBoundingClientRect();
      setPosition({ x: r.left, y: r.bottom + 8 });
    };
    if (resultsVisible) {
      reposition();
      const elements = elementAndAllParents(anchorElementRef.current!);
      elements.forEach(e => e.addEventListener("scroll", reposition));
      window.addEventListener("resize", reposition);
      return () => {
        elements.forEach(e => e.removeEventListener("scroll", reposition));
        window.removeEventListener("resize", reposition);
      };
    }
  }, [resultsVisible]);
  return (
    <>
      <input
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
        size={size}
        placeholder={placeholder}
        type="text"
        onFocus={() => setResultsVisible(true)}
        onBlur={e => e.relatedTarget?.className != "search-result-item" && setResultsVisible(false)}
        onKeyDown={e => console.log(e.key)}
        ref={anchorElementRef}
      ></input>
      {resultsVisible && position && (
        <div className="search-result" style={{ left: position.x, top: position.y }}>
          {data.map((d, i) => (
            <div className="search-result-item" key={i} onClick={() => setSearchString("foo")} tabIndex={-1}>
              <h4>{d.label}</h4>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
