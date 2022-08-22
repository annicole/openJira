import { List, Paper } from "@mui/material";
import React, { FC, useMemo, DragEvent } from "react";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { useContext } from "react";
import { EntriesContext } from "../entries/EntriesContext";
import { UIContext } from "./UIContext";

import style from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries,updateEntry } = useContext(EntriesContext);
  const { isDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find(e=> e._id === id)!;
    entry.status = status;
    updateEntry(entry);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? style.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh -250px)",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
