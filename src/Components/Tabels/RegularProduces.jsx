import MaterialTable from "material-table";
import React from "react";
import ModalEditProduce from "../Modal/ModalEditProduce ";
import ReadProduceModal from "../Modal/ReadProduceModal";
import ArchiveProduce from "../SendProduceToArchive/ArchiveProduce";

function RegularProduces(props) {

  // Get the login prop to conditional buttons for the admin.
  const login = props.isLogin;
   //____________

  const columns = [
    {
      title: "תאריך הנוהל",
      field: "produceCreateDate",
      align: "center",
      width: "20%",
      headerStyle: { width: "20%" },
      cellStyle: { width: "20%" },
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "שם הנוהל",
      field: "produceName",
      align: "center",
      width: "40%",
      headerStyle: { width: "30%" },
      cellStyle: { width: "30%" },
    },
    {
      title: "קטגוריה",
      field: "produceCategory",
      align: "center",
      width: "20%",
      headerStyle: { width: "20%" },
      cellStyle: { width: "20%" },
      lookup: {manager: "ניהולי", medical: "רפואי"}
    },
    {
      title: "מחבר הנוהל",
      field: "authorName",
      align: "center",
      width: "15%",
      headerStyle: { width: "20%" },
      cellStyle: { width: "20%" },
    },
    {
      title: "",
      field: "read",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: (rowData) => <ReadProduceModal onData={rowData} />, // column with icon for view a full produce
    },
    {
      title: "",
      field: "edit",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: (rowData) => login && <ModalEditProduce onData={rowData} updateTablesStateHandler ={props.updateTablesStateHandler} />, // column with icon for edit the produce
    },
    {
      title: "",
      field: "delete",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: (rowData) => login && <ArchiveProduce onData ={rowData} updateTablesStateHandler ={props.updateTablesStateHandler} />, // column with icon for send the produce to the archive
    },
  ];

  return (
    <div>
      <MaterialTable
        style={{
          borderRadius: "25px",
        }}
        columns={columns}
        data={props.data}
        title="נהלים רגילים"
        options={{
          padding: "dense",
          headerStyle: { backgroundColor: "#e5e5e5" },
        }}
      />
    </div>
  );
}
export default RegularProduces;
