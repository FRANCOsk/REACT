import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';

function uniqueValues(rows, key) {
  return [...new Set(rows.filter((row) => row.id !== 'SPOL').map((row) => row[key]))].sort();
}

export default function Filter({ value, onChange, rows }) {
  const update = (field) => (event) => {
    onChange({ ...value, [field]: event.target.value });
  };

  const reset = () => {
    onChange({
      dateFrom: '2026-01-01',
      dateTo: '2026-12-31',
      region: 'all',
      branch: 'all',
      status: 'all'
    });
  };

  return (
    <Paper className="filter-panel" variant="outlined">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={2} mb={2}>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            Filter reportu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Zúžte výsledky podľa obdobia, regiónu, pobočky alebo stavu plnenia.
          </Typography>
        </Box>
        <Button startIcon={<RestartAltRoundedIcon />} onClick={reset}>
          Obnoviť filtre
        </Button>
      </Stack>

      <Box className="filter-grid">
        <TextField
          label="Od"
          type="date"
          value={value.dateFrom}
          onChange={update('dateFrom')}
          slotProps={{ inputLabel: { shrink: true } }}
          fullWidth
        />
        <TextField
          label="Do"
          type="date"
          value={value.dateTo}
          onChange={update('dateTo')}
          slotProps={{ inputLabel: { shrink: true } }}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="region-label">Región</InputLabel>
          <Select labelId="region-label" value={value.region} label="Región" onChange={update('region')}>
            <MenuItem value="all">Všetky regióny</MenuItem>
            {uniqueValues(rows, 'region').map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="branch-label">Pobočka</InputLabel>
          <Select labelId="branch-label" value={value.branch} label="Pobočka" onChange={update('branch')}>
            <MenuItem value="all">Všetky pobočky</MenuItem>
            {uniqueValues(rows, 'branch').map((branch) => (
              <MenuItem key={branch} value={branch}>
                {branch}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="status-label">Plnenie</InputLabel>
          <Select labelId="status-label" value={value.status} label="Plnenie" onChange={update('status')}>
            <MenuItem value="all">Všetky stavy</MenuItem>
            <MenuItem value="Nad plánom">Nad plánom</MenuItem>
            <MenuItem value="Pod plánom">Pod plánom</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}
