import { Button, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography>Using Material UI with Next.js 13</Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" className="text-red-600">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Typography
        variant="h1"
        component="h2"
        className="text-teal-800 font-bold text-[12px]"
      >
        h1. Heading (this is a 12px font??)
      </Typography>
    </Grid>
  );
}
