// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { TableVirtuoso } from 'react-virtuoso';
// import Chance from 'chance';
// import { Box } from '@mui/material';

// const chance = new Chance(42);

// const columns = [
//   { width: 100, label: 'Name', dataKey: 'firstName' },
//   { width: 100, label: 'Email', dataKey: 'lastName' },
//   { width: 50, label: 'Code', dataKey: 'age', numeric: true },
//   { width: 110, label: 'Created on', dataKey: 'state' },
//   { width: 130, label: 'Link', dataKey: 'phone' },
// ];

// const rows = Array.from({ length: 200 }, (_, index) => ({
//   id: index,
//   firstName: chance.first(),
//   lastName: chance.last(),
//   age: chance.age(),
//   phone: chance.phone(),
//   state: chance.state({ full: true }),
// }));

// const VirtuosoTableComponents = {
//   Scroller: React.forwardRef((props, ref) => (
//     <TableContainer component={Paper} {...props} ref={ref} />
//   )),
//   Table: (props) => (
//     <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
//   ),
//   TableHead: React.forwardRef((props, ref) => (
//     <TableHead {...props} ref={ref} />
//   )),
//   TableRow,
//   TableBody: React.forwardRef((props, ref) => (
//     <TableBody {...props} ref={ref} />
//   )),
// };

// const fixedHeaderContent = () => (
//   <TableRow>
//     {columns.map((column) => (
//       <TableCell
//         key={column.dataKey}
//         variant="head"
//         align={column.numeric ? 'right' : 'left'}
//         style={{ width: column.width }}
//         sx={{ backgroundColor: 'background.paper' }}
//       >
//         {column.label}
//       </TableCell>
//     ))}
//   </TableRow>
// );

// const rowContent = (_index, row) => (
//   <>
//     {columns.map((column) => (
//       <TableCell key={column.dataKey} align={column.numeric ? 'right' : 'left'}>
//         {row[column.dataKey]}
//       </TableCell>
//     ))}
//   </>
// );

// export default function BottomBody() {
//   return (
//     <Box style={{ height: 400, width: '100%' }}>
//       <TableVirtuoso
//         data={rows}
//         components={VirtuosoTableComponents}
//         fixedHeaderContent={fixedHeaderContent}
//         itemContent={rowContent}
//       />
//     </Box>
//   );
// }
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Box, IconButton,Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "../../style/BottomBody.scss"

const columns = [
    {
      field: "firstName",
      headerName: "Name",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "code",
      headerName: "Code",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "createdat",
      headerName: "Created at",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      disableColumnMenu: true,
    },
    
    {
      field: "link",
      headerName: "Link",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      disableColumnMenu: true,
    },

    {
      field: "icon2",
      headerName: "",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box display="flex" alignItems="center"  >
         
          <Typography style={{display:"flex",alignItems:"center",gap:"4px"}} variant="body2" component="a" href={params.value} target="_blank" rel="noopener noreferrer" sx={{ ml: 1, textDecoration: "none", }}>
          <ErrorOutlineIcon style={{color:"red"}} color="red" /> <p>disable link</p>
          </Typography>
        </Box>
      ),
    },

    {
        field: "icon",
        headerName: "",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 150,
        disableColumnMenu: true,
        renderCell: (params) => (
          <Box display="flex" alignItems="center">
            <IconButton component="a" href={params.value} target="_blank" rel="noopener noreferrer">
              <QuestionAnswerIcon />
            </IconButton>
           
          </Box>
        ),
      },
    
   
  ];
  
  const rows = [
    { id: 1, firstName: "Jon", email: "jon@example.com", code: "101hg6567", createdat: "2024-02-01", link: "https://example.com/jon" },
    { id: 2, firstName: "Cersei", email: "cersei@example.com", code: "10dsfthjv2", createdat: "2024-02-02", link: "https://example.com/cersei" },
    { id: 3, firstName: "Jaime", email: "jaime@example.com", code: "103jkh987", createdat: "2024-02-03", link: "https://example.com/jaime" },
    { id: 4, firstName: "Arya", email: "arya@example.com", code: "104kljh786786", createdat: "2024-02-04", link: "https://example.com/arya" },
    { id: 5, firstName: "Daenerys", email: "daenerys@example.com", code: "1079898fdg", createdat: "2024-02-05", link: "https://example.com/daenerys" },
  ];
  

const paginationModel = { page: 0, pageSize: 5 };

const DataTable = () => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
     
       <div style={{ width: '100%', overflowX: 'auto' }}> 
       <DataGrid
        rows={rows}
        columns={columns.map((col) => ({ ...col, disableReorder: true, resizable: false }))} // Disable both reordering and resizing
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
     
        disableColumnReorder 
        sx={{
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus": {
            outline: "none", // Removes focus outline
          },
          "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within": {
            outline: "none", // Ensures no focus when clicking inside
          },
          border: 0 ,
          padding:"0 10px"
        }}
        
      />
      </div>
    </Paper>
  );
};

export default DataTable;
