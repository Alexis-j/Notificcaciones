import { Box, Alert, AlertTitle, Snackbar, Button } from "@mui/material";
import { useState } from "react";

export default function Login() {

    const [open, setOpen] = useState(false)

  return (
  <>
  <h1>Register</h1>
  <Box sx={{display:"grid", gap: "1rem"}}>
    <Button variant="contained"
      onClick={() => {
      setOpen(true);
      }}
    >open</Button>
    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — check it out!
      </Alert>
    </Snackbar>
  </Box>
  </>
  );
}
