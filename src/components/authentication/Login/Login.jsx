import { Button, TextField, Typography } from "@mui/material";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          id="username"
          label="Username"
          type="text"
          name="username"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
