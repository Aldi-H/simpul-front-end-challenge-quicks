"use client";

import { MouseEvent, useRef, useState } from "react";

import { Box, Grow, Paper, Popper, Stack, Typography } from "@mui/material";

import {
  ActiveFloatingActionButton,
  InactiveFloatingActionButton,
} from "../fab/FloatingActionButton";
import {
  CloudLightning,
  InboxColoredOutline,
  ToDoColoredOutline,
} from "../icons/Icons";
import InboxDrawer from "../drawer/InboxDrawer";
import ToDoDrawer from "../drawer/ToDoDrawer";

const PopperFab = () => {
  const [open, setOpen] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);
  const [openToDo, setOpenToDo] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [inboxAnchorEl, setInboxAnchorEl] = useState<null | HTMLElement>(null);
  const [toDoAnchorEl, setToDoAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClickOpenInbox = (event: MouseEvent<HTMLElement>) => {
    setInboxAnchorEl(event.currentTarget);
    setOpenInbox((previousOpen) => !previousOpen);
    setOpenToDo(false);
  };

  const handleClickOpenToDo = (event: MouseEvent<HTMLElement>) => {
    setToDoAnchorEl(event.currentTarget);
    setOpenToDo((previousOpen) => !previousOpen);
    setOpenInbox(false);
  };

  const fabQuickOpen = open && Boolean(anchorEl);
  const quickId = fabQuickOpen ? "transition-popper" : undefined;

  const InboxOpen = openInbox && Boolean(inboxAnchorEl);
  const InboxId = InboxOpen ? "transition-popper" : undefined;

  const ToDoOpen = openToDo && Boolean(toDoAnchorEl);
  const ToDoId = ToDoOpen ? "transition-popper" : undefined;

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
        id={quickId}
        open={open}
        anchorEl={anchorEl}
        disablePortal={false}
        placement="left"
        transition
      >
        {({ TransitionProps }) => {
          return (
            <Grow
              in={open}
              style={{ transformOrigin: "0 0 0" }}
              {...TransitionProps}
              {...(open ? { timeout: 500 } : {})}
            >
              {/* <Paper sx={{ bgcolor: "transparent" }} elevation={4}> */}
              <Stack
                direction="row-reverse"
                sx={{ position: "fixed", bottom: -32, right: 0 }}
              >
                <Box>
                  {openInbox === true ? (
                    <Box sx={{ my: 5 }} />
                  ) : (
                    <Typography
                      sx={{ my: 1 }}
                      fontSize={16}
                      className="font-extrabold"
                    >
                      Inbox
                    </Typography>
                  )}

                  <InactiveFloatingActionButton
                    // sx={{ position: "fixed", bottom: -29, right: 16 }}
                    sx={{ right: 10, bottom: 2 }}
                    variant="inactiveQuicks"
                    color="primaryLightGray"
                    onClick={(event) => handleClickOpenInbox(event)}
                    icon={
                      <InboxColoredOutline
                        sx={{ width: "26.67px", height: "26.67px" }}
                      />
                    }
                  />
                  <Popper
                    id={InboxId}
                    open={openInbox}
                    anchorEl={inboxAnchorEl}
                    disablePortal={false}
                    placement="top"
                    transition
                  >
                    {({ TransitionProps }) => {
                      return (
                        <Grow
                          in={openInbox}
                          style={{ transformOrigin: "10 10 10" }}
                          {...TransitionProps}
                          {...(openInbox ? { timeout: 500 } : {})}
                        >
                          <Box
                            sx={{ position: "fixed", bottom: -16, right: -24 }}
                          >
                            <InboxDrawer />
                          </Box>
                        </Grow>
                      );
                    }}
                  </Popper>
                </Box>

                <Box>
                  {openInbox === true ? (
                    <Box sx={{ mr: 9, my: 5 }} />
                  ) : (
                    <Typography
                      sx={{ my: 1, mr: 5 }}
                      fontSize={16}
                      className="font-extrabold"
                    >
                      Task
                    </Typography>
                  )}
                  <InactiveFloatingActionButton
                    // sx={{ position: "fixed", bottom: -29, right: 96 }}
                    sx={{ right: 12, bottom: 2 }}
                    variant="inactiveQuicks"
                    color="primaryLightGray"
                    onClick={(event) => handleClickOpenToDo(event)}
                    icon={
                      <ToDoColoredOutline
                        sx={{ width: "26.67px", height: "26.67px" }}
                      />
                    }
                  />
                  <Popper
                    id={ToDoId}
                    open={openToDo}
                    anchorEl={toDoAnchorEl}
                    disablePortal={false}
                    placement="top"
                    transition
                  >
                    {({ TransitionProps }) => {
                      return (
                        <Grow
                          in={openToDo}
                          style={{ transformOrigin: "10 10 10" }}
                          {...TransitionProps}
                          {...(openToDo ? { timeout: 500 } : {})}
                        >
                          <Box
                            sx={{ position: "fixed", bottom: -16, right: -24 }}
                          >
                            <ToDoDrawer />
                          </Box>
                        </Grow>
                      );
                    }}
                  </Popper>
                </Box>
              </Stack>
              {/* </Paper> */}
            </Grow>
          );
        }}
      </Popper>
    </Box>
  );
};

export default PopperFab;
