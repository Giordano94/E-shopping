import { FC } from 'react';
import MUIAppBar from '@mui/material/AppBar';
import type { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Toolbar } from '@mui/material';

interface AppBarProps extends MUIAppBarProps {}

const AppBar: FC<AppBarProps> = () => {
  return (
    <Box>
      <MUIAppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

export default AppBar;
