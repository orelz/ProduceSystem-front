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

  //Original State
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

  //State for validaton

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
      alert("?????????? " + produceName + " ?????????? ????????????.")
      props.updateTablesStateHandler()
    });
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
                ?????????? ????????
              </Typography>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  ???? ??????????
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  onChange={produceNameHandler}
                  value={produceName}
                  error={produceNameError}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  ???????? ??????????
                </Typography>
                <TextField
                  variant="standard"
                  className="text-field-form"
                  onChange={authorNameHandler}
                  value={authorName}
                  error={authorNameError}
                />
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  ?????? ??????????
                </Typography>
                <Select
                  labelId="produceCategory-lable"
                  label="type"
                  onChange={produceCategoryHandler}
                  className="select-field-form"
                  value={produceCategory}
                  error={produceCategoryError}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"manager"}>????????????</MenuItem>
                  <MenuItem value={"medical"}>??????????</MenuItem>
                </Select>
              </div>

              <div className="div-form-inputs">
                <Typography className="typo-name-form" variant="body1">
                  ??????????
                </Typography>
                <Select
                  labelId="produceHideOrActice-lable"
                  label="status"
                  onChange={produceStatusHandler}
                  className="select-field-form"
                  value={produceStatus}
                  error={produceStatusError}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"active"}>????????</MenuItem>
                  <MenuItem value={"hide"}>??????????</MenuItem>
                  <MenuItem value={"archive"}>???????????? ?????????? ???? ????????????</MenuItem>
                </Select>
              </div>

              <div className="div-form-inputs">
                <FormControl component="fieldset">
                  <FormLabel component="legend">???????? ????????? (???? ???????? ?????????? ???????? ??-5 ?????????? ????????????)</FormLabel>
                  <RadioGroup
                    row
                    aria-label="importantProduce"
                    name="row-radio-buttons-important-produce"
                    className="text-field-form"
                    onChange={importantProduceHandler}
                    value={importantProduce.toString()}
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="????"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="????"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <Typography variant="body1">???????? ??????????:</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                variant="filled"
                onChange={produceContentHandler}
                value={produceContent}
                error={produceContentError}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                style={{ width: "250px", alignSelf: "center" }}
              >
                ??????
              </Button>
            </Stack>
          </Container>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default EditProduceForm;
