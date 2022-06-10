import './SearchBar.css'
import { MdPersonSearch as SearchIcon } from 'react-icons/md'
import { GoSearch as SearchIconActive } from 'react-icons/go'
import { useState } from 'react'

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)

  return (
    <div className="searchbar">
        {activeSearch 
            ? <div className='search-active-div'>
                <SearchIconActive className='search-active'/>
                <form action="">
                    <input type="text" placeholder='Search friend' spellCheck={false}/>
                </form>
            </div>
            
            : <SearchIcon 
                className='search-icon' 
                onClick={() => setActiveSearch(!activeSearch)}
            />
        }
    </div>
  )
}

export default SearchBar