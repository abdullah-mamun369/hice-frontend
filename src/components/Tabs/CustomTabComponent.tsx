"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Tabs, Tab, Card, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: { imageUrl: string; serial: string; title: string }[];
  value: number;
  index: number;
}

interface TabConfig {
  label: string;
  content: { imageUrl: string; serial: string; title: string }[];
}

interface CustomTabsProps {
  tabs: TabConfig[];
  sx?: object;
  initialValue?: number;
}

const CustomTab = styled(Tab)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "5px",
  textTransform: "none",
  minWidth: "100px",
  marginRight: "10px",
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-selected": {
    backgroundColor: "#00AEEF",
    color: "white",
    border: `1px solid #00AEEF`,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  height: "100%",
}));

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Grid container spacing={3}>
            {children?.map((item, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <StyledCard>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Box>
                  <Typography variant="subtitle2" color="text.secondary" mt={2}>
                    {item.serial}
                  </Typography>
                  <Typography variant="h6" textAlign="center" mt={1}>
                    {item.title}
                  </Typography>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
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
