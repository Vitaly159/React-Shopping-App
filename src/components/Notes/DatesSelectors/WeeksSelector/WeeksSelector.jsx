import './weeksSelector.css'

function WeeksSelector({weeksSelector, getPeriodArray, setPeriods, month, year, setWeeksSelector,
                        setShowPeriods, setDatesSelector, setSelectsFilterOn, setShowChosenDate}) {

  const createWeeks = (m, y) => {
    const selectedMonth = getPeriodArray(1,m,y, 0,Number(m)+1,y);
    const resMonth = [];
    let num = 0;

      for (let i = 0; i < selectedMonth.length/7; i++ ) {
        const week = [];

        for (let j = 0; j < 7; j++) {
          if (num < selectedMonth.length) {
            week.push(selectedMonth[num]);
            num++;
          }
        }
        
        resMonth.push(week);
      }

    return resMonth;
  }

  const getChosenDate = createWeeks(month, year).map((week) => week[0]+'-'+week[week.length-1]);

  const showWeekItems = (value) => {
    if (value !== 'Выберете неделю') {
      setPeriods(createWeeks(month, year)[value]);
      setWeeksSelector(value);
      setShowPeriods(true);
      setDatesSelector('Выберете дату');
      setSelectsFilterOn(true);
      setShowChosenDate(getChosenDate[value]);
    } else {
      setShowPeriods(false);
      setWeeksSelector('Выберете неделю');
      setShowChosenDate('ДАТА НЕ ВЫБРАНА');
    }
  }

  return(
    <div className="selectors-block">
      <p>Список покупок по неделям:</p> 

      <select value={weeksSelector} onChange={(e) => showWeekItems(e.target.value)}>
        <option value='Выберете неделю'>Выберете неделю</option>

        {createWeeks(month, year).map((week, index) =>
          <option key={index} value={index}>{ week[0]+'-'+week[week.length-1]}</option>   
        )}
      </select>
    </div>
  )
}

export default WeeksSelector;