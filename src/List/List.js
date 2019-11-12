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

    handleChangeInputValue = (text) => {
        let {currentItem} = this.state;
        currentItem.value = text;
        this.setState({
            currentItem: currentItem
        })
    }

    handleSubmit = () => {
        let {allItems, currentItem} = this.state;

        const newItem = {
            id: allItems.length + 1,
            text: currentItem.value
        }

        allItems.push(newItem);

        this.setState({
            currentItem: {
                id: null,
                value: ''
            },
            allItems: allItems
        })
    }

    handleDelete = (idOfItem) => {
        // console.log('need to delete');
        // console.log(idOfItem);
        const { allItems } = this.state;
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].id === idOfItem) {
                allItems.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].id = i + 1
        }
        // console.log(allItems);

        this.setState({
            allItems: allItems
        })
    }

    render(){
        console.log(this.state.allItems);
        return(
            <div className="listContainer">
            <h1>• Shopping List •</h1>
            <Form
            item = {this.state.currentItem}
            changeInputValue = {this.handleChangeInputValue}
            submit = {this.handleSubmit}
            />
            <div className="list">
            {
                this.state.allItems.map(singleItem => {
                    return <Item
                    key = {singleItem.id}
                    itemInfo= {singleItem}
                    deleteItem = {this.handleDelete}
                    />
                })
            }
            </div>
            </div>
        )
    }
}

export default List;
