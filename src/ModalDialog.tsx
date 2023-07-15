import { useRef } from "react";
import { SearchField } from "./SearchField";
import { FocusTrap } from "./components/FocusTrap";

export const ModalDialog: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {visible && (
        <FocusTrap>
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
        </FocusTrap>
      )}
    </>
  );
};
