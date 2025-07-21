"use client";

import { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { ArrowRight, ArrowLeft } from "lucide-react";

const SwipeableDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 256,
            backgroundColor: "#1f2937",
            color: "#ffffff",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h2">
            Drawer
          </Typography>
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: "#ffffff", "&:hover": { backgroundColor: "#374151" } }}
          >
            <ArrowLeft size={24} />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {["Home", "About", "Services", "Contact"].map((text) => (
            <ListItem
              key={text}
              component="a"
              href="#"
              sx={{
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#374151" },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Toggle Button (Visible when drawer is closed) */}
      {!isOpen && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            top: "16px",
            left: "16px",
            zIndex: 1200,
            backgroundColor: "#1f2937",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#374151" },
          }}
        >
          <ArrowRight size={24} />
        </IconButton>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: isOpen ? "256px" : "0px",
          p: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Main Content
        </Typography>
        <Typography>Your page content goes here.</Typography>
      </Box>
    </Box>
  );
};

export default SwipeableDrawer;
