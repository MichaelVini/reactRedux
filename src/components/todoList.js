import React, { Component } from 'react';

//Para disparar ação
import { bindActionCreators } from 'redux';

//importar ações:
import * as todoActions from './../Redux/actions/todos';

import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
       
        super(props);
        this.state = {};
        console.log(props)
    }

    state = {
        newTodoText: '',
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' });
    };

    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.newTodoText}
                onChange={(e) => this.setState({ newTodoText: e.target.value })}
                />
                <button onClick={this.addNewTodo}>Novo Todo</button>
                <ul>
                    { this.props.todos.map( todo => (
                       <li key={todo.id}>{todo.text}</li> 
                    ))}
                </ul>
            </div>
        );
    }
}

//Atualizar a lista conforme adicionarmos novos todos.
const mapStateToProps = state => ({
    //Variaveis que precisam ser ouvidas do nosso state.
    todos: state.todos,
});


//transformar açoes em propriedades
const mapDispatchToProps = dispatch => (
    bindActionCreators(todoActions, dispatch)
    );



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);