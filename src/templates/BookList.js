import React from 'react';
import BookDetails from './BookDetails';

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { title: 'A Christmas Carol', author: 'Charles Dickens' },
                { title: 'The Mansion', author: 'Henry Van Dyke' }
            ]
        }

    }

    render() {
        return (
            <ul>
                {this.state.list.map((book, i) => <BookDetails title={book.title} author={book.author} key={i} />)}
            </ul>
        );
    }
}

export default BookList;