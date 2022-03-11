import React, { useEffect, useRef, useState } from "react";
import RegularProduces from "./Tabels/RegularProduces";
import ImportantProduces from "./Tabels/ImportantProduces";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import ArchiveProduces from "./Tabels/OtherTables/ArchiveProduces";
import HideProduces from "./Tabels/OtherTables/HideProduces";

function Body(props) {
  //State of the producesAPI - All the produces
  const [data, setData] = useState([]);
  //State of the tabs of the hide produces and archive produces.
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // UseEffect - ProducesAPI -Get data base to the tables
  useEffect(() => {
    fetch("http://localhost:3000/allProduces")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  // --------------- Set Data Tables ----------------
  // Pass the produces to a variable for changes.
  let dataFromState = data.slice();

  //---- Important produces ----
  const importantProducesTableData = dataFromState.filter(
    (data) => data.importantProduce === true
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
    // --------------- -------------- ----------------

  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produces Table ------------------ */}
      <div className="table-component">
        <ImportantProduces
          isLogin={props.isLogin}
          data={importantProducesTableData}
          onArchiveProduce ={sendProduceToArchiveTableHandler}
        />
      </div>
      <div className="table-component">
        <RegularProduces
          isLogin={props.isLogin}
          data={regularProducesDataTable}
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
                <Tab label="נהלים מוסתרים" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ArchiveProduces
                isLogin={props.isLogin}
                data={archiveProducesDataTable}
              />
            </TabPanel>
            <TabPanel value="2">
              {props.isLogin && (
                <HideProduces
                  isLogin={props.isLogin}
                  data={hideProducesDataTable}
                />
              )}
              {!props.isLogin && (
                <p>יש להתחבר למערכת הנהלים על מנת לצפות בנהלים מוסתרים</p>
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
