import { Box, Container, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';


export default function Goals() {
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
              Goals
            </Typography>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  )
}