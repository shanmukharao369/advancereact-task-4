import React ,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // using single state instead of mulitple state
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });


    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        // an alternative approache instaed of the above approach
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value};
        // });

    }

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
        // an alternative approache instaed of the above approach
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount : event.target.value};
        // });

    }

    const DateChangeHandler =(event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
        // an alternative approache instaed of the above approach
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredDate : event.target.value};
        // });

    } ;
    const submitHandler =(event)=>{
        event.preventDefault();
        const ExpenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(ExpenseData)
    }


    return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
    <div className='new-expense__control'>
        <label>Title</label>
        <input type = 'text' onChange={titleChangeHandler}></input>
    </div>
    <div className='new-expense__control'>
        <label>Amount</label>
        <input type = 'number' onChange={amountChangeHandler}></input>
    </div>
    <div className='new-expense__control'>
        <label>Date</label>
        <input type = 'date' onChange={DateChangeHandler}></input>
    </div>
    </div>
    <div className='new-expense__actions'>
    <button type='submit'>Add Expense</button>
    </div>
    
    
    </form>
}

export default ExpenseForm;