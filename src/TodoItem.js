function TodoItem(props) {
    return (
      <li>
        <span 
          className={`Icon-Check ${props.completed && "Icon-Check--active"}`}
          onClick={props.onComplete}
        >
          <img className="iconCheck" src="https://static.vecteezy.com/system/resources/previews/009/591/696/non_2x/check-mark-icon-free-png.png" alt="iconCheck" />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span
          onClick={props.onDelete}
        >
          <img 
            className={`iconRemove ${props.completed && "Icon-Check--active"}`}
            src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Circle-512.png" 
            alt="iconRemove" 
          />
        </span>
      </li>
    );
  }

  export { TodoItem };