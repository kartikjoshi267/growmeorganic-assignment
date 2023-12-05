import { useNavigate, NavigateFunction } from "react-router-dom";
import { Alert, Button, Box } from "@mui/material";
import UserTable from "../components/user-table";
import DepartmentsCheckboxes from "../components/departments-checkboxes";


const SecondPage: React.ElementType = () => {
  const userDetails: string | null = localStorage.getItem("userDetails");
  const navigate: NavigateFunction = useNavigate();

  if (!userDetails) {
    return (
      <>
        <Alert
          variant="filled"
          severity="error"
          style={{
            width: "fit-content",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 10%)",
          }}
        >
          Please proceed by providing all the necessary details
        </Alert>
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Return to Homepage
        </Button>
      </>
    );
  }

  return (
    <Box
      marginX={'20px'}
    >
      <UserTable />
      <DepartmentsCheckboxes />
    </Box>
  )
};

export default SecondPage;
