import { ArchiveSharp } from "@material-ui/icons";
import MaterialTable from "material-table";
import React from "react";
import ModalEditProduce from "../../Modal/ModalEditProduce ";
import ReadProduceModal from "../../Modal/ReadProduceModal";

function ArchiveProduces(props) {
  const login = props.isLogin;

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
      render: (rowData) => <ReadProduceModal onData={rowData} />,
    },
    {
      title: "",
      field: "edit",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: (rowData) => login && <ModalEditProduce onData={rowData} />,
    },
    {
      title: "",
      field: "delete",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: (rowData) => login && <ArchiveSharp />,
    },
  ];

  return (
    <div>
      <MaterialTable
        showPaginationBottom={false}
        style={{
          borderRadius: "25px",
        }}
        columns={columns}
        data={props.data}
        title=""
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

export default ArchiveProduces;
