import {useState} from 'react';

import TotalPrice from './TotalPrice/TotalPrice';

import './tablesTbody.css'

function TablesTbody({items, setItems, selectedDate, periods, filter, getSelectedItems, massive, selectsFilterOn, 
                      getSelectedCategory, showPeriods}) {

  const [selectedItem, setSelectedItem] = useState(false);

  const getActiveNotetice = () => {
    return items.find(item => item.itemsId === selectedItem);
  };
    
  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = items.map(note => {
      if (note.itemsId === selectedItem) {
        return updateNote;
      }
        
      return note;
    });

    setItems(updatedNotesArray);
  };

  const onEditField = (field, value) => {
    onUpdateNote({
      ...getActiveNotetice(),
      [field]: value
    })
  }

  const onDeleteNote = (id) => {
    setItems(items.filter((item) => item.itemsId !== id));
  }
    
  const stopAction = (!filter && !selectsFilterOn);

  const itIsItems = (
    selectsFilterOn ? massive : items).find(item => ((filter || showPeriods) ? 
      periods.includes(String(item.datesId)) : selectedDate === item.datesId
    )
  );
  
  const noItems = <tr className="noItems">
                    <td>Нет покупок в выбранном периоде</td>
                  </tr>;

  const getOnlyNums = (value) => { 
    let number = value.replace(/[^0-9]/g, '');
    return number
  };

  return(
    <tbody className="table-block">     
      {itIsItems ? ((selectsFilterOn ? massive : items).map((item, index) => ((filter || showPeriods) ? 
        periods.includes(String(item.datesId)) : selectedDate === item.datesId) &&

          <tr key={index} onClick={() => setSelectedItem(item.itemsId)}>

            <td className="cellDate">{item.datesId}</td>

            <td className="cell">
              <input placeholder='Название покупки' 
                maxLength={20} 
                className="itemsName" 
                list="itemsNames" 
                onChange={(e) => onEditField(stopAction && "itemsName", e.target.value)} 
                value={item.itemsName}
              />
              {item.itemsName.length === 0 && <datalist id="itemsNames">{getSelectedItems}</datalist>}
            </td>

            <td className="cell">
              <input placeholder='Категория покупки' 
                maxLength={20} 
                className="category" 
                list="category" 
                onChange={(e) => onEditField(stopAction && "category", e.target.value)} 
                value={item.category}
              />
              {item.category.length === 0 && <datalist id="category">{getSelectedCategory}</datalist>}
            </td>

            <td className="cell">
              <input maxLength={10} 
                
                onChange={(e) => onEditField(stopAction && "price", getOnlyNums(e.target.value))} 
                value={item.price}
                placeholder='0'
              />
            </td>
                    
            {stopAction && 
              <td className="delete" onClick={() => onDeleteNote(item.itemsId)}>
                X
              </td> 
            }
                    
          </tr>

        )) : 
        noItems 
      }

      <TotalPrice 
        filter={filter}
        showPeriods={showPeriods} 
        periods={periods} 
        massive={massive} 
        items={items} 
        selectedDate={selectedDate} 
        selectsFilterOn={selectsFilterOn}
      />
    </tbody>
  )
}

export default TablesTbody;