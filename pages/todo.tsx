import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../utils/userSlice";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import bgimage from "../assets/bg.png";
import dotsimg from "../assets/dots.png";

type TodoItem = string;
export default function Todo() {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleAddUpdateTodo = () => {
    const trimmedTodo = todo.trim();
    if (trimmedTodo === "") return;

    if (editIndex === -1) {
      if (!todos.includes(trimmedTodo)) {
        setTodos((prevTodos) => [...prevTodos, trimmedTodo]);
      }
    } else {
      if (
        !todos.some((item, idx) => item === trimmedTodo && idx !== editIndex)
      ) {
        setTodos((prevTodos) =>
          prevTodos.map((item, idx) => (idx === editIndex ? trimmedTodo : item))
        );
        setEditIndex(-1);
      }
    }
    setTodo("");
  };

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, idx) => idx !== index));
  };

  const handleEdit = (index: number) => {
    setTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={7}>
          <Box
            sx={{
              backgroundImage: `url(${bgimage.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "30px",
              my: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Ensure the box takes up 100% of the width
              maxWidth: 400, // Set a maximum width of 400 pixels
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "45px",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  pt: 3,
                }}
              >
                Shopping List
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <TextField
                  sx={{ mb: 2 }}
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="Title..."
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
                    color: "#FFD700",
                    height: "57px",
                  }}
                  onClick={handleAddUpdateTodo}
                >
                  {editIndex === -1 ? "Add" : "Update"}
                </Button>
              </Box>
              <List sx={{ width: "100%", maxWidth: 360, pb: 5 }}>
                {todos.map((item, index) => (
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #FFD700",
                    }}
                    key={index}
                    secondaryAction={
                      <>
                        <IconButton
                          sx={{ color: "#FFD700" }}
                          edge="end"
                          aria-label="edit"
                          onClick={() => handleEdit(index)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          sx={{ color: "#FFD700" }}
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(index)}
                        >
                          <ClearIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        background: "#FFD700",
                        mr: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{index}</Typography>
                    </Box>
                    <ListItemText sx={{ color: "#FFFFFF" }} primary={item} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Image src={dotsimg} width={500} height={500} alt="dots img" />
        </Grid>
      </Grid>
    </Container>
  );
}
