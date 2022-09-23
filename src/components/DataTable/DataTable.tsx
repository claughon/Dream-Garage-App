import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle 
} from '@mui/material';
import { CarForm } from '../../components/CarForm';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name', 
        width: 150,
        editable: true,
    },
    {
        field: 'engine',
        headerName: 'Engine',
        width: 150,
        editable: true,
    },
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150,
        editable: true,
    },
    {
        field: 'trim',
        headerName: 'Trim Package',
        width: 150,
        editable: true,
    },
    {
        field: 'miles',
        headerName: 'Mileage',
        width: 150,
        editable: true,
    },
    {
        field: 'max_speed',
        headerName: 'Max Speed',
        width: 150,
        editable: true,
    },
    {
        field: 'cost',
        headerName: 'Cost',
        width: 150,
        editable: true,
    },
    {
        field: 'number_of_owners',
        headerName: 'Number of Owners',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, name: 'Speedy', engine: '6.2L LT2 V8', make: 'Chevy', model: 'Corvette', trim: 'Stingray', miles: '8,038', max_speed: 220, cost: 124990.00, number_of_owners: '1'},
    { id: 2, name: 'Classic', engine: 'V8 TurboFire', make: 'Chevy', model: 'Bel-Air', trim: '210 Series', miles: '92,567', max_speed: 128, cost: 2611.35, number_of_owners: '2'},
    { id: 3, name: 'Theodosia', engine: '2.5L Hybrid', make: 'Toyota', model: 'RAV4', trim: 'XSE', miles: '4,225', max_speed: 120, cost: 43525.99, number_of_owners: '1'},
    { id: 4, name: 'Tonka', engine: '5.2L Supercharged V8', make: 'Ford', model: 'Raptor', trim: 'R', miles: '6,321', max_speed: 120,  cost: 70000.00, number_of_owners: '1'},
]

interface gridData{
    data:{
        id?:string;
    }
}

export const DataTable =  () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      serverCalls.delete(`${gridData[0]}`)
      getData()
    }
  
    console.log(gridData) // a list of id's from checked rows
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Vehicles In Inventory</h2>
            <DataGrid 
                          rows={carData} 
                          columns={columns} 
                          pageSize={10} 
                          rowsPerPageOptions = {[10]}
                          checkboxSelection 
                          onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel)}}
                          {...carData}  
                      />
  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Vehicle</DialogTitle>
            <DialogContent>
              <DialogContentText>Car id: {gridData[0]}</DialogContentText>
                <CarForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );
  }