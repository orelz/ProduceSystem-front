import React, { useEffect, useRef, useState } from "react";
import RegularProduces from "./Tabels/RegularProduces";
import ImportantProduces from "./Tabels/ImportantProduces";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import ArchiveProduces from "./Tabels/OtherTables/ArchiveProduces";
import HideProduces from "./Tabels/OtherTables/HideProduces";

function Body(props) {

  //State for the material tabs of- hidden/archive produces tables.
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //___________

  // --------------- Set Data Tables ----------------
  // Pass the data (produces) from the App.js to a new variable for filtering to the tabels.
  let dataFromState = props.dataTables.slice();

  //---- Important produces ----
  const importantProducesTableData = dataFromState.filter(
    (data) => data.importantProduce === true && data.produceStatus === "active"
  );

  //---- Regular produces ----
  const regularProducesDataTable = dataFromState.filter(
    (data) => data.importantProduce === false && data.produceStatus === "active"
  );

  //---- Hide produces ----
  const hideProducesDataTable = dataFromState.filter(
    (data) => data.produceStatus === "hide" && data.importantProduce === false
  );
  //---- Archive produces ----
  const archiveProducesDataTable = dataFromState.filter(
    (data) =>
      data.produceStatus === "archive" && data.importantProduce === false
  );
//___________

  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produces Table ------------------ */}
      <div className="table-component">
        <ImportantProduces
          isLogin={props.isLogin}
          data={importantProducesTableData}
          updateTablesStateHandler ={props.updateTablesStateHandler}
        />
      </div>
      <div className="table-component">
        <RegularProduces
          isLogin={props.isLogin}
          data={regularProducesDataTable}
          updateTablesStateHandler ={props.updateTablesStateHandler}
        />
      </div>

      {/* ------Other Tables ------ */}
      <div className="table-component">
        <Box
          sx={{ width: "100%", typography: "body1" }}
          style={{ marginBottom: "50px" }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="ארכיון נהלים" value="1" />
                <Tab label="נהלים מוסתרים- בייצור" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ArchiveProduces
                isLogin={props.isLogin}
                data={archiveProducesDataTable}
                updateTablesStateHandler ={props.updateTablesStateHandler}
              />
            </TabPanel>
            <TabPanel value="2">
              {props.isLogin && (
                <HideProduces
                  isLogin={props.isLogin}
                  data={hideProducesDataTable}
                  updateTablesStateHandler ={props.updateTablesStateHandler}
                />
              )}
              {!props.isLogin && (
                <p>נהלים בייצור- יש להתחבר למערכת הנהלים על מנת לצפות בנהלים מוסתרים</p>
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      {/* ------Other Tables ------ */}
      {/* ------------- /Produce Table ------------------ */}
    </div>
  );
}

export default Body;
