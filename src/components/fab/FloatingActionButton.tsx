"use client";

import { ReactNode } from "react";
import {
  Fab,
  FabPropsColorOverrides,
  FabPropsVariantOverrides,
  SxProps,
} from "@mui/material";
import { InboxColoredOutline } from "../icons/Icons";
import { OverridableStringUnion } from "@mui/types";

interface FloatingActionButtonProps {
  variant: OverridableStringUnion<
    "circular" | "extended",
    FabPropsVariantOverrides
  >;
  color: OverridableStringUnion<
    "success" | "error" | "info" | "warning",
    FabPropsColorOverrides
  >;
  icon: ReactNode;
  sx?: SxProps;
  onClick?: (event?: any) => void;
}

const ActiveFloatingActionButton = ({
  variant,
  color,
  sx,
  icon,
  onClick,
}: FloatingActionButtonProps) => {
  return (
    <Fab onClick={onClick} sx={sx} variant={variant} color={color}>
      {icon}
    </Fab>
  );
};

const InactiveFloatingActionButton = ({
  onClick,
  variant,
  color,
  sx,
  icon,
}: FloatingActionButtonProps) => {
  return (
    <Fab sx={sx} variant={variant} color={color} onClick={onClick}>
      {icon}
    </Fab>
  );
};

export { ActiveFloatingActionButton, InactiveFloatingActionButton };
