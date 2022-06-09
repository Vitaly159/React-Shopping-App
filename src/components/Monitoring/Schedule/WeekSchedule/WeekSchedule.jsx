import './weeksSchedule.css'

function WeekSchedule({getByMonthCategory, year, selectValue, maxNum, getScale}) {

  const weeksSchedule = getByMonthCategory(year, selectValue).map((elem, index) => 
    <div key={index} className="week-scale">
      <div className="scalesContent-week" style={ { height: maxNum > 0 && getScale(elem.prices) } }>
        {elem.prices}
      </div>

      <p>{elem.week[0]}-</p>
      <p>{elem.week[elem.week.length-1]}</p>

    </div>
  )

  return(
    <>
      {weeksSchedule}
    </>
  )
}

export default WeekSchedule;