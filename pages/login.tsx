import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    if (email === "waqas121@gmail.com" && password === "password") {
      dispatch(setUser(email));
      router.push("/todo");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Typography
        sx={{ fontSize: "45px", color: "#FFFFFF", fontWeight: 700, pb: 3 }}
      >
        Login
      </Typography>
      <TextField
        sx={{ mb: 2, width: "30%" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        type="email"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.6)",
            color: "#000",

            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
                outline: "none",
              },
            },
          },
        }}
      />
      <TextField
        sx={{ mb: 3, width: "30%" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        type="password"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.6)",
            color: "#000",

            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
                outline: "none",
              },
            },
          },
        }}
      />
      <Button
        sx={{
          border: "2px solid #FFD700",
          width: "25%",
          color: "#FFD700",
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
