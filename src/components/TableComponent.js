import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { UsersFetch } from "./UserManager"; 
import {useState} from 'react';

const TableComponent = () => {

  const [rows, setRows]=useState(undefined);

    console.log(UsersFetch(setRows));

    const columns = [
        {field: 'id', headerName: 'Cédula', width: 130, editable: true},
        { field: 'firstName', headerName: 'Nombre', width: 130, editable: true},
        { field: 'lastName', headerName: 'Apellido', width: 130, editable: true},
       
    ]
      
    
    
    //  const rows = [
    //      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //  ];
    
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