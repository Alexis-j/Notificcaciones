import { Box, Button, TextField } from "@mui/material";


export default function Register() {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("hello desde submit")
    }
  return(
    <>
    <h1>register</h1>
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        helperText="a@a.com"
        error="true" 
      >
      </TextField>
      <Button
        type="submit"
        variantq="outline"
        sx={{ mt: 2 }}
      >Registrame
      </Button>
    </Box>
    </>
  )
}
