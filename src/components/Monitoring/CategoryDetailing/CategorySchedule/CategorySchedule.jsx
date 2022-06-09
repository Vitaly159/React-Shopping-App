import './categorySchedule.css'

function CategorySchedule({categoryPrice, year, monthesIndex, yearScheduleOn}) {

  const maxNum = Math.max.apply(null, (yearScheduleOn ? 
    categoryPrice(year, monthesIndex, monthesIndex+1) : categoryPrice(year, 0, 12)).map(elem => elem.price)
  );
  
  const getScale = (value) => { 
    return value/(maxNum/180)+'px';
  };

  const categoryYearSchedule = categoryPrice(year, 0, 12).map((category, index) => 
    <div key={index} className="scale-category-block">
      <span className="text">{(category.name).length > 0 ? category.name : 'Без названия'}</span>
      
      <div key={index} className="scale-category" style={{width: maxNum > 0 && getScale(category.price)}}>
      </div>
    </div>
  )

  const categoryMonthSchedule = categoryPrice(year, monthesIndex, monthesIndex+1).map((category, index) =>
    <div key={index} className="scale-category-block">
      <span className="text">{(category.name).length > 0 ? category.name : 'Без названия'}</span>
      
      <div className="scale-category" style={{width: maxNum > 0 && getScale(category.price)}}>
      </div>
    </div>
  )

  return(
    <div className="schedule-category">

      <div className="schedule-category-header">
        Сравнение по категориям 
      </div>

      <div className="detailing-expenses">
        {yearScheduleOn ? categoryMonthSchedule : categoryYearSchedule}
      </div>

    </div> 
  )
}

export default CategorySchedule;