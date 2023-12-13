"use client";

import {
  Checkbox,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import {
  CheckedCheckBoxOutline,
  ClockOutline,
  KeyboardArrowUp,
  MoreHorizontal,
  PencilOutline,
} from "../icons/Icons";
import { DatePicker } from "@mui/x-date-pickers";

const ToDoCard = () => {
  return (
    <Box>
      <Box
        sx={{
          marginY: "22px",
          marginX: "22px",
        }}
      >
        <Stack direction="row" alignItems="start">
          <Box sx={{ marginRight: "22px" }}>
            <Checkbox
              checkedIcon={
                <CheckedCheckBoxOutline color="primaryCharcoalGray" />
              }
            />
          </Box>
          <Box sx={{ marginRight: "28px" }}>
            <Typography fontWeight="bold" fontSize="16px" color="primary.dark">
              Set up documentation report for several Cases: Case 145443, Case
              192829 and Case 182203
            </Typography>

            <Box sx={{ marginY: "16px" }}>
              <Icon sx={{ marginRight: "18px", marginY: "8px" }}>
                <ClockOutline
                  color="primarySkyBlue"
                  sx={{ width: "24px", height: "24px" }}
                />
              </Icon>
              <DatePicker slotProps={{ textField: { size: "small" } }} />
            </Box>
          </Box>

          <Box sx={{ marginRight: "12px" }}>
            <Typography fontSize="14px" sx={{ color: "#EB5757" }} noWrap>
              2 Days Left
            </Typography>
          </Box>

          <Box sx={{ marginRight: "12px" }}>
            <Typography fontSize="14px" fontWeight="bold" noWrap>
              13/12/2023
            </Typography>
          </Box>

          <Box sx={{ marginRight: "12px" }}>
            <IconButton sx={{ padding: 0 }}>
              <KeyboardArrowUp />
            </IconButton>
          </Box>

          <Box>
            <IconButton sx={{ padding: 0 }}>
              <MoreHorizontal />
            </IconButton>
          </Box>
        </Stack>

        <Stack direction="row" sx={{ marginLeft: "62px" }}>
          <Icon sx={{ padding: 0 }}>
            <PencilOutline sx={{ width: "20px", height: "20px" }} />
          </Icon>
          <Typography
            fontSize="16px"
            color="primary.dark"
            sx={{ marginLeft: "20px" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            nulla, modi temporibus totam, vero deleniti magnam distinctio
            commodi saepe velit reprehenderit vel, natus dolores neque nobis
            omnis vitae possimus doloremque.
          </Typography>
        </Stack>
      </Box>

      <Divider />
    </Box>
  );
};

export default ToDoCard;
