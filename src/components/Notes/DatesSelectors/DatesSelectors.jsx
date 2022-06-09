import {useState} from 'react';

import MonthAndYearSelectors from './MonthAndYearSelectors/MonthAndYearSelectors';
import WeeksSelector from './WeeksSelector/WeeksSelector';
import DaysSelectors from './DaysSelectors/DaysSelectors';
import DatesFilter from './DatesFilter/DatesFilter';

import './DatesSelectors.css'

function DatesSelectors({date, setSelectedDate, convertDate, month, setDate, year, setFirstDay, setFirstMonth, 
                         setFirstYear, setPeriods, filteredPeriod, setSecondDay, setSecondMonth, setSecondYear, 
                         filter, setFilter, setYear, setMonth, getPeriodArray, setSelectsFilterOn, setShowPeriods, 
                         datesArray, currentDate, setShowChosenDate}) {

  const [weeksSelector, setWeeksSelector] = useState();
  const [datesSelector, setDatesSelector] = useState(convertDate(currentDate));

  const selectors = <div className="left-block-selectors">
                      <MonthAndYearSelectors 
                        setDate={setDate}
                        datesArray={datesArray}
                        setWeeksSelector={setWeeksSelector}
                        setPeriods={setPeriods}
                        year={year}
                        month={month}
                        setMonth={setMonth}
                        setYear={setYear}
                      />

                      <WeeksSelector 
                        weeksSelector={weeksSelector}
                        getPeriodArray={getPeriodArray}
                        setPeriods={setPeriods}
                        month={month}
                        year={year}
                        setWeeksSelector={setWeeksSelector}
                        setShowPeriods={setShowPeriods}
                        setDatesSelector={setDatesSelector}
                        setSelectsFilterOn={setSelectsFilterOn}
                        setShowChosenDate={setShowChosenDate}
                      />

                      <DaysSelectors 
                        setDatesSelector={setDatesSelector}
                        setSelectedDate={setSelectedDate}
                        datesSelector={datesSelector}
                        setWeeksSelector={setWeeksSelector}
                        setShowPeriods={setShowPeriods}
                        setSelectsFilterOn={setSelectsFilterOn}
                        date={date}
                        setShowChosenDate={setShowChosenDate}
                      />

                      <div className="btn-filter">
                        <button onClick={()=>setFilter(!filter)}>Задать диапазон дат</button>
                      </div>

                    </div>

  return (
    <div className="dates-selectors">
      {filter ? 
        <DatesFilter
          filteredPeriod={filteredPeriod}
          setFirstDay={setFirstDay}
          setFirstMonth={setFirstMonth}
          setFirstYear={setFirstYear}
          setSecondDay={setSecondDay}
          setSecondMonth={setSecondMonth}
          setSecondYear={setSecondYear}
          setPeriods={setPeriods}
          filter={filter}
          setFilter={setFilter}
        /> 
         : 
        selectors
      }
    </div>             
  );
}

export default DatesSelectors;