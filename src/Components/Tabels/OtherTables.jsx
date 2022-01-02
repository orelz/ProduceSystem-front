import React, { useState } from "react";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { TabsContext } from "@mui/material";
import RegularProduces from "./RegularProduces";
import ArchiveProduces from "./OtherTables/ArchiveProduces";
import HideProduces from "./OtherTables/HideProduces";

function OtherTables() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="ארכיון נהלים" value="1" />
              <Tab label="נהלים מוסתרים" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ArchiveProduces />
          </TabPanel>
          <TabPanel value="2">
            <HideProduces />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default OtherTables;
