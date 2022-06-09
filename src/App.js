import {useState, useEffect} from 'react';

import Notes from './components/Notes/Notes';
import Monitoring from './components/Monitoring/Monitoring';

import './App.css';

function App() {

  const currentDate = new Date();
  const [year, setYear] =  useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  
  const [items, setItems] = useState(localStorage.items ? JSON.parse(localStorage.items) : []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items]);

  const [massive, setMassive] = useState(items);

  const [selectsFilterOn, setSelectsFilterOn] = useState(false);
  const [filter, setFilter] = useState(false);
  
  const [firstDay, setFirstDay] = useState();
  const [firstMonth, setFirstMonth] = useState();
  const [firstYear, setFirstYear] = useState();
  const [secondDay, setSecondDay] = useState();
  const [secondMonth, setSecondMonth] = useState();
  const [secondYear, setSecondYear] = useState();
  
  const addNull = (value, num) => {
    value+=num

    if(value < 10){
      value = '0'+value;
    }

    return value;
  };

  const convertDate = (date) => { 
    return addNull(date.getDate(), 0 )+'.'+addNull(date.getMonth(), 1 )+'.'+date.getFullYear();
  };

  const [selectedDate, setSelectedDate] = useState(convertDate(currentDate));

  const amountMonthesDays = (date) => { 
    return date.getDate();
  };

  const getPeriodArray = (firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear) => {
    const result = [];
    let date = new Date(firstYear, firstMonth+1, 0);
    let monthesDays = amountMonthesDays(date);
    let day = firstDay;
    let dif = (new Date(secondYear, secondMonth, Number(secondDay)+1) - 
               new Date(firstYear, firstMonth, day))/(1000*3600*24);

    for (let i = 0; i < dif; i++) {
      if (day <= monthesDays) {
        result[i] = convertDate(new Date(firstYear, firstMonth, day++)); 
      } else {
        day = 1;
        firstMonth++;
        date = new Date(firstYear, firstMonth+1, 0);
        monthesDays = amountMonthesDays(date);

        result[i] = convertDate(new Date(firstYear, firstMonth, day++));
      }
    }

    return result;
  };

  const datesArray = (year, month) => {
    return getPeriodArray(1, month, year, 0, (Number(month)+1), year);
  }

  const [date, setDate] = useState(datesArray(year, month));
  
  const [periods, setPeriods] = useState(
    getPeriodArray(firstDay, firstMonth-1, firstYear, secondDay, secondMonth-1, secondYear)
  );

  const [showPeriods, setShowPeriods] = useState(false);

  return (
    <div className="App">
      <div className="content">
        <Monitoring
          items={items}
          getPeriodArray={getPeriodArray}
        />

        <Notes
          setMonth={setMonth}
          setYear={setYear}
          currentDate={currentDate}
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
          setFilter={setFilter}
          getPeriodArray={getPeriodArray}
          setPeriods={setPeriods}
          datesArray={datesArray}
          setShowPeriods={setShowPeriods}
          filteredPeriod={getPeriodArray(firstDay, firstMonth-1, firstYear, secondDay, secondMonth-1, secondYear)}
        />
      </div>
    </div>
  );
}

export default App;