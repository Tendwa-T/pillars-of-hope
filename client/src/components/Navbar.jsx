import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleItemClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isExtraSmallScreen) {
        setMobileOpen(false); // close the drawer on mobile
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ marginLeft: "3.5em", padding: "2em" }}>
        <img src="assets/logo.png" alt="Logo" style={{ height: "50px" }} />
      </Box>
      <Divider />
      <ListItemButton onClick={() => handleItemClick("home")}>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={() => handleItemClick("about")}>
        <ListItemText primary="About" />
      </ListItemButton>
      <ListItemButton onClick={() => handleItemClick("support")}>
        <ListItemText primary="Support" />
      </ListItemButton>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#004e40", height: "5em" }}>
        <Toolbar
          sx={{
            marginRight: {
              sm: "5em",
              xs: "auto",
            },
          }}
        >
          {!isSmallScreen && (
            <Box sx={{ padding: "1em" }}>
              <img
                src="assets/logo.png"
                alt="Logo"
                style={{ height: "50px" }}
              />
            </Box>
          )}
          <Box sx={{ flexGrow: 1, order: { xs: 2, sm: 1 } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#fff", marginLeft: { xs: "1.5em", sm: "0" } }}
            >
              Pillars of Hope Children Home
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, order: { xs: 1 } }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              order: { sm: 2 },
            }}
          >
            <Button
              sx={{ color: "#fff" }}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Button>
            <Button
              sx={{ color: "#fff", marginLeft: "1em" }}
              onClick={() => handleItemClick("about")}
            >
              About
            </Button>
            <Button
              sx={{ color: "#fff", marginLeft: "1em" }}
              onClick={() => handleItemClick("support")}
            >
              Support
            </Button>
          </Box>
        </Toolbar>
        <Divider sx={{ backgroundColor: "#bbd1cc", marginTop: "auto" }} />
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "15em" },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
