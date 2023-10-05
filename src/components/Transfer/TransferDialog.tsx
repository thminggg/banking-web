import { accounts } from "@/data/accounts";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TransferDialog({
  open,
  handleClose,
  handleConfirm,
}: {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}) {
  const [fromAccount, setFromAccount] = useState("");

  const handleFromAccountChange = (event: SelectChangeEvent) => {
    setFromAccount(event.target.value as string);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Interac</DialogTitle>
        <DialogContent>
          <FormControl
            fullWidth
            sx={{
              marginTop: "0.5em",
            }}
          >
            <InputLabel htmlFor="from-account-label">From account</InputLabel>
            <Select
              labelId="from-account-label"
              id="from-account-select"
              value={fromAccount}
              label="From account"
              onChange={handleFromAccountChange}
            >
              {accounts.CA?.map((account) => (
                <MenuItem key={account.id} value={account.id}>
                  {account.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: "0.5em" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
