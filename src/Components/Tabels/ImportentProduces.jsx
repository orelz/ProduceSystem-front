import { Button, TextField } from "@material-ui/core";
import MaterialTable, { MTableToolbar } from "material-table";
import React from "react";

function ImportentProduces() {
  return (
    <div>
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: "#0096c7",
              }}
            >
              <MTableToolbar {...props} />
            </div>
          ),
        }}
        columns={[
          { title: "תאריך הנוהל", field: "produceDate" },
          { title: "שם הנוהל", field: "produceName" },
          { title: "קטגוריה", field: "produceCategory" },
          { title: "מחבר הנוהל", field: "produceAuthor" },
          { title: "פעולות", field: "actions" },
        ]}
        data={[
          {
            produceDate: "21.12.21",
            produceName: "נוהל 1",
            produceCategory: "ניהולי",
            produceAuthor: "אוראל",
            actions: <Button variant="contained">פירוט</Button>,
          },
          {
            produceDate: "01.12.21",
            produceName: "2",
            produceCategory: "ניהולי",
            produceAuthor: "אוראל",
            actions: <Button variant="contained">פירוט</Button>,
          },
          {
            produceDate: "02.11.21",
            produceName: "נוהל 3",
            produceCategory: "רפואי",
            produceAuthor: "אוראל",
            actions: <Button variant="contained">פירוט</Button>,
          },
          {
            produceDate: "30.12.21",
            produceName: "נוהל 4",
            produceCategory: "רפואי",
            produceAuthor: "אוראל",
            actions: <Button variant="contained">פירוט</Button>,
          },
        ]}
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
