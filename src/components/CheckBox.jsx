function Checkbox(props) {
  return (
    <div>
      <input class="mx-2" type="checkbox" id={props.id} />
      <label for={props.id}>{props.label}</label>
    </div>
  );
}

export default Checkbox;
