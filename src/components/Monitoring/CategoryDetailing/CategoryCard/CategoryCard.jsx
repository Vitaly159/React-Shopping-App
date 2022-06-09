function CategoryCard({monthesIndex, selectValue, setFilterByCategory, setCategoryGraphic, yearScheduleOn,
                       getByCategory, setSelectValue, setDaysExpenses, createMonthSchedule, year, categoryPrice, 
                       allCategories}) {
    
  const categoryByYear = categoryPrice(year, 0, 12).map((elem, index) =>
    <div key={index} className="price-block">
      <div className="valuesName">{(elem.name).length > 0 ? elem.name : 'Без названия'}</div>
      <div>{elem.price+' руб.'}</div>
    </div>
  )
  
  const categoryByMonth = categoryPrice(year, monthesIndex, monthesIndex+1).map((elem, index) =>
    <div key={index} className="price-block">
      <div className="valuesName">{(elem.name).length > 0 ? elem.name : 'Без названия'}</div>
      <div>{elem.price+' руб.'}</div>
    </div>
  ) 

  return(
    <div className="period-detailing-wrapper right-block">

      <div className="detailing-header">
        <select value={selectValue}
                onChange={(e) => {setFilterByCategory(true); 
                  setCategoryGraphic(getByCategory(year, e.target.value)); 
                  setSelectValue(e.target.value); 
                  setDaysExpenses(createMonthSchedule(year, monthesIndex, e.target.value))
                }}>
                
          <option value='Расходы по категориям'>Выбрать категорию</option>
          {allCategories.map((category,index) => <option key={index} value={category}>{category}</option>)}
        </select>
      </div>

      <div className="detailing-expenses">
        {yearScheduleOn ? categoryByMonth : categoryByYear}
      </div>

    </div> 
  ) 
}

export default CategoryCard;