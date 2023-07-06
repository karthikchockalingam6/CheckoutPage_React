import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Typography from "@mui/material/Typography";

const ProgressBar = () => {
  return (
    <>
      <div className="mt-5 m-5 w-1/2 h-full flex flex-col float-left ">
        <div className="py-2  border-2 border-gray-300 bg-gray-100 rounded-3xl shadow-md mb-2">
          <Stepper activeStep={1} alternativeLabel>
            <Step>
              <StepLabel>
                <Typography color="green">SHIPPING</Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>PAYMENT</StepLabel>
            </Step>
            <Step>
              <StepLabel>CONFIRMATION</StepLabel>
            </Step>
          </Stepper>
        </div>

        <div className="text-sm px-5 border-2 border-gray-300 rounded-xl shadow-sm bg-gray-100">
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <div>
                <LocalShippingOutlinedIcon />
              </div>
              <div className="p-2">Delivery address</div>
            </div>
            <div className="flex justify-evenly text-xs items-center">
              <div>David Smith,542 W,14th Street</div>
              <div>
                <Button
                  sx={{
                    textTransform: "none",
                    fontWeight: "fontWeightBold",
                    color: "primary",
                  }}
                  size="small"
                >
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
