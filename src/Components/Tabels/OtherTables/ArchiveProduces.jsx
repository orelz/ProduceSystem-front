import MaterialTable from 'material-table';
import React from 'react';
import { Button } from 'react-bootstrap';

function ArchiveProduces () {
    return ( 
        <div>
            <MaterialTable
      showPaginationBottom={false}
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
        title="נהלים רגילים"
        options={{ padding:"dense", showTitle:false, search:false, headerStyle: {backgroundColor: '#e5e5e5'}}}
        />
        </div>
     );
}

export default ArchiveProduces ;