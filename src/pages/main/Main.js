import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { Box, Container, Unstable_Grid2 as Grid, Skeleton } from '@mui/material';
import { OverviewBalance } from '../../sections/overview/OverviewBalance';
import { OverviewExpenses } from '../../sections/overview/OverviewExpenses';
import { OverviewBudget } from '../../sections/overview/OverviewBudgets';
import { OverviewRecentTrans } from '../../sections/overview/OverviewRecentTrans';
import Categories from '../../components/categoryIcons'
import Wallet from '../../components/walletIcons'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function Main() {
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
              sx={{
                flexGrow: 1,
                flexBasis: { xs: 'auto', sm: 'auto', lg: '33.3%' },
              }}
            >
              <OverviewBalance
                difference={12}
                positive
                sx={{ 
                  height: '100%'
                }}
                value="$54,593.75"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
              sx={{
                flexGrow: 1,
                flexBasis: { xs: 'auto', sm: 'auto', lg: '33.3%' },
              }}
            >
              <OverviewBalance
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$54,593.75"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
              sx={{
                flexGrow: 1,
                flexBasis: { xs: 'auto', sm: 'auto', lg: '33.3%' },
              }}
            >
              <OverviewBalance
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$54,593.75"
              />
            </Grid>
            {/* <Grid
              xs={12}
              sm={6}
              lg={3}
              sx={{
                flexGrow: 1,
                flexBasis: { xs: 'auto', sm: 'auto', lg: '24%' },
              }}
            >
              <OverviewBalance
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$54,593.75"
              />
            </Grid> */}
            <Grid
              xs={12}
              lg={8}
            >
              <OverviewExpenses
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewBudget
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={12}
            >
              <OverviewRecentTrans
                transactions={[
                  {
                    id: 'f69f88012978187a6c12897f',
                    cat: <Categories category="Education" />,
                    amount: '$30.50',
                    description: 'Books',
                    details: null,
                    createdAt: 1687316400000,
                    wallet: <Wallet category="Debit Card" />
                  },
                  {
                    id: '9eaa1c7dd4433f413c308ce2',
                    cat: <Categories category="Salary" />,
                    amount: '$2850.10',
                    description: 'Job',
                    details: <LocalOfferIcon fontSize='small' style={{verticalAlign: 'middle', color: '#808080'}}/>,
                    createdAt: 1685716400000,
                    wallet: <Wallet category="Debit Card" />
                  },
                  {
                    id: '01a5230c811bd04996ce7c13',
                    cat: <Categories category="Pets" />,
                    amount: '$10.99',
                    description: 'Pet Barn',
                    details: null,
                    createdAt: 1685416400000,
                    wallet: <Wallet category="Credit Card" />
                  },
                  {
                    id: '1f4e1bd0a87cea23cdb83d18',
                    cat: <Categories category="Other" />,
                    amount: '$96.43',
                    description: 'Project',
                    details: <LocalOfferIcon fontSize='small' style={{verticalAlign: 'middle', color: '#808080'}}/>,
                    createdAt: 1685216400000,
                    wallet: <Wallet category="Debit Card" />
                  },
                  {
                    id: '9f974f239d29ede969367103',
                    cat: <Categories category="Groceries" />,
                    amount: '$32.54',
                    description: 'Coles',
                    details: null,
                    createdAt: 1685116400000,
                    wallet: <Wallet category="Credit Card" />
                  },
                  {
                    id: 'ffc83c1560ec2f66a1c05596',
                    cat: <Categories category="Entertrainment" />,
                    amount: '$16.76',
                    description: 'Zoo',
                    details: <LocalOfferIcon fontSize='small' style={{verticalAlign: 'middle', color: '#808080'}}/>,
                    createdAt: 1687016400000,
                    wallet: <Wallet category="Credit Card" />
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
)};
