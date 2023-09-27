import  { useState } from 'react';
import '../src/cal.css'
import calculator from '../src/assets/cartoon_cal.png'

function YearConverter() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  const handleYearChange = (event) => {
    const yearValue = parseInt(event.target.value);
    setYears(yearValue);
    const monthsValue = yearValue * 12;
    setMonths(monthsValue);
    const weeksValue = yearValue * 52;
    setWeeks(weeksValue);
    const daysValue = yearValue * 365;
    setDays(daysValue);
    const hoursValue = yearValue * 365 * 24;
    setHours(hoursValue);
  };

  return (
    <div className="background">
        <div className="container_wrap">
          <div className='container' >
            <h2>Year Converter</h2>
            <label>Enter Number of Years:</label>
            <input
              type="number"
              value={years}
              onChange={handleYearChange}
              className='input-field'
            />
            <div className='result-container' >
              <p>Months: {months}</p>
              <p>Weeks: {weeks}</p>
              <p>Days: {days}</p>
              <p>Hours: {hours}</p>
            </div>
        </div>
        <div className="img_container">
          <img src={calculator} alt="" />
        </div>
      </div>
    </div>
  );
}

export default YearConverter;
