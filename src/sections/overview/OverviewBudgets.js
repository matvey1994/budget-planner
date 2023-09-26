import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Skeleton,
} from '@mui/material';

export const OverviewBudget = () => {

  return (
    <Card>
      <CardHeader title="Monthly Budgets" />
      <CardContent>
        <Skeleton variant="rounded" width='100%' height={300}/>
        <Stack
          spacing={2}
          sx={{ mt: 2 }}
        >
            <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
        </Stack>
      </CardContent>
    </Card>
  );
};