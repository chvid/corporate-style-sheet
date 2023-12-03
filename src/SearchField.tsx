import { useRef, useState } from "react";
import { useAnchoredStyle } from "./hooks/useAnchoredStyle";
import { isUnderClass } from "./utils";

const data = [
  { value: "42", label: "Brigtworks ApS", description: "Østerbrogade 107A 3 2, København Ø 2100 DK" },
  { value: "87", label: "Århus Suppekøkken A/S", description: "Gammel Torv 12, Århus V 8210" }
];

export const SearchField: React.FC<{ placeholder: string; size: number }> = ({ placeholder, size }) => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const [searchString, setSearchString] = useState("");
  const anchorElementRef = useRef<HTMLInputElement>(null);
  const style = useAnchoredStyle(anchorElementRef, anchor => ({
    left: anchor.getBoundingClientRect().left,
    top: anchor.getBoundingClientRect().bottom + 8
  }));
  return (
    <>
      <input
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
        size={size}
        placeholder={placeholder}
        type="text"
        onKeyDown={e => console.log(e.key)}
        onFocus={e => !isUnderClass(e.relatedTarget, "search-result-item") && setResultsVisible(true)}
        onBlur={e => !isUnderClass(e.relatedTarget, "search-result-item") && setResultsVisible(false)}
        onClick={() => setResultsVisible(true)}
        ref={anchorElementRef}
      ></input>
      {resultsVisible && (
        <div className="search-result" style={style} onFocus={e => e.preventDefault()}>
          {data.map((d, i) => (
            <div
              className="search-result-item"
              key={i}
              onClick={() => {
                setSearchString(d.value);
                setTimeout(() => setResultsVisible(false));
              }}
              tabIndex={-1}
            >
              <h4>{d.label}</h4>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
