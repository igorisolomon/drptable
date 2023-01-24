import * as React from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
} from "@mui/x-data-grid";
import { IUserList } from "../utils/interfaces";
import { Container, Pagination } from "@mui/material";

type TableType = {
  columns: GridColDef[];
  userData: IUserList;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  edit: (id: string, payload: { [x: string]: string }) => Promise<void>;
};

const DrpTable = ({ userData, columns, setPage, edit }: TableType) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleEdit = (cell: GridCellEditCommitParams) => {
    const payload = {
      [`${cell.field}`]: `${cell.value}`,
    };
    edit(cell.id.toString(), payload);
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
          //   onCellEditStop={handleEdit}

          onCellEditCommit={(cell) => handleEdit(cell)}
        />
      </div>
    </Container>
  );
};

export default DrpTable;
