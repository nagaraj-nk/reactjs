import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.username,
            items: []
        }

        this.fetch = this.fetch.bind(this);
    }

    

    fetch() {
        fetch("https://cool-time.firebaseio.com/products.json")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: Object.values(result)
                })
            });
    }

    render() {
        return (
            <div>
                Home Page
                <p>Username: {this.state.username}</p>

                <button onClick={
                    this.fetch
                }>
                    Fetch
                </button>

                <NumberList items={this.state.items} />
                
            </div>
        );
    }
}



function NumberList(props) {

    function onItemClickHandler(item) {
        alert(item.name);
    }

    const items = props.items;
    const listItems = items.map((item, index) =>
        <li key={"key_" + index}
            value={item} onClick={() => onItemClickHandler(item)}
            >{item.name}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


export default Home;