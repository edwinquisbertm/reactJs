
function TodoList(props) {
  return (
    <ul>
      {props.children}{/* se estan pasando los elementos hijos de TodoList en base a la estructura jsx*/}
    </ul>
  )
}

export { TodoList };