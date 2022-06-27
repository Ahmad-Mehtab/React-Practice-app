import React from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


let Expenses = (props) => {
  return (

    <div className='expenses'>
      {
      props.item.map(
        expense => (
          <ExpenseItem
            date={expense.itemDate}
            title={expense.itemTitle}
            price={expense.itemPrice} />
        )
      )
      }
    </div>
  )
}

export default Expenses


