import React, {Component} from 'react';
import './List.css';
import Form from '../Form/Form';
import Item from '../Item/Item';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            allItems : [
                {
                    id: 1,
                    text: 'Apples'
                },
                {
                    id: 2,
                    text: 'Peaches'
                },
                {
                    id: 3,
                    text: 'Beers'
                },
                {
                    id: 4,
                    text: 'Sausages'
                }
            ],
            currentItem: {
                id: null,
                value: ''
            }
        }
    }

    render(){
        console.log(this.state.allItems);
        return(
            <div className="listContainer">
            <h1>• Shopping List •</h1>
            <Form
                item={this.state.currentItem}
            />
            <div className="list">
            {
                this.state.allItems.map(singleItem => {
                    return <Item
                    key = {singleItem.id}
                    itemInfo= {singleItem}
                    />
                })
            }
            </div>
            </div>
        )
    }
}

export default List;
