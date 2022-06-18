import { useState, useEffect } from 'react';
import './SignUpForm.css'
import Loading from '../Loading/Loading';
import comulleLogo from '../../images/logo.png'

const SignUpForm = () => {
    const [loadingForm, setLoadingForm] = useState(true)
    const [username, setUsername] = useState('')

    useEffect(() => {
      setTimeout(() => {
        setLoadingForm(false)
      }, 1100);
    }, [])
  
    return (
        loadingForm 
        ? <Loading />
        : <div id='signup-form'>
            <div id='top-form'>
              <img src={comulleLogo} alt="logo" id='comulle-logo-form'/>
              
              <h1>Social Comulle</h1>
              
              <p>What are you waiting for? Let's connect!</p>
            </div>
            <div id='form-div'>
                <p>Choose a username for you</p>
                <form >{/* HEERERERERRERERERERRE */}
                    <input 
                        id='username-input'
                        spellCheck={false}
                        autoComplete='off'
                        type="text"
                        value={username}
                        placeholder='Enter username'
                        required={true}
                        maxLength={25}
                        minLength={7}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className='create-account'>Create Account!</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm