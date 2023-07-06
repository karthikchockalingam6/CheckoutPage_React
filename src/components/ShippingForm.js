import { Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockIcon from "@mui/icons-material/Lock";

const ShippingForm = () => {
  return (
    <>
      <div className="m-5 mt-30 w-1/2 h-full float-left">
        <div className="ml-7 text-3xl font-semibold">Shipping address</div>
        <div className="p-10 pb-2 ml-5 mt-2 border rounded-3xl bg-gray-100">
          <div className="flex space-x-4 ">
            <TextField
              name="fullName"
              label="Full name"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
          </div>
          <div className="pt-5 flex space-x-4 ">
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
            <TextField
              name="phone"
              label="Phone"
              type="number"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
          </div>
          <div className="pt-5 flex space-x-4 ">
            <TextField
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
            <TextField
              name="zipCode"
              label="Zipcode"
              type="number"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
            <TextField
              name="state"
              label="State"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
          </div>
          <div className="pt-5 flex space-x-4 ">
            <TextField
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              className="inputRounded"
            />
          </div>
          <div className="mt-3 ml-1 flex justify-between">
            <div className="text-green-600">
              <FormControlLabel
                control={<Checkbox defaultChecked color="success" />}
                label="Shipping address same as billing"
              />
            </div>
            <div>
              <Button size="small" variant="contained" color="inherit">
                Sumbit
              </Button>
            </div>
          </div>
        </div>
        <div className="flex ml-7 mt-2 text-xs font-medium items-center text-gray-400">
          <LockIcon fontSize="inherit" color="disabled" />
          Your information is safe
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
