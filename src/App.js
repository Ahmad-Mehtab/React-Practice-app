import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./NewExpenses/NewExpense";



let DUMMY_DATA = [
    {
        id: 'a1',
        itemDate: new Date(17,12,2021),
        itemTitle: "laptop accessories",
        itemPrice : 1500 
    },
    {
        id: 'a2',
        itemDate: new Date(12,5,2020),
        itemTitle: "motercycle accessories",
        itemPrice : 1000
    },
    {
        id: 'a3',
        itemDate: new Date(22,11,2021),
        itemTitle: "laptop accessories",
        itemPrice : 5000
    }
];

const  App =() => {

    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const addExpenseToAppJs = (addExpense) => {

        const updatedExpenses = [addExpense, ...expenses];
        setExpenses(updatedExpenses);
        console.log(updatedExpenses);
    }
   return (
    <div>
        <NewExpense recieveExpenseFormJs ={addExpenseToAppJs}/>
        <Expenses item={expenses}/>
           
        </div>
       );
}
export default App;