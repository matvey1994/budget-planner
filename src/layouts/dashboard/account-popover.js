import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';

export const AccountPopover = ({ anchorEl, onClose, open }) => {
  const { logout, isPending } = useLogout();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {/* dynamically add username via authcontext */}
          John Smith
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        {/* FIX signout handle function */}
        <MenuItem onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};