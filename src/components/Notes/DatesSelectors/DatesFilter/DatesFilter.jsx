import './datesFilter.css'

function DatesFilter({setFirstDay, setFirstMonth, setFirstYear, filteredPeriod, setSecondDay, setSecondMonth, 
                      setSecondYear, setPeriods, filter, setFilter}) {

  const getOnlyNums = (value) => { 
    let number = value.replace(/[^0-9]/g, '');

    return number;
  };

  return(
    <div>

      <div className="datesFilter-wrapper">

        <div className="list-filter">

          <p>Список покупок за период</p>

          <span>с</span> <input placeholder='дд' onChange={(e) => setFirstDay(getOnlyNums(e.target.value))} maxLength={2}/> 
          <input placeholder='мм' onChange={(e) => setFirstMonth(getOnlyNums(e.target.value))} maxLength={2}/>
          <input placeholder='гг' onChange={(e) => setFirstYear(getOnlyNums(e.target.value))} maxLength={4}/> <br/>
                
          <span>по</span> <input placeholder='дд' onChange={(e) => setSecondDay( getOnlyNums(e.target.value)) } maxLength={2}/> 
          <input placeholder='мм' onChange={(e) => setSecondMonth(getOnlyNums(e.target.value)) } maxLength={2}/> 
          <input placeholder='гг' onChange={(e) => setSecondYear(getOnlyNums(e.target.value)) } maxLength={4}/> <br/>
      
        </div>

        <div className="create-list">
          <button onClick={() => setPeriods(filteredPeriod)}>Построить список</button>
        </div>

      </div>

      <button className="back" onClick={()=>{setFilter(!filter)}}>Назад</button> 

    </div>
  )
}

export default DatesFilter;