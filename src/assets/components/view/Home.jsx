import { Alert, Box, AlertTitle, Button, Collapse } from "@mui/material";
import { useState } from "react";

export default function Home() {

    const [open, setOpen] = useState(true)

  return (
  <>
  <h1>Home</h1>
    <Box sx={{display:"grid", gap: "1rem"}}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — check it out!
      </Alert>

      <Alert severity="warning" action={
        <>
        <Button color="inherit">Delete</Button>
        <Button color="inherit">Update</Button>
        </>
        }
      >
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — check it out!
      </Alert>

      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — check it out!
      </Alert>

      <Collapse in={open}>
        <Alert
          severity="success"
          onClose={() => {
            setOpen(false);
          }}
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — check it out!
        </Alert>
      </Collapse>
    </Box>
  </>
  );
}
