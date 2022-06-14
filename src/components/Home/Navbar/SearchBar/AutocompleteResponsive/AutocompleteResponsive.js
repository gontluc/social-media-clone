import './AutocompleteResponsive.css'
import { BiArrowBack as BackIcon } from 'react-icons/bi'

const AutocompleteResponsive = ({ 
  activeAutocomplete, setActiveAutocomplete, activeSearch, setActiveSearch, autocompleteResults
}) => {

  return (
    <div className='autocomplete-responsive'>

        <div className='searchbar-autocomplete item'>
          <BackIcon 
            className='back-icon-responsive'
            onClick={() => {
              setActiveSearch(!activeSearch)
              setActiveAutocomplete(!activeAutocomplete)
            }}
          />
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
        </div>

        {activeAutocomplete && autocompleteResults()}
    </div>
  )
}

export default AutocompleteResponsive