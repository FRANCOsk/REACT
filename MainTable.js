import { useMemo, useState } from 'react';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import RegionTable from './RegionTable';

const numberFormatter = new Intl.NumberFormat('sk-SK');

export default function MainTable({ rows }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'Kód', width: 90 },
      { field: 'name', headerName: 'Organizačná jednotka', minWidth: 230, flex: 1.4 },
      { field: 'role', headerName: 'Typ tímu', minWidth: 150, flex: 0.8 },
      { field: 'region', headerName: 'Región', minWidth: 130, flex: 0.7 },
      { field: 'branch', headerName: 'Pobočka', minWidth: 180, flex: 1 },
      {
        field: 'applications',
        headerName: 'Produkcia',
        type: 'number',
        minWidth: 140,
        flex: 0.75,
        valueFormatter: (value) => numberFormatter.format(value)
      },
      {
        field: 'target',
        headerName: 'Cieľ',
        type: 'number',
        minWidth: 130,
        flex: 0.7,
        valueFormatter: (value) => numberFormatter.format(value)
      },
      {
        field: 'status',
        headerName: 'Stav',
        minWidth: 140,
        flex: 0.7,
        renderCell: ({ value }) => (
          <Chip
            label={value}
            size="small"
            color={value === 'Nad plánom' ? 'success' : 'warning'}
            variant="outlined"
          />
        )
      }
    ],
    []
  );

  return (
    <Paper className="table-panel" variant="outlined">
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={2} mb={2}>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            Výsledky podľa organizačnej jednotky
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kliknutím na riadok otvoríte detailnú skladbu produkcie.
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" gap={1} color="text.secondary">
          <OpenInNewRoundedIcon fontSize="small" />
          <Typography variant="body2">{rows.length} záznamov</Typography>
        </Stack>
      </Stack>

      <Box className="data-grid-wrapper">
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={({ row }) => setSelectedRow(row)}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 }
            }
          }}
          disableRowSelectionOnClick
          sx={{
            border: 0,
            '& .MuiDataGrid-row': { cursor: 'pointer' },
            '& .MuiDataGrid-columnHeaders': { borderRadius: 2 }
          }}
        />
      </Box>

      <RegionTable selectedRow={selectedRow} onClose={() => setSelectedRow(null)} />
    </Paper>
  );
}
