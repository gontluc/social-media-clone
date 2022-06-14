import './FirstPage.css'
import { Link } from 'react-router-dom'
import comulleLogo from '../../images/logo.png'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'

const FirstPage = () => {
  const [loadingFirstPage, setLoadingFirstPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingFirstPage(false)
    }, 1100);
  }, [])

  return (
    loadingFirstPage 
      ? <Loading />
      : <div id='first-page'>
          <div id='title-div'>
            <img src={comulleLogo} alt="logo" id='comulle-logo'/>
            
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