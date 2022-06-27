import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';
import React from 'react';
// import React, {useState} from 'react'

let ExpenseItem = (props) => {
 
   // const [title, setTitle] = useState(props.title);
   // const [newTitle, setNewTitle] = useState("");

   // const clickHandle = ()=>{
   //    setTitle(newTitle);
   // }
   // const changeHandle = (event)=>{
   //    setNewTitle(event.target.value);
   // }
  
    return (
       <div className='expense-item'>
          <div>
         <ExpenseDate date={props.date} />
          </div>
          <h2 className='expense-item__description'>{props.title}</h2>
          <h1 className='expense-item__price'>{props.price}</h1>
          {/* <input type="text" value={newTitle} onChange={changeHandle} />
          <button onClick={clickHandle} className="change_title">ChangeTitle</button> */}
       </div>
       
       
    );
}

export default ExpenseItem;