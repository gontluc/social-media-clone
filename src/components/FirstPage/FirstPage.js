import './FirstPage.css'
import comulleLogo from '../../images/logo.png'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'


const FirstPage = ({ SignIn }) => {
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
              <SignIn />
              <div className='link create'>Create new account</div>
          </div>
      </div>
  )
}

export default FirstPage