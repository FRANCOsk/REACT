import { useMemo, useState } from 'react';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme
} from '@mui/material';
import Filter from './Filter.jsx';
import MainTable from './MainTable.jsx';
import { productionRows } from './data.js';
import './App.css';

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true
  },
  shape: {
    borderRadius: 14
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h3: {
      fontWeight: 750,
      letterSpacing: '-0.04em'
    }
  }
});

const initialFilters = {
  dateFrom: '2026-01-01',
  dateTo: '2026-12-31',
  region: 'all',
  branch: 'all',
  status: 'all'
};

function SummaryCard({ icon, label, value, caption }) {
  return (
    <Paper className="summary-card" variant="outlined">
      <Box className="summary-icon">{icon}</Box>
      <Box>
        <Typography variant="overline" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h5" fontWeight={750}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function App() {
  const [filters, setFilters] = useState(initialFilters);

  const filteredRows = useMemo(
    () =>
      productionRows.filter((row) => {
        const regionMatches = filters.region === 'all' || row.region === filters.region;
        const branchMatches = filters.branch === 'all' || row.branch === filters.branch;
        const statusMatches = filters.status === 'all' || row.status === filters.status;
        return regionMatches && branchMatches && statusMatches;
      }),
    [filters]
  );

  const summary = useMemo(() => {
    const regionalRows = filteredRows.filter((row) => row.id !== 'SPOL');
    const applications = regionalRows.reduce((total, row) => total + row.applications, 0);
    const target = regionalRows.reduce((total, row) => total + row.target, 0);
    const performance = target > 0 ? (applications / target) * 100 : 0;

    return {
      applications,
      teams: regionalRows.length,
      performance
    };
  }, [filteredRows]);

  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <Box className="app-shell">
        <Container maxWidth="xl">
          <Stack className="page-header" spacing={2}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={2}>
              <Box>
                <Chip label="Enterprise reporting demo" size="small" variant="outlined" />
                <Typography variant="h3" component="h1" mt={2}>
                  Prehľad produkcie
                </Typography>
                <Typography color="text.secondary" mt={1} maxWidth={720}>
                  Interaktívny dashboard pre sledovanie regionálneho výkonu, produkčných cieľov a detailov spracovania.
                </Typography>
              </Box>
              <Chip
                className="live-chip"
                label="Aktualizované dnes"
                color="success"
                variant="outlined"
              />
            </Stack>
          </Stack>

          <Box className="summary-grid">
            <SummaryCard
              icon={<AssessmentRoundedIcon />}
              label="Celková produkcia"
              value={summary.applications.toLocaleString('sk-SK')}
              caption="spracovaných žiadostí"
            />
            <SummaryCard
              icon={<GroupsRoundedIcon />}
              label="Aktívne tímy"
              value={summary.teams}
              caption="regionálne pracoviská"
            />
            <SummaryCard
              icon={<TrendingUpRoundedIcon />}
              label="Plnenie cieľa"
              value={`${summary.performance.toFixed(1)} %`}
              caption="v rámci zvoleného filtra"
            />
          </Box>

          <Filter value={filters} onChange={setFilters} rows={productionRows} />
          <MainTable rows={filteredRows} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
