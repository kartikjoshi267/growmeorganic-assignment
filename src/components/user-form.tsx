import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormFields {
  name: string;
  email: string;
  phone: string;
}

const UserForm = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
  });
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const navigate = useNavigate();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  }

  const onSubmitHandler = () => {
    if (!formFields.email || !formFields.phone || !formFields.name) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return;
    }

    localStorage.setItem('userDetails', JSON.stringify(formFields));
    navigate('/second-page');
  }

  return (
    <>
      <Alert
        variant="filled"
        severity="error"
        style={{
          width: 'fit-content',
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, 10%)',
          display: showAlert ? '' : 'none'
        }}
      >
        Please proceed by providing all the necessary details
      </Alert>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: '35ch' },
        }}
        autoComplete="off"
        marginX={"auto"}
        marginY={"10%"}
        style={{
          padding: '15px',
          width: 'fit-content',
          display: 'flex',
          borderRadius: '10px',
          flexDirection: "column",
          backgroundColor: '#f8f9f9',
          boxShadow: '1px 0px 10px 1px #999999'
        }}
      >
        <Typography
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={'large'}
        >
          ENTER YOUR DETAILS
        </Typography>
        <Box
          width={"fit-content"}
          display={"flex"}
          style={{
            flexDirection: "column",
          }}
        >
          <TextField
            name="name"
            id="outlined-required"
            label="Name"
            onChange={(e) => onChangeHandler(e)}
          />
          <TextField
            name="email"
            type="email"
            id="outlined-required"
            label="Email"
            onChange={(e) => onChangeHandler(e)}
          />
          <TextField
            name="phone"
            id="outlined-required"
            label="Phone"
            onChange={(e) => onChangeHandler(e)}
          />
        </Box>
        <Button
          type="button"
          variant="contained"
          style={{
            width: 'fit-content',
            margin: 'auto'
          }}
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default UserForm;
