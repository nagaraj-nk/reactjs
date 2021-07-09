import React from 'react';

class BookDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            author: props.author
        }
    }

    render() {
        return (
            <div>
                <p>Book Title: {this.state.title}</p>
                <p>Book Author: {this.state.author}</p>
            </div>
        );
    }
}

export default BookDetails;