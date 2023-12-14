import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { SearchOutline } from "../icons/Icons";
import UserChatCard from "../card/UserChatCard";

const InboxDrawer = () => {
  return (
    <Box
      bgcolor="white"
      width="734px"
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
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          sx={{
            height: "32px",
            paddingY: "10.04",
            paddingX: "58.82px",
          }}
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutline
                  color="primaryCharcoalGray"
                  sx={{ width: "12px", height: "12px" }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Search"
        />
      </FormControl>

      <Box>
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
      </Box>
    </Box>
  );
};

export default InboxDrawer;
