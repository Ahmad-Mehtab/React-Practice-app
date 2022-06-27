import './ExpenseDate.css';
import React from 'react'

let ExpenseDate = (props) => {
    let year  = props.date.getFullYear();
    let month = props.date.toLocaleString('en-US',{month:'long'});
     let day   = props.date.toLocaleString('en-US',{day:'2-digit'});
  return (

    <div className='expense_date'>
        <div className='expense_month'>{month}</div>
        <div className='expense_year'>{year}</div>
        <div className='expense_day'>{day}</div>
        </div>
  )
}

export default ExpenseDate