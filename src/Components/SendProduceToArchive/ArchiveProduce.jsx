import { Tooltip } from "@material-ui/core";
import { ArchiveSharp } from "@material-ui/icons";
import React from "react";

export default function ArchiveProduce(props) {
  let produce = props.onData;

  console.log(produce);
  const sendProduceToArchive = () => {
    let produceToArchive = produce;
    let messageProduce = window.confirm(
      "האם לשלוח את " + produceToArchive.produceName + " לארכיון הנהלים?"
    );
    if (messageProduce) {
      produceToArchive.produceStatus = "archive";
      produceToArchive.importantProduce = false;
      console.log(produceToArchive);

      fetch("http://localhost:3000/produces/" + produce.produceName, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(produceToArchive),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
      alert("הנוהל נשלח לארכיון בהצלחה");
      props.updateTablesStateHandler()
    } else {
      alert("הפעולה בוטלה");
    }
  };
  return (
    <div>
      <Tooltip title="העבר לארכיון">
        <ArchiveSharp fontSize="medium" onClick={sendProduceToArchive} />
      </Tooltip>
    </div>
  );
}
