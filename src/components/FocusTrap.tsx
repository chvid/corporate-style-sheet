import { useEffect, useRef, PropsWithChildren } from "react";

export const FocusTrap: React.FC<PropsWithChildren> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (window.document.activeElement) {
        (window.document.activeElement as any).blur();
      }
    }, 100);

    const modifiedElements: { element: any; oldState: any }[] = [];

    const isInsideThisElement = (e: any) => {
      while (true) {
        e = e.parentElement;
        if (e == elementRef.current!) {
          return true;
        }
        if (e == null) {
          return false;
        }
      }
    };

    const disableElement = (element: any): any => {
      const oldState = element.disabled;
      element.disabled = true;
      return oldState;
    };

    const restoreElement = (element: any, oldState: any) => {
      element.disabled = oldState;
    };

    document.querySelectorAll("input, text, button, select, textarea, label, form").forEach((e: any) => {
      if (!isInsideThisElement(e)) {
        modifiedElements.push({ element: e, oldState: disableElement(e) });
      }
    });

    return () => {
      for (let p of modifiedElements) {
        restoreElement(p.element, p.oldState);
      }
    };
  }, []);
  return <div ref={elementRef}>{children}</div>;
};
