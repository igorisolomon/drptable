import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Header />
      <Footer />
    </Box>
  );
};

export default Dashboard;
