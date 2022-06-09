import React, { useState } from 'react';

import PeriodDetaling from './PeriodDetailing/PeriodDetailing';
import Schedule from './Schedule/Schedule';
import CategoryDetailing from './CategoryDetailing/CategoryDetailing';

import './monitoring.css';

function Monitoring({getPeriodArray, items}) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [yearScheduleOn, setYearScheduleOn] = useState(false);
  const month = new Date().getMonth();
  const [monthesIndex, setMonthesIndex] = useState(month);
  const [selectValue, setSelectValue] = useState('Расходы по категориям');
  const [filterByCategory, setFilterByCategory] = useState(false)

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
                        'Ноябрь', 'Декабрь'];
    
  const createYearSchedule = (year) => {
    const yearArray = [];

    for (let i = 0; i < 12; i++) {
      const monthArray = [];

        for (let j = 0; j < items.length; j++) {
          if (getPeriodArray(1,i,year, 0,i+1,year).includes(items[j].datesId)) {
            monthArray.push(items[j].price);
          }
        }

      yearArray.push(monthArray);
    }

    return yearArray.map(month => month.reduce((sum, curr) => Number(curr) + Number(sum), 0))
  }
  
  const createMonthSchedule = (year, month, category) => {
    const monthArray = [];
    const daysInMonth = getPeriodArray(1, month, year, 0, month+1, year);

    for (let i = 0; i < daysInMonth.length; i++) {
      const dayArray = [];

        for (let j = 0; j < items.length; j++) {
          if (
            daysInMonth[i] === items[j].datesId && 
            (items[j].category === category || category === 'Расходы по категориям')
          ) {
            dayArray.push(items[j].price);
          }
        }
      
      monthArray.push(dayArray);
    }

    return monthArray.map(day => day.reduce((sum, curr) => Number(curr) + Number(sum), 0));
  }

  const getByCategory = (year, category) => {
    const yearArray = [];
  
    for (let i = 0; i < 12; i++) {
      const monthArray = [];

      for (let j = 0; j < items.length; j++) {
        if (
          (getPeriodArray(1,i,year, 0,i+1,year).includes(items[j].datesId)) && 
          (items[j].category === category || category === 'Расходы по категориям')
        ) {
          monthArray.push(items[j].price);
        }
      }

      yearArray.push(monthArray);
    }

    return yearArray.map(month => month.reduce((sum, curr) => Number(curr) + Number(sum), 0));
  }

  const [categoryGraphic, setCategoryGraphic] = useState(getByCategory(year, 'Расходы по категориям'));
  const [daysExpenses, setDaysExpenses] = useState(createMonthSchedule(year, monthesIndex, 'Расходы по категориям'))
    
  return(
    <>
      <div>
        <h1>Приложение для учета покупок</h1>
      </div>

      <div className="monitoring-block">
        <PeriodDetaling 
          getPeriodArray={getPeriodArray}
          monthesIndex={monthesIndex}
          year={year}
          setYear={setYear}
          filterByCategory={filterByCategory}
          categoryGraphic={categoryGraphic}
          createYearSchedule={createYearSchedule}
          monthNames={monthNames}
          yearScheduleOn={yearScheduleOn}
          setYearScheduleOn={setYearScheduleOn}
          daysExpenses={daysExpenses}
        />

        <Schedule 
          yearScheduleOn={yearScheduleOn}
          createYearSchedule={createYearSchedule}
          year={year}
          getPeriodArray={getPeriodArray}
          items={items}
          filterByCategory={filterByCategory}
          categoryGraphic={categoryGraphic}
          setFilterByCategory={setFilterByCategory}
          setYearScheduleOn={setYearScheduleOn}
          setMonthesIndex={setMonthesIndex}
          setDaysExpenses={setDaysExpenses}
          monthNames={monthNames}
          createMonthSchedule={createMonthSchedule}
          monthesIndex={monthesIndex}
          selectValue={selectValue}
        />
      
        <CategoryDetailing 
          items={items}
          year={year}
          monthesIndex={monthesIndex}
          getPeriodArray={getPeriodArray}
          selectValue={selectValue}
          setFilterByCategory={setFilterByCategory}
          setCategoryGraphic={setCategoryGraphic}
          getByCategory={getByCategory}
          setSelectValue={setSelectValue}
          setDaysExpenses={setDaysExpenses}
          createMonthSchedule={createMonthSchedule}
         yearScheduleOn={yearScheduleOn}
        />
      </div>
    </>
  )
}

export default Monitoring;