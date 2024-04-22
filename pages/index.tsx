import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectUser } from "../utils/userSlice";
import Box from "@mui/material/Box";
export default function Home() {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/todo");
    } else {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0D1117",
      }}
    ></Box>
  );
}
