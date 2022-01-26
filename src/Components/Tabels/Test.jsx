import MaterialTable, { MTableToolbar } from "material-table";
import React, { useEffect, useState } from "react";
import { ArchiveSharp } from "@material-ui/icons";
import ModalEditProduce from "../Modal/ModalEditProduce ";
import ReadProduceModal from "../Modal/ReadProduceModal";

function Test() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/importentProduces")
    .then(resp=> resp.json())
    .then(resp=>{
      console.log(resp);
      setData(resp)})
  },[])


  const columns = [
    {
      title: "תאריך הנוהל",
      field: "produceCreateDate",
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
      field: "authorName",
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

  // const tableData ={
  //   produceCreateDate: this.state.data.produceCreateDate,
  //     produceName: this.state.data.produceName,
  //     produceCategory: this.state.data.produceCategory,
  //     authorName: this.state.data.authorName,
  //     read: <ReadProduceModal />,
  //     edit: <ModalEditProduce />,
  //     delete: <ArchiveSharp />,
  // }
  


  return (
    <div> 

      <MaterialTable
        style={{
          borderRadius: "25px",
        }}
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: "#0096c7",
                borderRadius: "25px 25px 0 0 ",
              }}
            >
              <MTableToolbar {...props} />
            </div>
          ),
        }}
        columns={columns}
        data={
          data
        }
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

export default Test;
