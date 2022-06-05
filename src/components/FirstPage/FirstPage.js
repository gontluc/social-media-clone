import './FirstPage.css'
import { Link } from 'react-router-dom'

const FirstPage = () => {
  return (
    <div id='first-page'>
        <div id='title-div'>
            <h5>Social Media</h5>
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