function TotalPrice({filter, showPeriods, periods, massive, items, selectedDate, selectsFilterOn}) {
    
  const getPricesArray = () => {
    if (selectsFilterOn) {
      if (filter || showPeriods) {
        return massive.filter(item => periods.includes(String(item.datesId)));
      } else {
        return massive.filter(item => item.datesId === selectedDate);
      }
    } else if (filter) {
        return items.filter(item => periods.includes(String(item.datesId)));
      } else {
        return items.filter(item => item.datesId === selectedDate);
    }
  }

  const total = getPricesArray().reduce((sum, obj) => Number(obj.price) + Number(sum), 0);

  return(
    <>
      {getPricesArray().length > 0 && 
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Итого: {total} руб.</td>
        </tr>
      }
    </> 
  )
}

export default TotalPrice;