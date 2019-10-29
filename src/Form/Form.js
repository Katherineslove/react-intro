import React, {Component} from 'react';
import './Form.css';
import Button from '../Button/Button';

class Form extends Component {

    changeInput = (e) => {
        // console.log(e.target.value);
        this.props.changeInputValue(e.target.value);
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form className="searchForm" onSubmit={this.submitForm}>
                <input onChange={this.changeInput} value={this.props.item.value} className="searchBar"/>
                <Button btnText="Add New Item"/>
            </form>
        )
    }
}

export default Form;
