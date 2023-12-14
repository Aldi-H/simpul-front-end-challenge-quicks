"use client";

import { useState } from "react";
import {
  Checkbox,
  Divider,
  Icon,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import {
  CheckedCheckBoxOutline,
  ClockOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHorizontal,
  PencilOutline,
} from "../icons/Icons";
import { DatePicker } from "@mui/x-date-pickers";

// interface ToDoCardProps {
//   addedAt: string;
//   content: string;
//   description: string;
//   dueDate?: string;
// }

const AddToDoCard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleArrowUpClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Box>
      <Box
        sx={{
          marginY: "22px",
          marginX: "22px",
        }}
      >
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
        >
          <Stack direction="row" sx={{ width: "500px" }}>
            <Box sx={{ marginRight: "22px" }}>
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                checkedIcon={
                  <CheckedCheckBoxOutline color="primaryCharcoalGray" />
                }
              />
            </Box>
            <Box sx={{ marginRight: "28px" }}>
              <TextField size="small" fullWidth sx={{ width: "360px" }} />
            </Box>
          </Stack>

          <Stack direction="row">
            <Box sx={{ marginRight: "12px" }}>
              <IconButton sx={{ padding: 0 }} onClick={handleArrowUpClick}>
                {isHidden ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
              </IconButton>
            </Box>

            <Box>
              <IconButton sx={{ padding: 0 }}>
                <MoreHorizontal />
              </IconButton>
            </Box>
          </Stack>
        </Stack>

        <Box
          sx={{
            marginY: "16px",
            marginLeft: "62px",
            display: isHidden ? "none" : "",
          }}
        >
          <Icon sx={{ marginRight: "18px", marginY: "8px" }}>
            <ClockOutline
              color="primarySkyBlue"
              sx={{ width: "24px", height: "24px" }}
            />
          </Icon>
          <DatePicker slotProps={{ textField: { size: "small" } }} />
        </Box>

        <Stack
          direction="row"
          sx={{ marginLeft: "62px", display: isHidden ? "none" : "" }}
        >
          <Icon sx={{ padding: 0 }}>
            <PencilOutline sx={{ width: "20px", height: "20px" }} />
          </Icon>
          <Typography
            fontSize="16px"
            color="primary.dark"
            sx={{ marginLeft: "20px" }}
          >
            No Description
          </Typography>
        </Stack>
      </Box>

      <Divider />
    </Box>
  );
};

export default AddToDoCard;
