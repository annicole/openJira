import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntriesContext } from "../entries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addEntry } = useContext(EntriesContext);

  const onTextChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const onSave = () => {

    if(inputValue.length === 0) return;

    addEntry(inputValue)
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
            <Button variant="text" onClick={() => setIsAdding(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
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
          onClick={() => setIsAdding(true)}
        ></Button>
      )}
    </Box>
  );
};
