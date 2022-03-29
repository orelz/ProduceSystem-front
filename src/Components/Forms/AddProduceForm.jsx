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
  // Original States
  const [produceName, setProduceName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [produceCategory, setProduceCategory] = useState("");
  const [importantProduce, setImportantProduce] = useState("no");
  const [produceStatus, setProduceStatus] = useState("");
  const [produceContent, setProduceContent] = useState("");

  // States for validation.

  const [produceNameError, setProduceNameError] = useState(false);
  const [authorNameError, setAuthorNameError] = useState(false);
  const [produceCategoryError, setProduceCategoryError] = useState(false);
  const [produceStatusError, setProduceStatusError] = useState(false);
  const [produceContentError, setProduceContentError] = useState(false);



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

    setProduceNameError(false)
    setAuthorNameError(false)
    setProduceCategoryError(false)
    setProduceStatusError(false)
    setProduceContentError(false)

    if(produceName === ""){
      setProduceNameError(true)
    }
    if(authorName===""){
      setAuthorNameError(true)
    }
    if(produceCategory===""){
      setProduceCategoryError(true)
    }
    if(produceStatus===""){
      setProduceStatusError(true)
    }
    if(produceContent===""){
      setProduceContentError(true)
    }


    if(produceName && authorName && produceCategory && produceStatus && produceContent){
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

    //Post req for produce
    fetch('http://localhost:3000/createProduce', {
      method: 'post',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(produceToSend)
    }).then((response)=> {
      return response.json();
    }).then((data)=>{
      console.log(data);
      alert("נוהל: " + produceName + " נוצר בהצלחה.")
      props.updateTablesStateHandler()
    });
    //Close the modal after sending
    props.onCloseModal();
  }
  };





  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <form onSubmit={submitHandler}>
          <Container>
            <Stack spacing={5}>
              <Typography
                variant="h4"
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
                  value={produceName}
                  type={String}
                  error={produceNameError}
                  onChange={produceNameHandler}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  מחבר הנוהל
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  value={authorName}
                  error={authorNameError}
                  onChange={authorNameHandler}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  סוג הנוהל
                </Typography>
                <Select
                  labelId="produceCategory-lable"
                  value={produceCategory}
                  error={produceCategoryError}
                  label="type"
                  onChange={produceCategoryHandler}
                  className="select-field-form"
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={'manager'}>ניהולי</MenuItem>
                  <MenuItem value={'medical'}>רפואי</MenuItem>
                </Select>
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  סטטוס
                </Typography>
                <Select
                  labelId="produceHideOrActice-lable"
                  value={produceStatus}
                  error={produceStatusError}
                  label="status"
                  onChange={produceStatusHandler}
                  className="select-field-form"
                >
                  <MenuItem value={'active'}>פעיל</MenuItem>
                  <MenuItem value={'hide'}>מוסתר</MenuItem>
                </Select>
              </div>

              <div className="div-form-inputs">
                <FormControl component="fieldset">
                  <FormLabel component="legend">נוהל נעוץ? (לא ניתן לשמור יותר מ-5 נהלים נעוצים)</FormLabel>
                  <RadioGroup
                    row
                    aria-label="importentProduce"
                    name="row-radio-buttons-importent-produce"
                    className="text-field-form"
                    value={importantProduce}
                    defaultValue="no"
                    onChange={importantProduceHandler}
                  >
                    <FormControlLabel
                      value='yes'
                      control={<Radio />}
                      label="כן"
                    />
                    <FormControlLabel
                      value='no'
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
                error={produceContentError}
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
