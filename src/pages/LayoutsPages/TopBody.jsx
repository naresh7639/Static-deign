import React, { useState } from "react";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  InputBase,
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import BottomBody from "./BottomBody";
import SearchIcon from "@mui/icons-material/Search";
import ReplyIcon from '@mui/icons-material/Reply';
import "../../style/TopBody.scss"

const TopBody = () => {
  const [selectedName, setSelectedName] = useState("");
  const [searchText, setsearchText] = useState("");

  const Datas = [
    {
      id: 1,
      name: "report.pdf",
      size: "2.3 MB",
      uploadedAt: "2025-02-27",
      owner: "John Doe"
    },
    {
      id: 2,
      name: "invoice.pdf",
      size: "1.1 MB",
      uploadedAt: "2025-02-26",
      owner: "Alice Smith"
    },
    {
      id: 3,
      name: "resume.pdf",
      size: "800 KB",
      uploadedAt: "2025-02-25",
      owner: "Bob Johnson"
    },
    {
      id: 4,
      name: "manual.pdf",
      size: "5.2 MB",
      uploadedAt: "2025-02-24",
      owner: "Emma Brown"
    },
    {
      id: 5,
      name: "ebook.pdf",
      size: "3.5 MB",
      uploadedAt: "2025-02-23",
      owner: "David Wilson"
    }
  ];

  const handleChange = (event) => {
    setsearchText(event.target.value);
  };


  return (
    <>
      <Box
        sx={{
          width: "100%", // Full width
          //   minHeight: "100vh", // Full screen height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          //   p: 2,
        }}
      >
        <Box
          //   elevation={3}
          sx={{
            width: "100%", // Full width
            maxWidth: "100%", // Ensures it stretches across the screen
            p: 3,
            // border: "1px solid #ccc",
            // borderRadius: 2,
            backgroundColor: "#f2f2f2",
            // White background for Paper
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "99%" }}>

            <Box
              sx={{
                width: "50%",
                mb: 3,
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                backgroundColor: "#fff",
                padding: "5px 10px",
              }}
            >
              <SearchIcon sx={{ color: "gray", mr: 1 }} />

              <InputBase
                placeholder="Search..."
                onChange={handleChange}
                sx={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                }}
              />

            </Box>
            <Button sx={{ mb: 3, }} variant="contained" style={{ color: "#fff", backgroundColor: "#071226", display: "flex", gap: "5px", padding: "5px 20px 5px 0" }} backgroundColor={"#071226"} color="#071226">
              <ReplyIcon sx={{ transform: "scaleX(-1)", ml: 1 }} color={"#fff"} />  <span style={{ textTransform: "lowercase" }}>Share</span>
            </Button>
          </div>
          {/* MUI Radio Group with Individual Borders for Each Option */}
          <Box
            sx={{
              width: "100%",

              p: 2,
              border: "1px solid #ccc",
              borderRadius: 1,
              //   backgroundColor: "#", // Light pink background
            }}
            class="llll"
          >
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  width: "100%"
                }}
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              >
                {Datas?.filter(item => item?.name.toLowerCase().includes(searchText.toLowerCase()))?.map((item) => (
                  <Box
                    key={item?.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      p: 1,
                      mb: 1,
                      width: "49%",
                      minWidth: "200px",
                      gap: "10px",
                      //   backgroundColor: "#e3f2fd", // Light blue background for radio options
                    }}
                  >
                    <Radio value={item?.name} />
                    <UploadFileIcon />
                    <Typography>{item?.name}</Typography>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%", // Full width
          //   minHeight: "100vh", // Full screen height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          p: 2,
        }}
        className="table-container"
      >


        <p className="header-text">Shared History</p>
        <BottomBody />

      </Box>
    </>
  );
};

export default TopBody;
