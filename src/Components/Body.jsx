import React from "react";
import ImportentProduces from "./Tabels/ImportentProduces";
import RegularProduces from "./Tabels/RegularProduces";
import OtherTables from "./Tabels/OtherTables";

function Body() {
  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produce Table ------------------ */}
      <div className="table-component">
        <ImportentProduces />
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
