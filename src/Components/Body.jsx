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

  // UseEffect - ProducesAPI
  useEffect(() => {
    fetch("http://localhost:3000/allProduces")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  // Pass the produces to a variable for changes.
  let dataFromState = data.slice();


  //---- Important produces ----
  const importantProducesTableData = dataFromState.filter(
    (data) => data.importantProduce === true
  );
  console.log("filter array " + importantProducesTableData);
  
  //---- Regular produces ----
  const regularProducesDataTable = dataFromState.filter(
    (data) => data.importantProduce === false && data.produceStatus==="active"
    );
    console.log("filter array " + regularProducesDataTable);

  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produce Table ------------------ */}
      <div className="table-component">
        <ImportantProduces isLogin={props.isLogin} data={importantProducesTableData} />
        {/* <ImportentProduces isLogin = {props.isLogin}/> */}
      </div>
      <div className="table-component">
        <RegularProduces isLogin={props.isLogin} data={regularProducesDataTable} />
      </div>


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
              <ArchiveProduces />
            </TabPanel>
            <TabPanel value="2">
              {props.isLogin && <HideProduces />}
              {!props.isLogin && (
                <p>יש להתחבר למערכת הנהלים על מנת לצפות בנהלים מוסתרים</p>
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      {/* ------------- /Produce Table ------------------ */}
    </div>
  );
}

export default Body;
