import TablesThead from './TablesThead/TablesThead';
import TablesTbody from './TablesTbody/TablesTbody';
import BtnAddItem from './BtnAddItem/BtnAddItem';

import './shoppingTable.css';

function ShoppingTable({selectedDate, periods, filter, massive, items, setItems, setMassive, showPeriods, 
                        selectsFilterOn, showChosenDate, setSelectsFilterOn}) {

  const itemsSelectorArray = () => {
    return [...new Set(items.map(item => item.itemsName))];
  };

  const categorySelectorArray = () => {
    return [...new Set(items.map(item => item.category))];
  };

  const getSelectedItems = itemsSelectorArray().map( (itemSelector, index) => 
    <option key={index} value={itemSelector}>
      {(itemSelector).length > 0 ? itemSelector : 'Без названия'}
    </option>
  );

  const getSelectedCategory = categorySelectorArray().map( (categorySelector, index) => 
    <option key={index} value={categorySelector}>
      {(categorySelector).length > 0 ? categorySelector : 'Без названия'}
    </option>
  );

  return( 
    <div className="wrapper">

      <BtnAddItem 
        items={items}
        setItems={setItems}
        filter={filter}
        selectedDate={selectedDate}
        setMassive={setMassive}
        selectsFilterOn={selectsFilterOn}
        showChosenDate={showChosenDate}
      />

      
      <table>
        <TablesThead 
          getSelectedItems={getSelectedItems}
          getSelectedCategory={getSelectedCategory}
          items={items}
          setMassive={setMassive}
          setSelectsFilterOn={setSelectsFilterOn}
        />

        <TablesTbody 
          items={items}
          setItems={setItems}
          selectedDate={selectedDate} 
          periods={periods}
          filter={filter}
          massive={massive}
          getSelectedItems={getSelectedItems}
          getSelectedCategory={getSelectedCategory}
          showPeriods={showPeriods}
          selectsFilterOn={selectsFilterOn}
        />
      </table>
      

    </div>
  );
}

export default ShoppingTable;