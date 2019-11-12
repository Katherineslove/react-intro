import React, {Component} from 'react';
import './Item.css';
import Button from '../Button/Button'

class Item extends Component {
    handleDelete = () => {
        console.log('we are bout to delete this item' + this.props.itemInfo.id);
        this.props.deleteItem(this.props.itemInfo.id);
    }

    render(){
        return(
            <div className="listItem">
                <div className="itemText">
                    {this.props.itemInfo.text}
                </div>
                <div className="itemButtons">
                    <Button btnText="Edit" btnType="blueBtn" />
                    <Button btnText="Delete" btnType="redBtn" btnClicked={this.handleDelete} />
                </div>
            </div>
        )
    }
}

export default Item;
