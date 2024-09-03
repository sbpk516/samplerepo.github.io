import React from 'react';
import PropTypes from "prop-types";


const Items = (props)  => {
    return(<h1>Header text from Items components {props.quantity} {props.name}</h1>)
}


Items.defaultProps = {
    quantity:0
}

Items.propTypes = {
    quantity:PropTypes.number.isRequired
}

class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstLastName:"Balaji Sachidanandam "
        }
    }

    render(){
        return <Items quantity = {this.props.quantity} name = {this.state.firstLastName}/>
    }

}

export default ShoppingCart;

