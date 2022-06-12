import './SearchBar.css'
import { MdPersonSearch as SearchIcon } from 'react-icons/md'
import { GoSearch as SearchIconActive } from 'react-icons/go'
import { useState } from 'react'
import Autocomplete from './Autocomplete/Autocomplete'

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeAutocomplete, setActiveAutocomplete] = useState(false)

  return (
    <div className="searchbar">
        {activeSearch 
            ? <div className={
                `search-active-div ${activeAutocomplete && 'search-active-div-autocomplete'}`
            }>
                <SearchIconActive className='search-active'/>
                <form action="">
                    <input 
                        type="text" 
                        placeholder='Search friend' 
                        spellCheck={false} 
                        autoComplete='off'
                        id='input-text'
                        onInput={(e) => {
                            !activeAutocomplete | !e.target.value
                                && setActiveAutocomplete(!activeAutocomplete)
                        }}
                    />
                </form>
                {activeAutocomplete && <Autocomplete />}
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