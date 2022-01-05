import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  direction: "rtl",
});

function AddProduceForm() {
  const [produceCategory, setProduceCategory] = React.useState("");
  const [produceHideOrActice, setProduceHideOrActice] = React.useState("");

  const handleChangeCategory = (event) => {
    setProduceCategory(event.target.value);
  };

  const handleChangeHideOrActive = (event) => {
    setProduceHideOrActice(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <Container>
          <Stack spacing={5}>
            <Typography variant="h3" gutterBottom component="div" style={{alignSelf:"center"}}>
              יצירת נוהל חדש
            </Typography>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                שם הנוהל
              </Typography>
              <TextField variant="standard" className="text-field-form" />
            </div>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                מחבר הנוהל
              </Typography>
              <TextField variant="standard" className="text-field-form" />
            </div>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                סוג הנוהל
              </Typography>
              <Select
                labelId="produceCategory-lable"
                value={produceCategory}
                label="type"
                onChange={handleChangeCategory}
                className="select-field-form"
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"manager"}>ניהולי</MenuItem>
                <MenuItem value={"medical"}>רפואי</MenuItem>
                <MenuItem value={"medical"}>ארכיון נהלים לא פעילים</MenuItem>
              </Select>
            </div>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                סטטוס
              </Typography>
              <Select
                labelId="produceHideOrActice-lable"
                value={produceHideOrActice}
                label="status"
                onChange={handleChangeHideOrActive}
                className="select-field-form"
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"manager"}>פעיל</MenuItem>
                <MenuItem value={"medical"}>מוסתר</MenuItem>
              </Select>
            </div>

            <div className="div-form-inputs">
              <FormControl component="fieldset">
                <FormLabel component="legend">נוהל נעוץ?</FormLabel>
                <RadioGroup
                  row
                  aria-label="importentProduce"
                  name="row-radio-buttons-importent-produce"
                  className="text-field-form"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="כן"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="לא" />
                </RadioGroup>
              </FormControl>
            </div>

            <Typography variant="body1">תוכן הנוהל:</Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={10}
              variant="filled"
            />

            <Button
              color="primary"
              variant="contained"
              size="large"
              style={{ width: "250px",
            alignSelf:"center" }}
            >
              שלח
            </Button>
          </Stack>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default AddProduceForm;
