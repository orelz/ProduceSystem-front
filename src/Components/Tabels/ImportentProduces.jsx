
import MaterialTable, { MTableToolbar } from "material-table";
import React from "react";
import TableOptions from "./TableOptions";

function ImportentProduces(props) {

  const columns = [
    {
      title: "תאריך הנוהל",
      field: "produceDate",
      align: "center",
      width: "15%",
      headerStyle: { width: "10%" },
      cellStyle: { width: "10%" },
    },
    {
      title: "שם הנוהל",
      field: "produceName",
      align: "center",
      width: "35%",
      headerStyle: { width: "30%" },
      cellStyle: { width: "30%" },
    },
    {
      title: "קטגוריה",
      field: "produceCategory",
      align: "center",
      width: "15%",
      headerStyle: { width: "15%" },
      cellStyle: { width: "15%" },
    },
    {
      title: "מחבר הנוהל",
      field: "produceAuthor",
      align: "center",
      width: "15%",
      headerStyle: { width: "15%" },
      cellStyle: { width: "15%" },
    },
    {
      title: "",
      field: "options",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
    },
  ];

  const data = [
    {
      produceDate: "25.2.20",
      produceName: "נוהל 1",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
      options: <TableOptions />
    },
    {
      produceDate: "01.12.21",
      produceName: "2",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
      options: <TableOptions />,
    },
    {
      produceDate: "02.11.21",
      produceName: "נוהל 3",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
      options: <TableOptions />,
    },
    {
      produceDate: "30.12.21",
      produceName: "נוהל 4",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
      options: <TableOptions />,
    },
  ];

  return (
    <div>
      <MaterialTable
      style={{
        borderRadius: "25px"
      }}
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: "#0096c7",
                borderRadius: "25px 25px 0 0 "
              }}
            >
              <MTableToolbar {...props} />
            </div>
          ),
        }}
        columns={columns}
        data= {data}
      
      title="נהלים נעוצים"
      options={{
        padding: "dense",
        paging: false,
        showTitle: true,
        search: false,
        headerStyle: { backgroundColor: "#e5e5e5" },
      }}
        
      />
    </div>
  );
}

export default ImportentProduces;
