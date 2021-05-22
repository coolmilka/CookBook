import { TextField } from '@material-ui/core'
import React from 'react'

const MAX_LENGTH = 30
const MIN_INGREDIENT_LENGTH = 3

const styles = {
    container: {maxWidth: 380},
    inputsDiv: {display: 'flex', justifyContent: 'center'},
    input: {margin: '10px 20px 10px 0', maxWidth: 150}


}

const Ingredients = props => {

    const [ingredient, setIngredient] = React.useState('')
    const [ingredientError, setIngredientError] = React.useState(false)

    const ingredientValidate = value => {
        const validValue = value && value.replace(/\s{2,}/g, ' ')
        if (value !== validValue) {
          setIngredient(validValue)
        }

        const isError = !validValue || validValue < MIN_INGREDIENT_LENGTH
        setIngredientError(isError)
        return isError
    }

    const setValidIngredients = string => {
        if (string.length < MAX_LENGTH) {
            setIngredient(string)
        }
    }

    const inputs = [
        {
            label: 'Składnik',
            value: ingredient,
            error: ingredientError,
            helperText: 'Min 3 znaki',
            onChange: setValidIngredients,
            validate: ingredientValidate,


        }
    ]

    return(
        <div style={styles.container}>
            <div style={styles.inputsDiv}>
            {inputs.map(input =>
             <TextField
                key={input.label}
                style={styles.input}
                variant='standard'
                fullWidth
                label={input.label}
                value={input.value}
                error={input.error}
                helperText={input.error && input.helperText}
                onChange={event => {
                    input.onChange(event.target.value)
                    if(input.error) {
                        input.validate(event.target.value)
                    }
                }}
                onBlur={() => input.validate(input.value)}
                multiline={input.multiline}
                type={input.type || 'text'}
                InputProps={input.InputProps}
                placeholder={input.placeholder}
            />
            )}
            </div>
        </div>
    )
}

export default Ingredients