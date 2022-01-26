import { Button } from "@material-ui/core";
import { ArchiveSharp } from "@material-ui/icons";
import DraftsSharp from "@mui/icons-material/DraftsSharp";
import MaterialTable from "material-table";
import React from "react";
import ModalEditProduce from "../../Modal/ModalEditProduce ";
import ReadProduceModal from "../../Modal/ReadProduceModal";

function HideProduces() {

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
      field: "read",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
    },
    {
      title: "",
      field: "edit",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
    },
    {
      title: "",
      field: "delete",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
    },
  ];

  const data = [
    {
      produceDate: "21.12.21",
      produceName: "נוהל 1",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
      read: <ReadProduceModal />,
      edit: <ModalEditProduce />,
      delete: <ArchiveSharp />,
    },
    {
      produceDate: "01.12.21",
      produceName: "2",
      produceCategory: "ניהולי",
      produceAuthor: "אוראל",
      read: <ReadProduceModal />,
      edit: <ModalEditProduce />,
      delete: <ArchiveSharp />,
    },
    {
      produceDate: "02.11.21",
      produceName: "נוהל 3",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
      read: <ReadProduceModal />,
      edit: <ModalEditProduce />,
      delete: <ArchiveSharp />,
    },
    {
      produceDate: "30.12.21",
      produceName: "נוהל 4",
      produceCategory: "רפואי",
      produceAuthor: "אוראל",
      read: <ReadProduceModal />,
      edit: <ModalEditProduce />,
      delete: <ArchiveSharp />,
    },
  ];



  return (
    <div>
      <MaterialTable
        showPaginationBottom={false}
        style={{
          borderRadius:"25px"
        }}
        columns={columns}
        data={data}
        title="נהלים מוסתרים"
        options={{
          padding: "dense",
          showTitle: false,
          search: false,
          headerStyle: { backgroundColor: "#e5e5e5" },
        }}
      />
    </div>
  );
}

export default HideProduces;
