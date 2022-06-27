import React, {useState} from 'react'

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    let [newTitle, setNewTitle] =useState("");
    let [newAmount, setNewAmount] =useState("");
    let [newDate, setNewDate] =useState("");

    const titleClickHandler =(event) =>{
        setNewTitle(event.target.value);
    } 
    const amountClickHandler =(event) =>{
        setNewAmount(event.target.value);
    } 
    const dateClickHandler =(event) =>{
        setNewDate(event.target.value);
    } 
    const submitHandler =(event) =>{
            event.preventDefault();
            
            const expenseData ={
                title: newTitle,
                amount:newAmount,
                date: new Date(newDate)
            }
            props.recieveExpenseData(expenseData);
          
          
            setNewTitle('');
            setNewAmount('');
            setNewDate('');


    };
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={newTitle} onChange={titleClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amouont</label>
                    <input type="number" value={newAmount} min="0.01" step="0.01" onChange={amountClickHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={newDate} onChange={dateClickHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
    </div>
  )
}

export default ExpenseForm