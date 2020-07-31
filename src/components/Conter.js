import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h2>Você tem {props.todos.length} todos</h2>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect( mapStateToProps)(Counter);