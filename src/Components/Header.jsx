import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import ModalAddProduce from "./Modal/ModalAddProduce";



function Header(props) {

const loginPrompt =(password) => {
  password = prompt("הקלד קוד כניסת מנהל");
  if(password === "Admin"){
    alert("ברוכ/ה הבאה למערכת הנהלים, ברשותך הרשאות ניהול");
  } else {
    alert("סיסמא שגויה, יש לנסות שוב")
  }
  props.onLoginHandler(password);

}

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
              {props.isLogin && <ModalAddProduce />}
              {!props.isLogin && <LoginIcon fontSize="large" onClick={loginPrompt} />}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
