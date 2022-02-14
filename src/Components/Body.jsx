import React from "react";
import RegularProduces from "./Tabels/RegularProduces";
import OtherTables from "./Tabels/OtherTables";
import Test from "./Tabels/Test";
import ImportentProduces from "./Tabels/ImportentProduces";

function Body(props) {



  return (
    <div className="div-body" dir="rtl">
      {/* ------------- Produce Table ------------------ */}
      <div className="table-component">
        {/* <Test /> */}
        <ImportentProduces isLogin = {props.isLogin}/>
      </div>
      <div className="table-component">
        <RegularProduces  />
      </div>
      <div className="table-component">
        <OtherTables isLogin = {props.isLogin} />
      </div>
      {/* ------------- /Produce Table ------------------ */}
    </div>
  );
}

export default Body;
