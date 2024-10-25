function TodoSearch({ searchValue, setSearchValue }) {
    return (
      <div className="inputSearch">
        <input 
          placeholder="Buscar tarea"
          value={searchValue}
          onChange={
            (event) => {
              setSearchValue(event.target.value);
            }
          }
        />
        <img className="iconSearch" src="https://icons.veryicon.com/png/o/education-technology/education-app/search-137.png" alt="Icon Search"/>
      </div>
      
    );
  }

export { TodoSearch };