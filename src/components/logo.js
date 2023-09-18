import { useTheme } from '@mui/material/styles';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Box } from "@mui/system";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Box position="relative" width={24} height={24}>
      <CalculateIcon
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: 45,
          color: fillColor,
          opacity: 0.16,
        }}
      />
      <CalculateIcon
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: 35,
          color: fillColor,
        }}
      />
    </Box>
  );
};