"use client";

import { MouseEvent, useRef, useState } from "react";

import { Box, Grow, Paper, Popper, Typography } from "@mui/material";

import { ActiveFloatingActionButton } from "../fab/FloatingActionButton";
import {
  CloudLightning,
  InboxColoredOutline,
  ToDoColoredOutline,
} from "../icons/Icons";

const PopperFab = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Box>
      <ActiveFloatingActionButton
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        variant="activeQuicks"
        color="primarySkyBlue"
        onClick={(event: any) => handleClick(event)}
        icon={
          <CloudLightning
            color="primaryLightGray"
            sx={{ width: "56px", height: "56px" }}
          />
        }
      />
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        disablePortal={false}
        placement="left"
        transition
      >
        {({ TransitionProps }) => (
          <Grow
            in={open}
            style={{ transformOrigin: "0 0 0" }}
            {...TransitionProps}
            {...(open ? { timeout: 500 } : {})}
          >
            <Paper sx={{ bgcolor: "transparent" }} elevation={4}>
              <Box sx={{ position: "fixed", bottom: -32, right: 0 }}>
                <Typography
                  sx={{ my: 1, mr: 4 }}
                  fontSize={16}
                  className="font-extrabold"
                >
                  Inbox
                </Typography>
                <ActiveFloatingActionButton
                  // sx={{ position: "fixed", bottom: -29, right: 16 }}
                  sx={{ right: 10, bottom: 2 }}
                  variant="inactiveQuicks"
                  color="primaryLightGray"
                  icon={
                    <InboxColoredOutline
                      sx={{ width: "26.67px", height: "26.67px" }}
                    />
                  }
                />
              </Box>
              <Box sx={{ position: "fixed", bottom: -32, right: 0 }}>
                <Typography
                  sx={{ my: 1, mr: 15 }}
                  fontSize={16}
                  className="font-extrabold"
                >
                  Task
                </Typography>
                <ActiveFloatingActionButton
                  // sx={{ position: "fixed", bottom: -29, right: 96 }}
                  sx={{ right: 12, bottom: 2 }}
                  variant="inactiveQuicks"
                  color="primaryLightGray"
                  icon={
                    <ToDoColoredOutline
                      sx={{ width: "26.67px", height: "26.67px" }}
                    />
                  }
                />
              </Box>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default PopperFab;
