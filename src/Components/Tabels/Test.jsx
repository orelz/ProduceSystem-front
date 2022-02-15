
import MaterialTable, { MTableToolbar } from "material-table";
import React, { useEffect, useState } from "react";
import ModalEditProduce from "../Modal/ModalEditProduce ";
import ReadProduceModal from "../Modal/ReadProduceModal";
import { ArchiveSharp } from "@material-ui/icons";


function Test(props) {
  const [data, setData] = useState([]);

  const login = props.isLogin;

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
      render: rowData=> <ReadProduceModal onData={rowData} />,
    },
    {
      title: "",
      field: "edit",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: rowData => login && <ModalEditProduce onData ={rowData} />
    },
    {
      title: "",
      field: "delete",
      align: "center",
      width: "1%",
      headerStyle: { width: "1%" },
      cellStyle: { width: "1%" },
      render: rowData => login && <ArchiveSharp />
    },
  ];

  return (
    <div dir="ltf"> 

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

export default Test;
