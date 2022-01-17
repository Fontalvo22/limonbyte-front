import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { UsersFetch } from "./UserManager"; 
import {useState} from 'react';

const TableComponent = () => {


  const [rows, setRows]=useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ]);

  fetch("http://localhost:8000/api/users/")
    .then(response=>{
      console.log(response.json())
    })
    .catch(error=>{
      console.log(error.data);
    })

  // console.log(UsersFetch(setRows));

  const columns = [
      {field: 'id', headerName: 'Cédula', width: 130, editable: true},
      { field: 'firstName', headerName: 'Nombre', width: 130, editable: true},
      { field: 'lastName', headerName: 'Apellido', width: 130, editable: true}, 
  ]
    
    
    const columnHeigth=rows.length*110;

    return ( 
    <Container style={{ height: columnHeigth, width: 520, marginTop:40 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onCellEditStop={(params, event) => {
            
            console.log(params.getValue(params.id, 'firstName'))
            
          }}
      />
    </Container>    
     )
}

export default TableComponent;