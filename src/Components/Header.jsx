import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import React from "react";
import ModalAddProduce from "./Modal/ModalAddProduce";
import LoginModal from "./Modal/LoginModal";


function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"
        style={{
          borderRadius:"25px 25px 0 0"
        }}>
          <Toolbar>
            <Bookmarks />
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginRight: "30px" }}
            >
              מערכת נהלים- ניתוחים
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              style={{ marginRight: "auto", width:"80px" }}
            >
              <LoginModal />
              <ModalAddProduce />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
