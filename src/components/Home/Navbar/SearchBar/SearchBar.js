import './SearchBar.css'
import { MdPersonSearch as SearchIcon } from 'react-icons/md'
import { GoSearch as SearchIconActive } from 'react-icons/go'
import { useState } from 'react'
import Autocomplete from './Autocomplete/Autocomplete'
import AutocompleteResponsive from './AutocompleteResponsive/AutocompleteResponsive'

const SearchBar = ({ setClickProfile, friends, getUserImg, getUserName, getUserUsername }) => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeAutocomplete, setActiveAutocomplete] = useState(false)
    const [searchFriend, setSearchFriend] = useState('')

    const clickWithBigWidth = () => {

        const doNothing = (e) => {
            e.preventDefault()
        }

        return (
            <div className={
                `search-active-div ${activeAutocomplete && 'search-active-div-autocomplete'}`
            }>
                <SearchIconActive className='search-active'/>
                <form onSubmit={(e) => doNothing(e)}>
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
                        onChange={(e) => setSearchFriend(e.target.value)}
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
        let counterResults = 0

        return (
            friends.map((friend) => {
                getUserName(friend).toLowerCase().includes(searchFriend.toLowerCase())  
                | getUserUsername(friend).toLowerCase().includes(searchFriend.toLowerCase())
                    && counterResults++
                return (
                    counterResults <= 4 &
                    (getUserName(friend).toLowerCase().includes(searchFriend.toLowerCase())  
                    | getUserUsername(friend).toLowerCase().includes(searchFriend.toLowerCase()))
                        ? <div 
                            className='item' 
                            key={friend} 
                            onClick={() => {
                                setClickProfile(friend)
                                setActiveSearch(false)
                                setActiveAutocomplete(false)
                                setSearchFriend('')
                            }}
                        >
                            <img src={getUserImg(friend)} />
                            <div>
                                <div>{getUserName(friend)}</div>
                                <div className='username'>{getUserUsername(friend)}</div>
                            </div>
                        </div>
                        : <div></div>
                )
            })
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