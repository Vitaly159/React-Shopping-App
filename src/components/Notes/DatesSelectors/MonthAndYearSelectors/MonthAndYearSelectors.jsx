import './monthAndYearSelectors.css'

function MonthAndYearSelectors({datesArray, setDate, setPeriods, setWeeksSelector, month, year, setYear, setMonth}) {

  const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь',
                      'Декабрь'];

  const monthNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const createYearsForSelect = (firstYear, lastYear) => {
    const years =[];

    for(let i = firstYear; i <= lastYear; i++){
      years.push(i);
    }

    return years;
  }

  const getYearsSelect = createYearsForSelect(2021, 2025);

  const getChangedSelectors = () => {
    setPeriods('');
    setWeeksSelector('Выберете неделю');
  }

  const getMonthSelect = (value) => {
    setMonth(value);
    setDate(datesArray(year, value));
    getChangedSelectors();
  }

  const getYearSelect = (value) => {
    setYear(value);
    setDate(datesArray(value, month));
    getChangedSelectors();
  }

  return(
    <div className="selectors-block">
      <p>Выберете месяц и год: </p>

      <select onChange={(e) => getMonthSelect(e.target.value)} value={month}>
        {monthNumbers.map( (month, index) =>
          <option key={index} value={index}>{monthNames[month]}</option>
        )}  
      </select>
                                            
      <select onChange={(e) => getYearSelect(e.target.value)} value={year}>
        {getYearsSelect.map((year,index) =>
          <option key={index} value={year}>{year}</option>
        )}
      </select>
    </div>
  )
}

export default MonthAndYearSelectors;