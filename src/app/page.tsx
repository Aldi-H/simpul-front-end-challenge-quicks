"use client";

import { useState } from "react";
import { Box, Button, Fab, Grid, Menu, Stack, Typography } from "@mui/material";

import {
  CloudLightning,
  InboxColoredOutline,
  InboxDefaultOutline,
} from "@/components/icons/Icons";
import {
  ActiveFloatingActionButton,
  InactiveFloatingActionButton,
} from "@/components/fab/FloatingActionButton";
import PopperFab from "@/components/popper/PopperFab";
import InboxDrawer from "@/components/drawer/InboxDrawer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box>
      <InboxDrawer />
      <PopperFab />
    </Box>
  );
}
