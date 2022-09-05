import { useState } from "react"
import { colaboradoresIniciales } from "../colaboradoresIniciales";
import { nanoid } from "nanoid";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Search from "./Search";
import Container from "react-bootstrap/Container";




const Colaboradores = () => {
    
    const [colaboradoresList, setColaboradoresList] = useState(colaboradoresIniciales)
    const [colaboradoresName, setColaboradoresName] = useState("")
    const [colaboradoresEmail, setColaboradoresEmail] = useState("")
     
    //Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        if (colaboradoresName==="" || colaboradoresEmail===""){
          alert("Debes llenar todos los campos")
        }
        else{
        setColaboradoresList([...colaboradoresList, {id: nanoid(), nombre: colaboradoresName, email: colaboradoresEmail}]) // Agregamos la tarea
        setColaboradoresName("") // Vaciamos el formulario
        setColaboradoresEmail("")
      };
    }
    //Función al escribir sobre el input del formulario
    const saveInputName = (e) => {
        setColaboradoresName(e.target.value)
    }
    const saveInputEmail = (e) => {
        setColaboradoresEmail(e.target.value)
    }
  
        
    return (
        <>
        <Container className="box">
            <Search tasks={colaboradoresList} setTask={setColaboradoresList} />
          
          <Form className="edit-add" onSubmit={enviarFormulario}>
           
            <h4 className="row"> Agregar colaboradores a la lista</h4>
            <div className="row">
              <div className="mt-4 my-2">
                <h6>Nombre:</h6>
                </div>
                <input name="colaboradoresName" 
                onChange={saveInputName} 
                value={colaboradoresName} />
            </div>
            <div className="row">
              <div className="mt-4 my-2">
                <h6>Email:</h6>
                </div>
                <input name="colaboradoresEmail" 
                onChange={saveInputEmail} 
                value={colaboradoresEmail} />
            </div>
            <div className="row mt-4 my-5">
            
                <Button variant="outline-light" type="submit">Agregar Colaborador</Button> </div>
              </Form>
        </Container>
       
    <Table striped bordered hover variant="dark" id="table-col">
      <thead>
      <h6>Lista de Colaborador</h6>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {colaboradoresList.map(Colaboradores => 
          <tr>
          <td key={Colaboradores.nombre}>{Colaboradores.nombre}</td>
          <td key={Colaboradores.email}>{Colaboradores.email}</td>
          </tr>)}
      </tbody>
    </Table>
    </>
  )
}

export default Colaboradores;