import React, {useRef} from 'react'
import classes from './AddCustomer.module.css';

const AddCustomer = (props) => {
    const nameRef=useRef();
    const emailRef=useRef();
    const telRef=useRef();
    const feedbackRef=useRef();

    const submitHandler = (event) =>
    {
        event.preventDefault();
        const customer = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            tel : telRef.current.value,
            feedback : feedbackRef.current.value,
        };
        // console.log(customer);
        props.onAddCustomer(customer);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' ref={emailRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='tel'>Telephone</label>
                <input type='number' id='tel' ref={telRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='feedback'>Feedback</label>
                <textarea row='5' type='text' id='feedback' ref={feedbackRef}></textarea>
            </div>
            <button>Add Customer</button>
        </form>
    )
}

export default AddCustomer
