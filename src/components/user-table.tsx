import { Box, Typography, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

interface FetchedData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 10 },
  {
    field: "title",
    headerName: "title",
    width: 500,
  },
  {
    field: "body",
    headerName: "body",
    width: 850,
  },
];

const UserTable = () => {
  const [data, setData] = useState<FetchedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response);
    };
    fetchData();
  }, []);

  if (!data.length) {
    return (
      <Box sx={{ display: 'flex', marginX: 'auto', marginTop: '20px', width: 'fit-content' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ height: 400, width: "100%", paddingY: '10px' }}>
        <Typography fontWeight={"bold"} fontSize={"x-large"}>
          User Tables
        </Typography>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default UserTable;
