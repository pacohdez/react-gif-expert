import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return

        /* setCategories((categories) => {
            if (categories.includes(inputValue)) return categories
            return [inputValue, ...categories]
        }) */
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                onChange={onInputChange}
                value={inputValue}
            />
        </form>
    )
}
