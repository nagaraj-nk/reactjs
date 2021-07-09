import React from 'react';
import BookList from './BookList';

class BookAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Java'
        }
    }

    bookEdit() {
        window.location = "/bookedit";
    }

    render() {
        return (
            <div>
                <button onClick={ this.bookEdit }>Book Edit</button>
                <BookList />
            </div>
        );
    }
}

export default BookAuthor;