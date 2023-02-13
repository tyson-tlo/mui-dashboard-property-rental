import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useNavigationRoutes from "../hooks/useNavigationRoutes";
import SettingsIcon from "@mui/icons-material/Settings";

function TopNavigation() {
  const navigateTo = useNavigationRoutes();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={navigateTo.dashboard}>
            Home
          </Button>
        </div>
        <Button color="inherit" onClick={navigateTo.settings}>
          <SettingsIcon /> Settings
        </Button>
        <Button color="inherit" onClick={navigateTo.login}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavigation;
