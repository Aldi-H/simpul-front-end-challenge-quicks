import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { UserColoredOutline, UserDefaultOutline } from "../icons/Icons";

const UserChatCard = () => {
  return (
    <Box>
      <Box
        sx={{
          marginY: "22px",
          marginX: "22px",
        }}
      >
        {/* <Avatar sx={{ bgcolor: "primary" }}>
        <UserDefaultOutline />
      </Avatar> */}
        <Stack direction="row">
          <Box sx={{ marginRight: "17px" }}>
            <AvatarGroup
              max={2}
              spacing={66}
              sx={{ justifyContent: "flex-end" }}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <UserDefaultOutline />
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: "primary.light",
                }}
              >
                <UserDefaultOutline color="primarySilverGray" />
              </Avatar>
            </AvatarGroup>
          </Box>
          <Box sx={{ marginLeft: "17px" }}>
            <Typography fontWeight="bold" fontSize="16px" color="primary.main">
              Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up -
              Brief Service ]
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="primary.dark"
              noWrap
            >
              Cameron Philips :
            </Typography>
            <Typography fontSize="14px" color="primary.dark" noWrap>
              Please check this out!
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "17px" }}>
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="primary.dark"
              noWrap
            >
              02/06/2023 10:45
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider />
    </Box>
  );
};

export default UserChatCard;
