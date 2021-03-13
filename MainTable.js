import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import RegionTable from './RegionTable';

// tu je potrebne doplnit stlpce hlavnej tabulky

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'MENO', width: 250 },
    { field: 'funkcia', headerName: 'FUNKCIA', width: 250 },
    { field: 'region', headerName: 'REGION', width: 250 },
    { field: 'pobocka', headerName: 'POBOCKA', width: 250 },
    { field: 'totalApp', headerName: 'TOTAL APP', width: 250 },
    { field: 'sucet', headerName: 'SUCET', width: 250},

];

// tu je potrebne doplnit stlpce regionalnej tabulky
function createRegionData( id, name, funkcia, region, pobocka, totalApp, sucet ) {

    

    return { id, name, funkcia, region, pobocka, totalApp, sucet };
}

// samotne data, nahradit potom selectom z DB (napr. cez redux), alebo inym mechanizmom
const mainData = [
    {
        id: 'SPOL',
        name: 'Celá Spoločnosť',
        regionData: [
            createRegionData( 'B', 'Region Bratislava', 55366 ),
            createRegionData( 'JV', 'Region Juhovychod', 641696 ),
            createRegionData( 'JZ', 'Region Juhozapad', 36546 ),
        ]
    },
];

export default function MainTable() {
    const [ open, setOpen ] = React.useState( false );
    const [ regionData, setRegionData ] = React.useState( [] );

    const handleClose = () => {
        setOpen( false );
    }

    const handleClick = (event) => {
        setRegionData( event.data.regionData );
        setOpen( true );
    }

    return (
        <div className='MainTable' style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={mainData}
                 
                columns={columns}
                pageSize={5}
                onRowClick={handleClick}
            />
            <RegionTable open={open} onClose={handleClose} regionData={regionData}/>
        </div>
    );
}