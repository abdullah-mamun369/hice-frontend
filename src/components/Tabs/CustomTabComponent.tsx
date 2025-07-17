"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

interface TabConfig {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabConfig[];
  sx?: object;
  initialValue?: number;
}

const CustomTab = styled(Tab)(() => ({
  backgroundColor: "#2196F3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976D2",
  },
  "&.Mui-selected": {
    backgroundColor: "#1565C0",
  },
  borderRadius: "5px",
  textTransform: "none",
  minWidth: "100px",
  marginRight: "10px",
}));

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const CustomTabComponent: React.FC<CustomTabsProps> = ({
  tabs,
  sx,
  initialValue = 0,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom button tabs"
          sx={{ "& .MuiTabs-indicator": { display: "none" } }}
        >
          {tabs.map((tab, index) => (
            <CustomTab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabComponent;
