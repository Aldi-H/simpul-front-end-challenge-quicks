"use client";

import { useState } from "react";
import {
  Button,
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

interface ToDoCardProps {
  addedAt: string;
  content: string;
  description: string;
  dueDate?: string;
}

const ToDoCard = ({
  addedAt,
  content,
  description: initialContent,
  dueDate,
}: ToDoCardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(initialContent);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleArrowUpClick = () => {
    setIsHidden(!isHidden);
  };

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: any) => {
    setEditedDescription(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleConfirmEdit = () => {
    setIsEditing(false);
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
          <Box sx={{ marginRight: "22px" }}>
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              checkedIcon={
                <CheckedCheckBoxOutline color="primaryCharcoalGray" />
              }
            />
          </Box>
          <Box sx={{ marginRight: "28px", maxWidth: "500px" }}>
            <Typography
              fontWeight="bold"
              fontSize="16px"
              color={isChecked ? "primary.contrasText" : "primary.dark"}
              overflow="hidden"
              textOverflow="ellipsis"
              width="360px"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                textDecoration: isChecked ? "line-through" : "none",
              }}
            >
              {content}
            </Typography>
          </Box>

          <Box sx={{ marginRight: "12px" }}>
            <Typography fontSize="14px" sx={{ color: "#EB5757" }} noWrap>
              {/* 2 Days Left */}
              {dueDate} Days Left
            </Typography>
          </Box>

          <Box sx={{ marginRight: "12px" }}>
            <Typography fontSize="14px" fontWeight="bold" noWrap>
              {addedAt}
            </Typography>
          </Box>

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
          spacing={2.2}
          sx={{ marginLeft: "62px", display: isHidden ? "none" : "" }}
        >
          <IconButton sx={{ padding: 0 }} onClick={handleTextClick}>
            <PencilOutline sx={{ width: "20px", height: "20px" }} />
          </IconButton>
          {isEditing ? (
            <Stack direction="row" spacing={2}>
              <TextField
                type="text"
                size="small"
                fullWidth
                sx={{ width: "360px" }}
                value={editedDescription}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <Button
                variant="contained"
                onClick={handleConfirmEdit}
                sx={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                Simpan
              </Button>
            </Stack>
          ) : (
            <Typography
              fontSize="16px"
              color="primary.dark"
              onClick={handleTextClick}
              sx={{ marginLeft: "20px" }}
            >
              {editedDescription}
            </Typography>
          )}
        </Stack>
      </Box>

      <Divider />
    </Box>
  );
};

export default ToDoCard;
