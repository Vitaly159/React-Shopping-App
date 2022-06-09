import {useState} from 'react';
import './tablesThead.css'

function TablesThead({getSelectedItems, getSelectedCategory, items, setMassive, setSelectsFilterOn}) {
  const [itemsName, setItemsName] = useState('Все покупки');
  const [category, setCategory] = useState('Все покупки');
    
  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of items){
        if(((elem.itemsName === value) || (elem.category === value)) || (value === 'Все покупки')) {
          arr.push(elem);
        }

        setMassive(arr);
      }; 
  };

  const getFilteredList = (targetValue, setValue, setValue2, value) => {
    getFilteredArray(targetValue, setValue);
    setValue2(targetValue);
    setSelectsFilterOn((targetValue || value) === 'Все покупки' ? false : true);
    setValue('Все покупки');
  }

  return(
    <thead>
      <tr>

        <th width='150px'>
          <h4>Дата покупки</h4>
        </th>
        
        <th width='270px'>
          <h4>Название покупки</h4>
          
          <select 
            className="selectors"
            value={itemsName} 
            onChange={(e) => {getFilteredList(e.target.value, setCategory, setItemsName, category)}}
          >
            <option>Все покупки</option>
            {getSelectedItems}
          </select>
        </th>
        
        <th width='270px'>
          <h4>Категория</h4>

          <select 
            className="selectors" 
            value={category} 
            onChange={(e) => {getFilteredList(e.target.value, setItemsName, setCategory, itemsName)}}
          >
            <option>Все покупки</option>
            {getSelectedCategory}
          </select>
        </th>
        
        <th width='270px'>
          <h4>Цена (руб.)</h4>
        </th>
        
      </tr>
    </thead>
  )
}

export default TablesThead;