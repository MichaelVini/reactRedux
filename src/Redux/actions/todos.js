//Ação para adicionar todo
// text: Texto do todo que será adicionado

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text: text,
    }
}