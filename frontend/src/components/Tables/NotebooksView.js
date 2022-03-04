import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";
export default function NotebooksView() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        disableRowSelector={true}
      />
    </div>
  );
}

const columns = [
  { field: "title", headerName: "TITLE", width: 280, editable: true },
  { field: "createdBy", headerName: "CREATED BY", width: 200, editable: false },
  {
    field: "dateCreated",
    headerName: "CREADTED",
    type: "date",
    width: 130,
    editable: false,
  },
  {
    field: "lastUpdated",
    headerName: "LAST UPADATED",
    type: "dateTime",
    width: 220,
    editable: false,
  },
  {
    field: "isPrivate",
    headerName: "PRIVATE",
    type: "boolean",
    width: 100,
    editable: false,
  },
  {
    field: "tags",
    headerName: "TAGS",
    width: 180,
    editable: false,
  },
  {
    field: "actions",
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Add New Note"
        // onClick={deleteUser(params.id)}
      />,
      <GridActionsCellItem
        icon={<DriveFileRenameOutlineIcon />}
        label="Rename NoteBook"
        // onClick={toggleAdmin(params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<LockIcon />}
        label="Lock NoteBook"
        // onClick={duplicateUser(params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<SwitchAccessShortcutIcon />}
        label="Add to Shortcut"
        // onClick={duplicateUser(params.id)}
        showInMenu
      />,
    ],
  },
];

const rows = [
  {
    id: 1,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: true,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 8,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: true,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 9,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: false,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 2,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: true,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 3,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: false,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 4,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: true,
    tags: [" hello", " first", " temp"],
  },
  {
    id: 5,
    title: "First Book",
    createdBy: "Bhvain",
    age: 25,
    dateCreated: "04/03/2022",
    lastUpdated: " 04/03/2022, 03:57:20",
    isPrivate: false,
    tags: [" hello", " first", " temp"],
  },
];
