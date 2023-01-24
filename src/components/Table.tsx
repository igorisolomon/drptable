import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IUserList } from "../utils/interfaces";
import { Container, Pagination } from "@mui/material";

type TableType = {
  columns: GridColDef[];
  userData: IUserList;
  setPage: React.Dispatch<React.SetStateAction<number>>
};

const DrpTable = ({ userData, columns, setPage }: TableType) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    ;
  };
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={userData.data}
          columns={columns}
          pageSize={userData.per_page}
          pagination
          autoHeight
          components={{
            Pagination: () => (
              <Pagination
                count={userData.total_pages}
                page={userData.page}
                size="large"
                onChange={handleChange}
              />
            ),
          }}
        />
      </div>
    </Container>
  );
};

export default DrpTable;
