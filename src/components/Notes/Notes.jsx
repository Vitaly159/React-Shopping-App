import {useState} from 'react';

import DatesSelectors from './DatesSelectors/DatesSelectors';
import ShoppingTable from './ShoppingTable/ShoppingTable'

import './notes.css';

function  Notes({selectedDate, periods, filter, setFilter, massive, items, setItems, date, setDate, convertDate, 
                 month, year, setShowPeriods, setYear, setMonth, setMassive, showPeriods, selectsFilterOn, 
                 setSelectsFilterOn, setSelectedDate, getPeriodArray, setPeriods, filteredPeriod, setFirstDay, 
                 setFirstMonth, setFirstYear, setSecondDay, setSecondMonth, setSecondYear, datesArray, currentDate}) {

  const [showChosenDate, setShowChosenDate] = useState(selectedDate);

  return(
    <div className="workSpace-wrapper">
      <DatesSelectors 
        currentDate={currentDate}
        date={date}
        setSelectedDate={setSelectedDate}
        convertDate={convertDate}
        month={month}
        setDate={setDate}
        year={year}
        setFirstDay={setFirstDay}
        setFirstMonth={setFirstMonth}
        setFirstYear={setFirstYear}
        setSecondDay={setSecondDay}
        setSecondMonth={setSecondMonth}
        setSecondYear={setSecondYear}
        filter={filter}
        setFilter={setFilter}
        getPeriodArray={getPeriodArray}
        setSelectsFilterOn={setSelectsFilterOn}
        setPeriods={setPeriods}
        filteredPeriod={filteredPeriod}
        setShowPeriods={setShowPeriods}
        datesArray={datesArray}
        setShowChosenDate={setShowChosenDate}
        setMonth={setMonth}
        setYear={setYear}
      />
      
      <ShoppingTable 
        selectedDate={selectedDate}
        filter={filter}
        items={items}
        setItems={setItems}
        massive={massive}
        setMassive={setMassive}
        selectsFilterOn={selectsFilterOn}
        setSelectsFilterOn={setSelectsFilterOn}
        periods={periods}
        showPeriods={showPeriods}
        showChosenDate={showChosenDate}
      />
    </div>
  );
}

export default Notes;