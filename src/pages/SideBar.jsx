import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TopBody from "./LayoutsPages/TopBody";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "../style/Sidebar.scss"


const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); 

  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
  const handleNavigate = (path) => {
    navigate(path); 
    setMobileOpen(false); 
  };

  const drawer = (
    <div>
      
      <h1 sx={{ display: { xs: "none", sm: "flex" }}}>LOGO</h1>
      <Toolbar />
      
      <Divider />
      <List>
        {[
          { text: "Intellectual Property", path: "/" },
          { text: "Captable Tie-Out", path: "/starred" },
          { text: "Contractual Obligation", path: "/send-email" },
          { text: "Others", path: "/drafts" },
          { text: "Business", path: "/business" },
          { text: "Tax", path: "/tax" },
          { text: "Organization Structure Governance", path: "/osg" },
        ].map((item, index) => {
          const isActive = location.pathname === item.path; 
          return (
            <ListItem key={item.text} disablePadding>
              
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
                sx={{
                  backgroundColor: isActive ? "white" : "transparent",
                  color: isActive ? "black" : "white", 
                  "&:hover": {
                    backgroundColor: isActive ? "white" : "#1a1a1a",
                  },
                }}
              >
                {/* <ListItemIcon sx={{ color: isActive ? "black" : "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={item.text}  />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div >
  );

const container =
  window !== undefined ? () => window().document.body : undefined;

return (
  <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
        }}
      >
        <div style={{ display: "flex" }}>

          <Typography variant="body2" component="a" target="_blank" rel="noopener noreferrer" sx={{ display: { xs: "none", sm: "flex" }, ml: 1, textDecoration: "none", mr: 2, }} style={{ alignItems: "center", color: "black" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ height: "max-content", border: "1px solid #d3d3d3", padding: "3px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px", width: "max-content", cursor: "pointer", backgroundColor: "#d3d3d3" }}>  <KeyboardArrowLeftIcon /> </div>
              <div className="pitcherfiles">
                <p>Pitchdeck Files</p>
                <p>Pitchdeck Files</p>
              </div>
            </div>
          </Typography>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Toolbar>

        </div>

      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#071226", 
              color: "#fff",
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#071226", 
              color: "#fff", 
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route
            path="/"
            element={
              <h2>
                <TopBody />
              </h2>
            }
          />
          <Route path="/starred" element={<h2>Captable Tie-Out Page</h2>} />
          <Route path="/send-email" element={<h2>Contractual Obligation Page</h2>} />
          <Route path="/drafts" element={<h2>Others Page</h2>} />
          <Route path="/business" element={<h2>Business Page</h2>} />
          <Route path="/tax" element={<h2>Tax Page</h2>} />
          <Route path="/osg" element={<h2>Organization Structure Governance</h2>} />
        </Routes>
      </Box>
    </Box>
  </>
);
};


export default function App() {
  return (
    <Router>
      <ResponsiveDrawer />
    </Router>
  );
}
