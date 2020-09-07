import React,  {useState } from 'react';
import ReactDOM from "react-dom";

const Form = (props) => {
    
    const [form, setForm] = useState({
        name: " ",
        email: " ",
        role: " ",
    });

    const changeHandler = (e) => {
        console.log(e.target.value);
        console.log(form);
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewForm(form);
        setForm({name: " ", email: " "});
    };    

    return (
        <form onSubmit = {submitForm}>
            <p>
                <label htmlFor = "tmemName">Team Member Name </label>
                <input type = "text" name = "tmemName" value = {form.name} onChange = {changeHandler}/>
            </p>
            <p>
                <label htmlFor ="tmemEmail"> E-mail Id </label>
                <input type = "email" name = "tmemEmail" value = {form.email} onChange = {changeHandler}/>
            </p>
            <p>
                <label htmlFor = "memRole">Role </label>
                <select>
                  <option value ="uiDesigner">UI Designer</option>
                  <option value ="frontend">FrontEnd Engineer</option>
                  <option value ="backend">Backend Engineer</option>
                  <option value ="testing">Testing Engineer</option>
                </select>
            </p>
            <p><button type = "Submit"> Add a Team Member </button></p>
        </form> 
    );
};

export default Form;