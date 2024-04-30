import React, { useState } from 'react';

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase.util";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword } = formFields
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords dont match');
            return;
        }
        try{
             const { user } = await createAuthUserWithEmailAndPassword(email, password);
             await createUserDocumentFromAuth(user, displayName);
             alert('User created successfully')
             setFormFields(defaultFormFields)
        }
        catch(error){
        }
    }

    return (
        <div>
            <h1>Sign up with Email and Password</h1>
            <form onSubmit = {formSubmitHandler}>
                <label>DisplayName</label>
                <input type = 'text' required onChange = {onChangeHandler} name= 'displayName' value = {displayName}/>

                <label>Email</label>
                <input type = 'email' required onChange = {onChangeHandler} name= 'email' value = {email}/>

                <label>Password</label>
                <input type = 'password' required onChange = {onChangeHandler} name= 'password' value = {password}/>

                <label>Confirm Password</label>
                <input type = 'password' required onChange = {onChangeHandler} name= 'confirmPassword' value = {confirmPassword}/>

                <button type = 'submit'>Sign up </button>
            </form>
        </div>
    )
}

export default SignUp;