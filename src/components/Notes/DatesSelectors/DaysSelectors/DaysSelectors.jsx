import './daysSelectors.css'

function DaysSelectors({setDatesSelector, setSelectedDate, datesSelector, setWeeksSelector, setShowPeriods, 
                        setSelectsFilterOn, date, setShowChosenDate}) {
    
  const getSelectorsDates = (event) => {
    setDatesSelector(event.target.value);
    setSelectedDate(event.target.value);
    setShowChosenDate(event.target.value);
    setWeeksSelector('Выберете неделю'); 
    setShowPeriods(false); 
    setSelectsFilterOn(false);
  }    
    
  return(
    <div className="selectors-block">
      <p>Список покупок на дату:</p> 
      
      <select value={datesSelector} onChange={(e) => getSelectorsDates(e)}>
        <option>Выберете дату</option>
                                
        {date.map((day, index) => 
          <option className="headers-option" key={index} value={day}>
            {day}
          </option>
        )}
      </select>
    </div>
  )
}

export default DaysSelectors;