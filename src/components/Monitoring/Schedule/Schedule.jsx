import WeekSchedule from "./WeekSchedule/WeekSchedule";
import YearSchedule from "./YearSchedule/YearSchedule";

import './schedule.css'

function Schedule({yearScheduleOn, createYearSchedule, year, getPeriodArray, items, filterByCategory, categoryGraphic, 
                   setFilterByCategory, setYearScheduleOn, setMonthesIndex, setDaysExpenses, monthNames, 
                   createMonthSchedule, monthesIndex, selectValue}) {

  const getByMonthCategory = (year, category) => {
    const selectedMonth = getPeriodArray(1, monthesIndex,year, 0, monthesIndex+1,year);
    const resMonth = [];
    let num = 0;
    
    for (let i = 0; i < selectedMonth.length/7; i++ ) {
      const week = [];
      const prices = [];
  
      for (let j = 0; j < 7; j++) {
        if (num < selectedMonth.length) {
          week.push(selectedMonth[num])
          num++;
        }
      }
  
      for (let k = 0; k < items.length; k++) {
        if (
          week.includes(items[k].datesId) && 
          (items[k].category === category || category === 'Расходы по категориям')
        ) {
          prices.push(items[k].price)
        }
      }

      const resPrices = prices.reduce((sum, curr) => Number(curr) + Number(sum), 0);
      const obj = {prices: resPrices, week: week};
      resMonth.push(obj);
    }

    return resMonth;
  }

  const maxNum = yearScheduleOn ? 
                 (Math.max(...Object.values(getByMonthCategory(year, selectValue)).map(elem=>elem.prices))) :
                 (Math.max.apply(null,  createYearSchedule(year)));

  const getScale = (value) => {
    return value/(maxNum/160)+'px';
  }
                        
  return(
    <div className="schedule">
      {yearScheduleOn ? 
        <WeekSchedule
          year={year}
          selectValue={selectValue}
          maxNum={maxNum}
          getScale={getScale}
          getByMonthCategory={getByMonthCategory}
        />
        : 
        <YearSchedule 
          year={year}
          maxNum={maxNum}
          filterByCategory={filterByCategory}
          categoryGraphic={categoryGraphic}
          setFilterByCategory={setFilterByCategory}
          setYearScheduleOn={setYearScheduleOn}
          setMonthesIndex={setMonthesIndex}
          setDaysExpenses={setDaysExpenses}
          monthNames={monthNames}
          createMonthSchedule={createMonthSchedule}
          createYearSchedule={createYearSchedule}
          getScale={getScale}
        />
      }
    </div>
  )
}

export default Schedule;