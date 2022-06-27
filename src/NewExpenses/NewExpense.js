import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



function NewExpense(props) {

const expenseReturnFromChild = (revieveFromPropsData) =>{

  const expenseData = {
    ...revieveFromPropsData,
    id:Math.random().toString()
  };
  props.recieveExpenseFormJs(expenseData); 
}
  

  return (
    <div className='new-expense'>
        <ExpenseForm recieveExpenseData ={expenseReturnFromChild} />
       
    </div>
  )
}

export default NewExpense