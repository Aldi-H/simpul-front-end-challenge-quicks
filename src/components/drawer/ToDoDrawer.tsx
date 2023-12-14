"use client";

import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import Dropdown from "../menu/Dropdown";
import ToDoCard from "../card/ToDoCard";
import useToDoStore from "@/store/ToDoStore";
import AddToDoCard from "../card/AddToDoCard";

const ToDoDrawer = () => {
  const { todo, getAllToDo } = useToDoStore();

  useEffect(() => {
    getAllToDo();
  }, [getAllToDo]);

  return (
    <Box
      bgcolor="white"
      width="734px"
      maxWidth="734px"
      height="517px"
      borderRadius="5px"
      border={0.1}
      overflow="auto"
      sx={(theme) => ({
        boxShadow: theme.shadows[1],
        borderColor: "grey.100",
        marginY: "24px",
        paddingY: "24px",
        paddingX: "32px",
      })}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ marginX: "114.23px" }}>
          <Dropdown />
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
          >
            New Task
          </Button>
        </Box>
      </Stack>

      <Box>
        {todo.map((todo) => {
          return (
            <ToDoCard
              key={todo.id}
              content={todo.content}
              addedAt={todo.addedAt}
              dueDate={todo.remainingTime}
              description={todo.description}
            />
          );
        })}
      </Box>

      <Box>
        <AddToDoCard />
      </Box>
    </Box>
  );
};

export default ToDoDrawer;
