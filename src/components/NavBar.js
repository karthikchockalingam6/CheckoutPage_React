import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className=" bg-gray-100 text-slate-700">
            <div className="flex justify-between w-full items-center p-5">
              <div>
                <Typography sx={{ fontSize: 30, fontWeight: "fontWeightBold" }}>
                  PCO.
                </Typography>
              </div>
              <div className="flex w-3/12 items-center text-sm justify-around">
                <div>
                  <Badge badgeContent={13} color="primary">
                    <ShoppingBagOutlinedIcon
                      sx={{
                        color: "black",
                        "&:hover": {
                          color: "grey",
                        },
                      }}
                    />
                  </Badge>
                </div>
                <div>
                  <Person2OutlinedIcon
                    sx={{
                      color: "black",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  />
                </div>
                <Button
                  sx={{ textTransform: "none", color: "grey" }}
                  size="medium"
                >
                  Any queries?
                </Button>
                <span className="text-black font-normal">
                  Call us:(54) 11866918
                </span>
              </div>
            </div>
          </Toolbar>
          <div className="bg-gray-300 h-0.5"></div>
          <Toolbar className="bg-gray-100 text-black">
            <div className="flex w-full p-3 items-center justify-between">
              <div className="flex items-center w-auto">
                <Avatar
                  alt="Logo"
                  src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                />
                <span className="p-2 font-bold">PCO Shop.</span>
                <span className="font-normal text-slate-600">Houston,USA</span>
              </div>
              <div>
                <Button
                  href="/"
                  sx={{ textTransform: "none", color: "primary" }}
                  size="medium"
                >
                  {"<"} Back to Shopping
                </Button>
              </div>
            </div>
          </Toolbar>
          <div className="bg-gray-300 h-0.5"></div>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
