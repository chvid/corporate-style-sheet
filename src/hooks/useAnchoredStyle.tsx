import { useEffect, useState } from "react";

const elementAndAllParents = (e: ParentNode | null) => {
  const result = [];
  while (e) {
    result.push(e);
    e = e.parentNode;
  }
  return result;
};

export const useAnchoredStyle = (
  anchorElementRef: React.RefObject<HTMLElement>,
  calculatePosition: (anchor: HTMLElement) => React.CSSProperties | undefined
) => {
  const [position, setPosition] = useState<React.CSSProperties | undefined>();
  useEffect(() => {
    const reposition = () => {
      setPosition(calculatePosition(anchorElementRef.current!));
    };
    reposition();
    const elements = elementAndAllParents(anchorElementRef.current!);
    elements.forEach(e => e.addEventListener("scroll", reposition));
    window.addEventListener("resize", reposition);
    return () => {
      elements.forEach(e => e.removeEventListener("scroll", reposition));
      window.removeEventListener("resize", reposition);
    };
  }, []);
  return position;
};
