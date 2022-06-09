import './periodDetailing.css'

function PeriodDetaling({getPeriodArray, monthesIndex, year, setYear, filterByCategory, categoryGraphic, 
                         createYearSchedule, monthNames, yearScheduleOn, setYearScheduleOn, daysExpenses}) {

  const period = getPeriodArray(1, monthesIndex, year, 0, monthesIndex+1, year);

  const detailingYearBlock = (filterByCategory ? categoryGraphic : createYearSchedule(year)).map((month, index) => 
    <div key={index} className="price-block">
      <div className="valuesName">{monthNames[index]}</div>
      <div>{month+' руб.'}</div>
    </div>
  );

  const detailingMonthBlock = daysExpenses.map((day, index) => 
    <div key={index} className="price-block">
      <div className="valuesName">{period[index]}</div>
      <div>{day+' руб.'}</div>
    </div>
  );

  const changeYear = (num) => {
    setYear(year+num);
  }
    
  return(
    <div className="period-detailing-wrapper">

      <div className={`detailing-header ${yearScheduleOn && "btn-back"}`}>
        {yearScheduleOn ?
          <button onClick={() => setYearScheduleOn(false)}>Показать расходы за год</button>
          :
          <>
            <button className="btnChangeYear" onClick={() => changeYear(-1)}>{'<'}</button>
            <span>Расходы в {year} году</span>
            <button className="btnChangeYear" onClick={() => changeYear(1)}>{'>'}</button>
          </>
        }
      </div>

      <div className="detailing-expenses">
        {yearScheduleOn ? detailingMonthBlock : detailingYearBlock}
      </div>
      
    </div>
  )
}

export default PeriodDetaling;