import { Button } from "@mui/material";
import { useSnackbar, enqueueSnackbar } from "notistack";

export default function Login() {

    const {enqueueSnackbar} = useSnackbar()

    const handleClick = () => {
      enqueueSnackbar("you are successfully logged in", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
      })
    }
  return (
  <>
  <h1>Login</h1>
  <Button
    variant="contained"
    onClick={handleClick}
  >
    Login
  </Button>
  </>
  );
}
