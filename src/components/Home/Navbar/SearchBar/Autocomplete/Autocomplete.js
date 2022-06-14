import './Autocomplete.css'

const Autocomplete = ({ autocompleteResults, autocompleteClass }) => {
  return (
    <div className={autocompleteClass}>
        {autocompleteResults()}
    </div>
  )
}

export default Autocomplete