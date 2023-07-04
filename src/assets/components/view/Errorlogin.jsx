import { Box, Alert, AlertTitle, Snackbar, Button, } from "@mui/material";
import { useState } from "react";

export default function Errorlog() {

    const [open, setOpen] = useState(false)

  return (
  <>
  <Box >
    <Button variant="contained"
      onClick={() => {
        setOpen(true);
      }}
      >open error
    </Button>
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
