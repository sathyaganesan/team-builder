import React,  {useState } from 'react';

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
        props.formAttr(form);
        setForm({name: " ", email: " ", role: ""});
    };    

    return (
        <form onSubmit = {submitForm}>
            <p>
                <label htmlFor = "name">Team Member Name </label>
                <input type = "text" name = "name" value = {form.name} onChange = {changeHandler}/>
            </p>
            <p>
                <label htmlFor ="email"> E-mail Id </label>
                <input type = "email" name = "email" value = {form.email} onChange = {changeHandler}/>
            </p>
            <p>
                <label htmlFor = "role">Role </label>
                <input type = "text" name = "role" value = {form.role} onChange = {changeHandler}/>
                {/* <select>
                  <option value ="uiDesigner">UI Designer</option>
                  <option value ="frontend">FrontEnd Engineer</option>
                  <option value ="backend">Backend Engineer</option>
                  <option value ="testing">Testing Engineer</option>
                </select> */}
            </p>
            <p><button type = "Submit"> Add a Team Member </button></p>
        </form> 
    );
};

export default Form;