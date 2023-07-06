import { Button, TextField } from "@mui/material";
import React from "react";

const SummaryDetails = () => {
  return (
    <>
      <div className="flex mr-5 ">
        <div className="m-5 w-full border rounded-3xl bg-gray-100 pb-3 float-right ">
          <div className="flex justify-center mt-5 items-center ">
            <div className="flex justify-center items-center h-auto w-3/5 border rounded-lg bg-white font-bold text-lg p-3">
              Order summary - #0297509
            </div>
          </div>
          <div className="text-gray-500 w-11/12 mx-auto">
            <div className="flex justify-between mt-5 px-5">
              <span>Date</span>
              <span>somedate</span>
            </div>
            <div className="flex justify-between mt-1 px-5">
              <span>Time</span>
              <span>sometime</span>
            </div>
            <div className="mt-2 border border-dashed border-gray-300 h-0 w-11/12 mx-auto"></div>
          </div>
          <div className="mx-auto w-11/12 text-gray-500">
            <div className="flex justify-between mt-2 px-5">
              <span className="font-bold text-black text-lg">Products</span>
              <span className="text-base">Quantity</span>
            </div>
            <div className="flex justify-between px-5">
              <div>
                <div>T-shirt</div>
                <div>Shirt</div>
                <div>Ascot cap</div>
                <div>Baseball cap</div>
                <div>Boudoir cap</div>
              </div>
              <div>
                <div>5</div>
                <div>2</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
            <div className="mt-3 border border-dashed border-gray-300 h-0 w-11/12 mx-auto"></div>
            <div className="mt-3 justify-center flex">
              <div className="flex justify-between h-10 w-11/12 space-x-3 border rounded-lg bg-white text-lg border-green-500 items-center px-5">
                <div className="text-black font-bold">
                  <TextField
                    className="w-1/2"
                    variant="standard"
                    placeholder="Coupon code"
                    size="small"
                  ></TextField>
                </div>
                <div className="text-sm">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ textTransform: "none" }}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-3 border border-dashed border-gray-300 h-0 w-11/12 mx-auto"></div>
            <div className="flex justify-between mt-2 px-5">
              <span className="font-semibold text-black text-lg">Subtotal</span>
              <span className="font-semibold text-black text-lg">$600.00</span>
            </div>
            <div className="flex justify-between mt-2 px-5">
              <span className="font-semibold text-black text-lg">Shipping</span>
              <span className="flex items-center font-semibold text-black text-lg space-x-2">
                <span className="flex justify-center items-center h-full w-10 text-xs border rounded-lg bg-white border-gray-200 font-bold">
                  Free
                </span>
                <span>$00</span>
              </span>
            </div>
            <div className="mt-3 border border-dashed border-gray-300 h-0 w-11/12 mx-auto"></div>
            <div className="flex justify-between mt-2 px-5">
              <span className="font-bold text-black text-lg">Total</span>
              <span className="font-bold text-black text-lg">
                <span className="p-2 font-medium text-sm text-blue-600">
                  USD
                </span>
                $600.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryDetails;
