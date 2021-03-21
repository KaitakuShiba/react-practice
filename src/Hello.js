import React from 'react'

class Hello extends React.Component {
    render() {
        return(
            <div id="name">Hello, {this.props.name}</div>
        );
    }
}

export default Hello;
