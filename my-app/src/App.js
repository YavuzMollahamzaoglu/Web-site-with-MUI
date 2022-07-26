import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "ligthblue" },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
      >
        Settings
      </Button>
      <Button
        startIcon={<AddIcon />}
        variant="outlined"
        disabled
        color="primary"
      >
        Add new post
      </Button>
      <BlueButton>New one</BlueButton>
    </div>
  );
}

export default App;
