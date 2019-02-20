import React, { Component } from 'react';
import { get } from '../../Services/DB/Firebase'

export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            text: 'initial'
        }
        get().then(result => this.updateEdit(result))
    }
    updateEdit(text) {
        this.setState({text});
    }
    render() {
        console.log(this.state);
        return (<div>
            <div>{this.state.text}</div>
        </div>)
    }
}