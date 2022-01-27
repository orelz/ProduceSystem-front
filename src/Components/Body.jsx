import React from "react";
import RegularProduces from "./Tabels/RegularProduces";
import OtherTables from "./Tabels/OtherTables";
import Test from "./Tabels/Test";
import ImportentProduces from "./Tabels/ImportentProduces";

function Body() {

  const tableData = [
    {
      produceDate: "21.12.21",
      produceName: "נוהל 1",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
    },
    {
      produceDate: "01.12.21",
      produceName: "2",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
    },
    {
      produceDate: "02.11.21",
      produceName: "נוהל 3",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
    },
    {
      produceDate: "30.12.21",
      produceName: "נוהל 4",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
    },
  ];

  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produce Table ------------------ */}
      <div className="table-component">
        {/* <Test /> */}
        <ImportentProduces tableData={tableData} />
      </div>
      <div className="table-component">
        <RegularProduces />
      </div>
      <div className="table-component">
        <OtherTables />
      </div>
      {/* ------------- /Produce Table ------------------ */}
    </div>
  );
}

export default Body;
