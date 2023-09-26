import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import PaidIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <SpaceDashboardIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Wallets',
    path: '/wallets',
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalanceWalletIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Budget',
    path: '/budget',
    icon: (
      <SvgIcon fontSize="small">
        <PaidIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Goals',
    path: '/goals',
    icon: (
      <SvgIcon fontSize="small">
        <FlagCircleIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: (
      <SvgIcon fontSize="small">
        <BarChartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsIcon />
      </SvgIcon>
    )
  }
];