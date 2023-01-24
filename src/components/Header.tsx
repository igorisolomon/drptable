import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: 100,
        display: "flex",
        alignItems:  "center",
        backgroundColor: "primary.dark",
        color: "#ffffff",
        opacity: 0.95,
        "&:hover": {
          backgroundColor: "primary.dark",
          opacity: 1,
        },
      }}
    >
        <Typography ml={5} component="h1" variant="h4">DRP Test</Typography>
    </Box>
  );
};

export default Header;
