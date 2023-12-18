import { FC } from 'react';
import MUIAppBar from '@mui/material/AppBar';
import type { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import TextField from '../TextField';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import { ToolbarWrapper, SearchBarWrapper, StyledLogo } from './styles';

interface AppBarProps extends MUIAppBarProps {}

const AppBar: FC<AppBarProps> = () => {
  return (
    <>
      <MUIAppBar>
        <ToolbarWrapper>
          <IconButton>
            <MenuIcon fontSize="large" />
          </IconButton>
          <StyledLogo>
            <Typography variant="h6">WallMart 000</Typography>
          </StyledLogo>
          <SearchBarWrapper>
            <TextField
              variant="outlined"
              placeholder="Pesquisar..."
              size="small"
              InputProps={{
                startAdornment: (
                  <div style={{ marginRight: ' 8px' }}>
                    <SearchIcon />
                  </div>
                ),
              }}
            />
          </SearchBarWrapper>
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
          <IconButton>
            <ShoppingCart fontSize="large" />
          </IconButton>
        </ToolbarWrapper>
      </MUIAppBar>
    </>
  );
};

export default AppBar;
