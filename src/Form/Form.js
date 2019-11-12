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
        this.props.submit();
    }

    render(){

        let buttonLabel;
        if (this.props.item.id === null) {
            buttonLabel = 'Add Item';
        } else {
            buttonLabel = 'Edit Item';
        }

        return(
            <form className="searchForm" onSubmit={this.submitForm}>
                <input onChange={this.changeInput} value={this.props.item.value} className="searchBar"/>
                <Button btnText={buttonLabel}/>
            </form>
        )
    }
}

export default Form;
