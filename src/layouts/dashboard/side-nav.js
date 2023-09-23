import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Logo } from '../../components/logo';
import { Scrollbar } from '../../components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { useLogout } from '../../hooks/useLogout';


export const SideNav = ({ open, onClose }) => {
  const pathname = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const { logout } = useLogout();
  console.log(pathname)

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neautral.400'
        }
      }}
      >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* add functionality to box - quick actions / overview */}
        <Box sx={{ p: 3 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 4,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                BudgetMate
              </Typography>
              <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography>
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              console.log("Current Pathname:", pathname.pathname); // Note that useLocation returns an object with pathname property
              console.log("Item Path:", item.path);

              const active = item.path ? (pathname.pathname === item.path) : false;

              console.log("Is Active:", active);
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
          <Box
            sx={{
              px: 5,
              py: 3,
              display: 'flex',
              justifyContent: 'center',
              mx: 'auto',
              width: '200px',
            }}
          >
            <Button 
              startIcon={<LogoutIcon/>}
              onClick={logout}
              sx={{
                color: '#f00f23',
                '&:hover': {
                  color: '#0FF0DC',
                },
                fontSize: '1rem'
              }}  
            >
              Logout
            </Button>
          </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};