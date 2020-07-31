import React from 'react';

//Provider: Componente responsável por renderizar algum componente quando houver mudança
//no state da aplicação
import { Provider } from 'react-redux';
import store from './Redux/store';
import TodoList from './components/todoList'
import Counter from './components/Conter';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <Counter />
      </div>
    </Provider>

  );
}

export default App;
