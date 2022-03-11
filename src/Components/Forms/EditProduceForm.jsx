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

function EditProduceForm(props) {
  const produce = props.onData;

  const [produceName, setProduceName] = useState(produce.produceName);
  const [authorName, setAuthorName] = useState(produce.authorName);
  const [produceCategory, setProduceCategory] = useState(
    produce.produceCategory
  );
  const [importantProduce, setImportantProduce] = useState(
    produce.importantProduce
  );
  const [produceStatus, setProduceStatus] = useState(produce.produceStatus);
  const [produceContent, setProduceContent] = useState(produce.produceContent);

  const produceNameHandler = (e) => {
    setProduceName(e.target.value);
  };

  const authorNameHandler = (e) => {
    setAuthorName(e.target.value);
  };

  const produceCategoryHandler = (e) => {
    setProduceCategory(e.target.value);
  };

  const importantProduceHandler = (e) => {
    setImportantProduce(e.target.value);
  };

  const produceStatusHandler = (e) => {
    setProduceStatus(e.target.value);
  };

  const produceContentHandler = (e) => {
    setProduceContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    

    
    const produceToSend = {
      produceName: produceName,
      produceCategory: produceCategory,
      produceStatus: produceStatus,
      importantProduce: importantProduce,
      authorName: authorName,
      produceCreateDate: new Date().toString(),
      produceContent: produceContent,
    };
    console.log(produceToSend);

    //PATCH method - test
    fetch('http://localhost:3000/produces/' + produce.produceName, {
      method: 'PATCH',
      // title: produce.produceName,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(produceToSend)
    }).then((response)=> {
      console.log(response);
      return response.json();
    }).then((data)=>{
      console.log(data);
    });

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
                עדכון נוהל
              </Typography>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  שם הנוהל
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  onChange={produceNameHandler}
                  value={produceName}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  מחבר הנוהל
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  onChange={authorNameHandler}
                  value={authorName}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  סוג הנוהל
                </Typography>
                <Select
                  labelId="produceCategory-lable"
                  label="type"
                  onChange={produceCategoryHandler}
                  className="select-field-form"
                  value={produceCategory}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"manager"}>ניהולי</MenuItem>
                  <MenuItem value={"medical"}>רפואי</MenuItem>
                  <MenuItem value={"disable"}>ארכיון נהלים לא פעילים</MenuItem>
                </Select>
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  סטטוס
                </Typography>
                <Select
                  labelId="produceHideOrActice-lable"
                  label="status"
                  onChange={produceStatusHandler}
                  className="select-field-form"
                  value={produceStatus}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"active"}>פעיל</MenuItem>
                  <MenuItem value={"hide"}>מוסתר</MenuItem>
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
                    onChange={importantProduceHandler}
                    value={importantProduce.toString()}
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="כן"
                    />
                    <FormControlLabel
                      value="false"
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
                onChange={produceContentHandler}
                value={produceContent}
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

export default EditProduceForm;
