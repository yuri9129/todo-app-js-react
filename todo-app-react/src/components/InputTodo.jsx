const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "16px"
}

export const InputTodo = (props) => {
  const {todoText, onChange, onClick, disabled} = props;

  return (
    <div style={style}>
      <input disabled={disabled} type="text" placeholder="TODOを入力" value={todoText} onChange={onChange}/>
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  )
}


