import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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
    { id: 1, name: 'Speedy', engine: '6.2L LT2 V8', make: 'Chevy', model: 'Corvette', trim: 'Stingray', miles: 8038, max_speed: 220, cost: '$124,990.00', number_of_owners: 1},
    { id: 2, name: 'Classic', engine: 'V8 TurboFire', make: 'Chevy', model: 'Bel-Air', trim: '210 Series', miles: 92567, max_speed: 128, cost: '$2,611.35', number_of_owners: 2},
    { id: 3, name: 'Theodosia', engine: '2.5L Hybrid', make: 'Toyota', model: 'RAV4', trim: 'XSE', miles: 4225, max_speed: 120, cost: '$43,525.99', number_of_owners: 1},
    { id: 4, name: 'Tonka', engine: '5.2L Supercharged V8', make: 'Ford', model: 'Raptor', trim: 'R', miles: 6321, max_speed: 120,  cost: '$70,000.00', number_of_owners: 1},
]

export const DataTable= () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2> Cars In Inventory </h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize= {5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                />
        </div>
    );
}