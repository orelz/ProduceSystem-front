import { Divider } from "@material-ui/core";
import { ArchiveSharp } from "@material-ui/icons";
import { Stack } from "@mui/material";
import React from "react";
import ModalEditProduce from "../Modal/ModalEditProduce ";
import ReadProduceModal from "../Modal/ReadProduceModal";

function TableOptions() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <ReadProduceModal
        />
        <ModalEditProduce />
        <ArchiveSharp />
      </Stack>
    </div>
  );
}

export default TableOptions;
