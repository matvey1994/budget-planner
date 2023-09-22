import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewRecentTrans = (props) => {
  const { transactions = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Recent Transactions" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="asc">
                  Date
                </TableCell>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Details
                </TableCell>
                <TableCell>
                  Wallet
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => {
                const createdAt = format(transaction.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={transaction.id}
                  >
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {transaction.cat}
                    </TableCell>
                    <TableCell>
                      {transaction.description}
                    </TableCell>
                    <TableCell>
                      {transaction.details}
                    </TableCell>
                    <TableCell>
                      {transaction.wallet}
                    </TableCell>
                    <TableCell sx={{ fontWeight:'bold' }}>
                      {transaction.amount}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewRecentTrans.prototype = {
  transactions: PropTypes.array,
  sx: PropTypes.object
};