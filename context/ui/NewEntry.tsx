import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntriesContext } from "../entries";
import { UIContext } from "./UIContext";

export const NewEntry = () => {
  const [inputValue, setinputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addEntry } = useContext(EntriesContext);
  const { isAdding, setIsAddingEntry } = useContext(UIContext);

  const onTextChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setinputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 1, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        ></Button>
      )}
    </Box>
  );
};
