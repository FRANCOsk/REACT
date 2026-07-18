import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const numberFormatter = new Intl.NumberFormat('sk-SK');

const columns = [
  { field: 'category', headerName: 'Kategória', minWidth: 240, flex: 1.4 },
  {
    field: 'volume',
    headerName: 'Počet',
    type: 'number',
    minWidth: 150,
    flex: 0.7,
    valueFormatter: (value) => numberFormatter.format(value)
  },
  {
    field: 'share',
    headerName: 'Podiel',
    type: 'number',
    minWidth: 130,
    flex: 0.6,
    valueFormatter: (value) => `${Number(value).toFixed(1)} %`
  }
];

export default function RegionTable({ selectedRow, onClose }) {
  return (
    <Dialog open={Boolean(selectedRow)} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
          <Box>
            <Typography variant="h6" fontWeight={750}>
              {selectedRow?.name ?? 'Detail produkcie'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedRow ? `${selectedRow.region} · ${selectedRow.branch}` : ''}
            </Typography>
          </Box>
          <IconButton aria-label="Zatvoriť detail" onClick={onClose} edge="end">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <Box height={360}>
          <DataGrid
            rows={selectedRow?.details ?? []}
            columns={columns}
            hideFooter
            disableRowSelectionOnClick
            sx={{ border: 0 }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
