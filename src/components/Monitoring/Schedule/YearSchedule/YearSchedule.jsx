import './yearSchedule.css'

function YearSchedule({year, maxNum, filterByCategory, categoryGraphic, setFilterByCategory, createYearSchedule, 
                       getScale, setYearScheduleOn, setMonthesIndex, setDaysExpenses, monthNames, 
                       createMonthSchedule}) {

  const clickYear = (y, i) => {
    setFilterByCategory(true);
    setYearScheduleOn(true);
    setMonthesIndex(i);
    setDaysExpenses(createMonthSchedule(y, i, 'Расходы по категориям'));
  }

  const yearSchedule = (filterByCategory ? categoryGraphic : createYearSchedule(year)).map((month, index) =>  
    <div key={index} className="scale">

      <div 
        className="scalesContent"
        style={{height: maxNum > 0 && getScale(month)}}
        onClick={() => clickYear(year, index)}
      >
      </div>

      <p>{monthNames[index].slice(0, 3)}</p>

    </div>
  )

  return(
    <>
      {yearSchedule}
    </>  
  )
}

export default YearSchedule;