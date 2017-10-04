import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        
    }
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Form' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}