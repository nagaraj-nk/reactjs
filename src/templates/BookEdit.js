import React, { useState } from 'react'

function BookEditForm() {
    const [title, setTitle] = useState();

    function handleTitleChange(evt) {
        setTitle(evt.target.value)
    }
    return (
        <form>
            <p>{ title }</p>
            <BookTitle onTitleChange={handleTitleChange} title={title} />
        </form>
    )
}

function BookTitle(props) {
    return (
        <label>
            Title:
            <input onChange={props.onTitleChange} value={props.title} />
        </label>
    )
}


export default BookEditForm;