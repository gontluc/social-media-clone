import './SearchBar.css'
import { MdPersonSearch as SearchIcon } from 'react-icons/md'
import { GoSearch as SearchIconActive } from 'react-icons/go'
import { useState } from 'react'
import Autocomplete from './Autocomplete/Autocomplete'
import AutocompleteResponsive from './AutocompleteResponsive/AutocompleteResponsive'

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeAutocomplete, setActiveAutocomplete] = useState(false)

    const clickWithBigWidth = () => {
        return (
            <div className={
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
                {activeAutocomplete && <Autocomplete 
                    autocompleteResults={autocompleteResults}
                    autocompleteClass={'autocomplete'}
                />}
            </div>
        )
    }

    const clickWithSmallWidth = () => {
        return (
            <>
                <SearchIcon 
                    className='search-icon' 
                    onClick={() => {
                        setActiveSearch(!activeSearch)
                        setActiveAutocomplete(!activeAutocomplete)
                    }}
                />

                {activeSearch && <AutocompleteResponsive 
                    activeAutocomplete={activeAutocomplete}
                    setActiveAutocomplete={setActiveAutocomplete}
                    activeSearch={activeSearch}
                    setActiveSearch={setActiveSearch}
                    autocompleteResults={autocompleteResults}
                />}
                
            </>
        )
    }

    const noClick = () => {
        return (
            <SearchIcon 
                className='search-icon' 
                onClick={() => setActiveSearch(!activeSearch)}
            />
        )
    }
    
    const autocompleteResults = () => {
        return (
        <>
          <div className='item'>Autocomplete1</div>
          <div className='item'>Autocomplete2</div>
          <div className='item'>Autocomplete3</div>
        </>
        )
    }

  return (
    <div className="searchbar">
        {activeSearch & window.innerWidth > 800
            ? clickWithBigWidth()
            : activeSearch & window.innerWidth <= 800 
                ? clickWithSmallWidth()
                : noClick()
        }
    </div>
  )
}

export default SearchBar