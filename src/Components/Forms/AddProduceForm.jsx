import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

const theme = createTheme({
  direction: "rtl",
});

function AddProduceForm(props) {
  const [produceTitle, setProduceTitle] = useState("");
  const [produceAuthor, setProduceAuthor] = useState("");
  const [produceCategory, setProduceCategory] = useState("");
  const [importentProduce, setImportentProduce] = useState("");
  const [produceHideOrActice, setProduceHideOrActice] = useState("");
  const [produceContent, setProduceContent] = useState("");

  const produceTitleHandler = (e) => {
    setProduceTitle(e.target.value);
  };

  const produceAuthorHandler = (e) => {
    setProduceAuthor(e.target.value);
  };

  const produceCategoryHandler = (e) => {
    setProduceCategory(e.target.value);
  };

  const importentProduceHandler = (e) => {
    setImportentProduce(e.target.value);
  };

  const hideOrActiveProduceHandler = (e) => {
    setProduceHideOrActice(e.target.value);
  };

  const produceContentHandler = (e) => {
    setProduceContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const produce = {
      produceTitle: produceTitle,
      productAuthor: produceAuthor,
      produceDate: new Date().toString(),
      produceCategory: produceCategory,
      importentProduce: importentProduce,
      produceHideOrActice: produceHideOrActice,
      produceContent: produceContent,
    };

    console.log(produce);

    setProduceTitle("");
    setProduceAuthor("");
    setProduceCategory("");
    setImportentProduce("");
    setProduceHideOrActice("");
    setProduceContent("");

    props.onCloseModal();
  };

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
            <form onSubmit={submitHandler}>
        <Container>
          <Stack spacing={5}>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                style={{ alignSelf: "center" }}
              >
                יצירת נוהל חדש
              </Typography>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  שם הנוהל
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  value={produceTitle}
                  type={String}
                  onChange={produceTitleHandler}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  מחבר הנוהל
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  value={produceAuthor}
                  onChange={produceAuthorHandler}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  סוג הנוהל
                </Typography>
                <Select
                  labelId="produceCategory-lable"
                  value={produceCategory}
                  label="type"
                  onChange={produceCategoryHandler}
                  className="select-field-form"
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"manager"}>ניהולי</MenuItem>
                  <MenuItem value={"medical"}>רפואי</MenuItem>
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
                  onChange={hideOrActiveProduceHandler}
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
                    value={importentProduce}
                    onChange={importentProduceHandler}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="כן"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="לא"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <Typography variant="body1">תוכן הנוהל:</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                variant="filled"
                value={produceContent}
                onChange={produceContentHandler}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                style={{ width: "250px", alignSelf: "center" }}
              >
                שלח
              </Button>

          </Stack>
        </Container>
            </form>
      </div>
    </ThemeProvider>
  );
}

export default AddProduceForm;
