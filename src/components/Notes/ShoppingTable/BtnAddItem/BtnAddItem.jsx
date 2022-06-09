import uuid from 'react-uuid'
import './btnAddItem.css'

function BtnAddItem({filter, selectsFilterOn, items, setItems, selectedDate, showChosenDate}) {
    
  const addItem = () => {
    if (!selectsFilterOn) {
      const note = {
        itemsId: uuid(), 
        datesId: selectedDate, 
        itemsName: '', 
        category: '', 
        price: ''
      };

      setItems([note, ...items]);
    }
  }

  return(
    <div>
      {!filter && 
        <>
          <p className="chosenDate"> Выбранная дата: {showChosenDate}</p>

          <button className={selectsFilterOn ? "noColorBtn" : "addBtn"} onClick={() => addItem()}>
            Добавить покупку
          </button>
        </>
      }
    </div>
  )
}

export default BtnAddItem;