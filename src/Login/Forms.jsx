import React,{useState} from 'react';
import './Forms.css';

export const LoginForm = () => {
    const[formData,setData] = useState({email:"",password:""})
    const[validForm,setValid] = useState(false);
    const[timeoutFlag , setTimeoutFlag] = useState(false);
    
    const handleBetter = (e) => {
        e.persist();
        let timer;
        if (!timeoutFlag) {
            timer = setTimeout(()=>handleInputChange.call(null,e),3000)
            setTimeoutFlag(true);
        }
        else {
            clearTimeout(timer);
            setTimeoutFlag(false);
        }
        
    }
    const handleInputChange = (e) => {
       let data = {...formData};
       data[e.target.name] = e.target.value;
       setData(data);
    }
    const handleFormSubmit = (e) => {
            if (validForm) {
                console.log("hello i am submitted")
            }
    }
    return(
        <>
        <header>Login Form</header>
        <div id="form" onChange={handleBetter}>
            <label> Email : <input type="text" name="email"/> </label>
            <label> Password : <input type="text" name="password"/> </label>
            <button onClick={handleFormSubmit}> Submit</button>
        </div>
        {validForm ? <p> Form Submitted Sucessfully</p> : null}
        </>
    )
        
    

}