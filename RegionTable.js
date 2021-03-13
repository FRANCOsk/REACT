import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DataGrid } from '@material-ui/data-grid';

// tu je potrebne doplnit stlpce regionalnej tabulky
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'MENO', width: 250 },
    { field: 'totalApp', headerName: 'TOTAL APP', width: 180 },
];

export default function RegionTable( props ) {
    const { onClose, open, regionData } = props;

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} className='RegionTable' open={open} style={{ width: 700 }}>
            <DialogTitle id="regionTable">Region Table</DialogTitle>
            <div style={{ height: 400, width: 600 }}>
                <DataGrid
                    rows={regionData}
                    columns={columns}
                    pageSize={5}
                />
            </div>
        </Dialog>
    );
}

RegionTable.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    regionData: PropTypes.array.isRequired,
};
