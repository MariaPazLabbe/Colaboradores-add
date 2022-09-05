import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props) => {
  const [search, setSearch] = React.useState("");
  const [print, setPrint] = React.useState([]);

  const searchTask = (e) => {
    e.preventDefault();
    const filterTask = props.tasks.filter((task) => task.nombre === search);
    setPrint(filterTask);
    console.log(filterTask);
    console.log(search);
  };

  return (
    <Container className="search-container">
      <form className="form" role="search" onSubmit={searchTask}>
        <div className="row">
          <h4 className="text1">Buscador de Colaborador</h4>
          </div>
        <div className="row">
            <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="row">
            <Button className="btn my-4" type="submit" variant="outline-light">
            Buscar
          </Button>
          </div>
            </form>
        {
        print
            ? print.map((item) => (
            <li className="list-group-item" key={item.nombre}>
              <h3>Resultado</h3>
              <span className="lead"> <strong>Nombre:</strong> { item.nombre} <strong>Correo:</strong> { item.email}</span>
            </li>
          ))
        : null
        }
    </Container>
  );
};

export default Search;