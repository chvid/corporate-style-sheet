import { useRef, useState } from "react";
import { useAnchoredStyle } from "./hooks/useAnchoredStyle";

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const isUnderClass = (element: any, className: string): boolean => (
  element != null && (element.className == className || isUnderClass(element.parentElement, className))
)

const calculateDates = (date: number) => {
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  const startDate = new Date(date).setDate(1) - 7 * 24 * 3600 * 1000;
  const endDate = new Date(date).setDate(31) + 7 * 24 * 3600 * 1000;
  let dates = [];
  let d = startDate;
  let row: undefined | { date: number, day: number, dateString: string, currentMonth: boolean, selected: boolean }[] = undefined;

  while (d < endDate) {
    if (row) {
      row.push(
        {
          date: new Date(d).getDate(),
          day: new Date(d).getDay(),
          dateString: new Date(d).toISOString().substring(0, 10),
          currentMonth: new Date(d).getMonth() == month,
          selected: d == date
        });
    }
    if (new Date(d).getDay() == 0) {
      if (row) dates.push(row);
      row = [];
    }
    d += 24 * 3600 * 1000;
  }

  return { month, year, dates };
}

const prevMonth = (dateString: string) => new Date(new Date(dateString).getTime() - 30 * 24 * 3600 * 1000).toISOString().substring(0, 10);
const nextMonth = (dateString: string) => new Date(new Date(dateString).getTime() + 30 * 24 * 3600 * 1000).toISOString().substring(0, 10);

export const DatePicker: React.FC<{ placeholder: string; size: number }> = ({ placeholder, size }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [dateString, setDateString] = useState("2020-07-14");
  const anchorElementRef = useRef<HTMLInputElement>(null);
  const style = useAnchoredStyle(anchorElementRef, anchor => ({
    left: anchor.getBoundingClientRect().left,
    top: anchor.getBoundingClientRect().bottom + 8
  }));

  const di = calculateDates(new Date(dateString).getTime());

  return (
    <>
      <input
        value={dateString}
        onChange={e => setDateString(e.target.value)}
        size={size}
        placeholder={placeholder}
        type="text"
        onFocus={() => setPickerVisible(true)}
        onBlur={e => (!isUnderClass(e.relatedTarget, "date-picker")) && setPickerVisible(false)}
        onKeyDown={e => console.log(e.key)}
        ref={anchorElementRef}
      ></input>
      {pickerVisible && (
        <div className="date-picker" style={style} tabIndex={-1}>
          <div className="header-row">
            <div className="control" onClick={() => setDateString(prevMonth(dateString))}>&lt;</div>
            <div>{months[di.month] + " " + di.year}</div>
            <div className="control" onClick={() => setDateString(nextMonth(dateString))}>&gt;</div>
          </div>
          <div className="week-row">{
            days.map(d => <div>{d}</div>)
          }</div>
          {
            di.dates.map(r => <div className="row">{
              r.map(d => <div className={`item ${d.currentMonth ? 'current-month' : ''} ${d.selected ? 'selected' : ''}`} onClick={() => {
                setDateString(d.dateString);
                setPickerVisible(false);
              }}>{d.date}</div>)
            }</div>)
          }
        </div>
      )}
    </>
  );
};
