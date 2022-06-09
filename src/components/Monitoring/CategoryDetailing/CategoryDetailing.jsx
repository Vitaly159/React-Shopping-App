import CategoryCard from './CategoryCard/CategoryCard'
import CategorySchedule from './CategorySchedule/CategorySchedule'

function CategoryDetailing({items, year, monthesIndex, getPeriodArray, selectValue, setFilterByCategory, 
                            setCategoryGraphic, getByCategory, setSelectValue, setDaysExpenses, createMonthSchedule, 
                            yearScheduleOn}) { 

  const allCategories =  [...new Set(items.map(item => item.category))];

  const categoryPrice = (year, month1, month2) => {
    const all = [];
    const selectedYear = getPeriodArray(1,month1,year, 0,month2,year);
    
      for (let i = 0; i < allCategories.length; i++) {
        const each = [];
      
        for (let j = 0; j < items.length; j++) {
          if ((allCategories[i] === items[j].category) && (selectedYear.includes(items[j].datesId))) {
            each.push(items[j].price);
          }
        }

      const resEach = each.reduce((sum, curr) => Number(curr) + Number(sum), 0);
      const obj = {name: allCategories[i], price: resEach};
      all.push(obj);
    }

    return all;
  }

  return(
    <>
      <CategoryCard 
        monthesIndex={monthesIndex}
        selectValue={selectValue}
        setFilterByCategory={setFilterByCategory}
        setCategoryGraphic={setCategoryGraphic}
        getByCategory={getByCategory}
        setSelectValue={setSelectValue}
        setDaysExpenses={setDaysExpenses}
        createMonthSchedule={createMonthSchedule}
        year={year}
        categoryPrice={categoryPrice}
        allCategories={allCategories}
        yearScheduleOn={yearScheduleOn}
      /> 

      <CategorySchedule  
        categoryPrice={categoryPrice}
        year={year}
        monthesIndex={monthesIndex}
        yearScheduleOn={yearScheduleOn}
      />
    </>
  )
}

export default CategoryDetailing;