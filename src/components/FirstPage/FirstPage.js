import './FirstPage.css'
import { Link } from 'react-router-dom'

const FirstPage = () => {
  return (
    <div id='first-page'>
        <div id='title-div'>
          <img src="logo.png" alt="logo" id='logo'/>
          
          <h1>Social Comulle</h1>
          
          <p>What are you waiting for? Let's connect!</p>
        </div>
        <div id='box-div'>
            <Link to={'/home'} className='link login'>Log in</Link>
            <Link to={'/home'} className='link create'>Create new account</Link>
        </div>
    </div>
  )
}

export default FirstPage