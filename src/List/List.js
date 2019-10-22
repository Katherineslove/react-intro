import React, {Component} from 'react';
import './List.css';
import Form from '../Form/Form';

class List extends Component {
    render(){
        return(
            <div className="listContainer">
                <h1>• Shopping List •</h1>
                <Form />
            </div>
        )
    }
}

export default List;
