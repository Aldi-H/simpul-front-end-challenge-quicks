"use client";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { SearchOutline } from "../icons/Icons";
import UserChatCard from "../card/UserChatCard";
import Dropdown from "../menu/Dropdown";
import ToDoCard from "../card/ToDoCard";

const ToDoDrawer = () => {
  return (
    <Box
      bgcolor="white"
      width="734px"
      height="537px"
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
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </Box>
    </Box>
  );
};

export default ToDoDrawer;
