import { Box, Container, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';


export default function Settings() {
  return (
    <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Settings
          </Typography>
        </Stack>
      </Container>
    </Box>
  </DashboardLayout>
  )
}