import { useState } from "react";
import { ModalDialog } from "./ModalDialog";
import { SearchField } from "./SearchField";
import { NavigationMenu } from "./components/NavigationMenu";
import icons from "./icons/IconCollections";
import { DatePicker } from "./DatePicker";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  return (
    <>
      <ModalDialog visible={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      <div className={isLeftVisible ? "left-visible" : "left-invisible"}>
        <div id="top">
          <div className="container">
            <div id="left-toggler">
              {!isLeftVisible && (
                <div className="action float-left" onClick={() => setIsLeftVisible(true)}>
                  <icons.Burger />
                </div>
              )}
              {isLeftVisible && (
                <div className="action float-left" onClick={() => setIsLeftVisible(false)}>
                  <icons.Close />
                </div>
              )}
            </div>
            <div className="action">
              <icons.Rabbit fill="orange" />
            </div>
            Brightworks ApS / Sales / Invoices
            <div className="action flex-right">
              <icons.UserCog fill="HoneyDew" />
            </div>
          </div>
        </div>
        <div id="left">
          <div className="container">
            <NavigationMenu />
          </div>
        </div>
        <div id="right">
          <div className="container">
            <h1>Test Page</h1>
            <h2>Modal Dialog</h2>
            <button onClick={() => setIsDialogOpen(true)}>Open Modal Dialog</button>
            <h2>Tabs</h2>
            <nav className="tabs">
              <ul>
                <li className="active">Tab 1</li>
                <li>Tab 2</li>
                <li>Tab 3</li>
              </ul>
            </nav>
            <h2>Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Debit</th>
                  <th>Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1050. Vinforbrug</td>
                  <td className="right">10.000,00 kr.</td>
                  <td className="right"></td>
                </tr>
                <tr>
                  <td>2010. Vanvidskørsel</td>
                  <td className="right"></td>
                  <td className="right">21.500,00 kr.</td>
                </tr>
                <tr>
                  <td>3200. Vitaminspisning</td>
                  <td className="right"></td>
                  <td className="right">8.900,00 kr.</td>
                </tr>
              </tbody>
            </table>
            <h2>Form</h2>
            <form>
              <label>
                Search thing
                <SearchField placeholder="First thing" size={40} />
              </label>
              <label>
                First thing
                <input type="text" placeholder="First thing" size={40} />
              </label>
              <label>
                Date thing
                <DatePicker placeholder="Date thing" size={40} />
              </label>
              <div className="row">
                <label>
                  Something
                  <input type="text" placeholder="Something" size={40} />
                </label>
                <label>
                  Another thing
                  <input type="text" placeholder="Another thing" size={40} />
                </label>
              </div>
              <label>
                Soup
                <select>
                  <option>Potato</option>
                  <option>Tomato</option>
                </select>
              </label>
              <div className="label">
                Field drone
                <fieldset>
                  <label>
                    <input type="radio" name="drone" value="huey" />
                    Huey
                  </label>
                  <label>
                    <input type="radio" name="drone" value="dewey" />
                    Dewey
                  </label>
                  <label>
                    <input type="radio" name="drone" value="louie" />
                    Louie
                  </label>
                </fieldset>
              </div>
              <div className="label">
                Terms and Conditions
                <fieldset>
                  <label>
                    <input type="checkbox" name="drone" value="eu" />
                    End-user Agreement
                  </label>
                  <label>
                    <input type="checkbox" name="drone" value="gdpr" />
                    GDPR Compliance
                  </label>
                  <label>
                    <input type="checkbox" name="drone" value="rc" />
                    Return Commision
                  </label>
                </fieldset>
              </div>
              <label>
                Some comments
                <textarea cols={60} rows={20}></textarea>
              </label>
              <div className="row">
                <button>Do Something</button>
                <button className="is-secondary">Do Something</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
