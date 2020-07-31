//Por padrão o nome do reduce é a variáve que ficará contida no state.

export default function todos(state = [], action) {
    // action contem { type: 'ADD_TODO', text: 'fazer café'}

    switch (action.type) {
        case 'ADD_TODO':
            //Adicionar novo todo.
            return [ ...state, { id: Math.random(), text: action.text}]
        default:
            return state;
    }
}

