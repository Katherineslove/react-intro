import React, {Component} from 'react';
import './Button.css';

class Form extends Component {

    clickButton = (e) => {
        // console.log('button has been clicked');
        if (this.props.btnClicked) {
            this.props.btnClicked();
        }
    }

    render(){
        return(
            <button className={this.props.btnType} onClick={this.clickButton}>
            {this.props.btnText}
            </button>
        )
    }
}

export default Form;
