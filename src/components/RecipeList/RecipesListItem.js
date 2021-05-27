import React from 'react'

import imgPlaceholder from '../../img/img-placeholder.svg'

const styles = {
    container: {
      position: 'relative', width: 220, height: 220, margin: 7,
      cursor: 'pointer', overflow: 'hidden'
    },
    img: {
        height: '100%', minWidth: '100%',
        backgroundImage: 'url(' + imgPlaceholder + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
        transition: '500ms'
      },
}

const RecipeListItem = props => {
    return (
        <div style={styles.container}>
            <img
            style={styles.img}
            src={props.data.photo}
            alt={props.data.name}
            onError={event => event.target.src = imgPlaceholder}
            />
        </div>
    )
}

export default RecipeListItem