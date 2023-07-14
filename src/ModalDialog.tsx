import { useEffect, useRef } from "react";
import { SearchField } from "./SearchField";

export const ModalDialog: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        if (window.document.activeElement) {
          console.log("calling (window.document.activeElement as any).blur()", window.document.activeElement as any);
          (window.document.activeElement as any).blur();
        }
      }, 100);

      const modifiedElements: { element: any; oldState: any }[] = [];

      const isInsideThisElement = (e: any) => {
        while (true) {
          e = e.parentElement;
          if (e == dialogRef.current!) {
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
    }
  }, [visible]);
  return (
    <>
      {visible && (
        <div className="modal" onClick={e => e.target == dialogRef.current && onClose()} ref={dialogRef}>
          <div className="dialog" role="dialog">
            <div className="header">Foo</div>
            <div className="content">
              <p>Bar baz ...</p>
              <form>
                <label>
                  Search thing
                  <SearchField placeholder="First thing" size={40} />
                </label>
                <div className="row">
                  <button onClick={() => onClose()}>OK</button>
                  <button onClick={() => onClose()} className="is-link">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
