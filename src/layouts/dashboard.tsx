import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DrpTable from "../components/Table";
import { Box } from "@mui/system";
import { GridColDef } from "@mui/x-data-grid";
import { IUserList } from "../utils/interfaces";
import HttpService from "../utils/httpService";
import { ClipLoader } from "react-spinners";
import { Avatar } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Image",
    description: "Image column is not sortable.",
    sortable: false,
    width: 90,
    renderCell: (params) => {
      return (
        <>
          <Avatar
            src={params.value}
            alt={`${params.row.first_name} ${params.row.last_name}`}
          />
          {params.value.username}
        </>
      );
    },
  },
  { field: "first_name", headerName: "First name", width: 200 },
  { field: "last_name", headerName: "Last name", width: 200 },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 300,
  },
];

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [record, setRecord] = useState<IUserList>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await HttpService.get(`/api/users?page=${pageNumber}`);
      console.log(data);
      setRecord(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error as Error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [pageNumber]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Header />
      {loading ? (
        <div className="centerlize">
          <ClipLoader
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : error ? (
        <div className="centerlize">
          <h1>{error.message}</h1>
        </div>
      ) : (
        record && (
          <DrpTable
            userData={record}
            columns={columns}
            setPage={setPageNumber}
          />
        )
      )}

      <Footer />
    </Box>
  );
};

export default Dashboard;
