"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import {
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";

export type TProduct = {
  _id: string;
  codeNumber: string;
  title: string;
  category: string;
  twoDUrl: string;
  threeDUrl: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const MuiEditableTable = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const [updateProduct] = useUpdateProductMutation();
  const products: TProduct[] = data?.products || [];

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [updateRow, setUpdateRow] = useState<TProduct | null>(null);
  const [twoDFile, setTwoDFile] = useState<File | null>(null);
  const [threeDFile, setThreeDFile] = useState<File | null>(null);

  const handleAdd = () => {
    // Note: Add functionality requires an API mutation. Placeholder for now.
    alert("Add functionality requires a createProduct mutation.");
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      // Note: Delete functionality requires an API mutation.
      alert("Delete functionality requires a deleteProduct mutation.");
      setDeleteId(null);
    }
  };

  const handleUpdateOpen = (row: TProduct) => {
    setUpdateRow(row);
    setTwoDFile(null);
    setThreeDFile(null);
  };

  const handleUpdateClose = () => {
    setUpdateRow(null);
    setTwoDFile(null);
    setThreeDFile(null);
  };

  const handleUpdateSave = async () => {
    if (updateRow) {
      if (
        !updateRow.codeNumber.trim() ||
        !updateRow.title.trim() ||
        !updateRow.category.trim()
      ) {
        alert("Code Number, Title, and Category are required.");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("codeNumber", updateRow.codeNumber);
        formData.append("title", updateRow.title);
        formData.append("category", updateRow.category);
        if (twoDFile) formData.append("twoDUrl", twoDFile);
        if (threeDFile) formData.append("threeDUrl", threeDFile);

        await updateProduct({
          id: updateRow._id,
          body: formData,
        }).unwrap();
        setUpdateRow(null);
        setTwoDFile(null);
        setThreeDFile(null);
      } catch (error) {
        console.error("Update failed:", error);
        alert("Failed to update product.");
      }
    }
  };

  const handleUpdateChange = (field: keyof TProduct, value: string) => {
    if (updateRow) {
      setUpdateRow({ ...updateRow, [field]: value });
    }
  };

  const columns: GridColDef[] = [
    {
      field: "codeNumber",
      headerName: "Code Number",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "twoDUrl",
      headerName: "2D Model",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) =>
        params.value ? (
          <Image
            src={params.value as string}
            alt="2D Model"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
        ) : (
          "N/A"
        ),
    },
    {
      field: "threeDUrl",
      headerName: "3D Model",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) =>
        params.value ? (
          <Image
            src={params.value as string}
            alt="3D Model"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
        ) : (
          "N/A"
        ),
    },
    {
      field: "operation",
      headerName: "Operation",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            onClick={() => handleUpdateOpen(params.row as TProduct)}
            color="primary"
            sx={{ mr: 1 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setDeleteId(params.row._id)} color="error">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <Button onClick={handleAdd} variant="contained" sx={{ mb: 2 }}>
        Add a row
      </Button>

      <DataGrid
        rows={products}
        getRowId={(row) => row._id}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        sx={{
          "& .MuiDataGrid-cell": {
            border: "1px solid rgba(224, 224, 224, 1)",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
          },
          "& .MuiDataGrid-columnHeader": {
            borderRight: "1px solid rgba(224, 224, 224, 1)",
          },
        }}
      />

      <Dialog open={deleteId !== null} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={updateRow !== null} onClose={handleUpdateClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the product details below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Code Number"
            fullWidth
            value={updateRow?.codeNumber || ""}
            onChange={(e) => handleUpdateChange("codeNumber", e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            value={updateRow?.title || ""}
            onChange={(e) => handleUpdateChange("title", e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={updateRow?.category || ""}
            onChange={(e) => handleUpdateChange("category", e.target.value)}
            required
          />
          <Box sx={{ mt: 2 }}>
            <label htmlFor="twoDUrl">2D Model</label>
            <input
              type="file"
              id="twoDUrl"
              accept="image/*"
              onChange={(e) => setTwoDFile(e.target.files?.[0] || null)}
              style={{ display: "block", marginTop: "8px" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <label htmlFor="threeDUrl">3D Model</label>
            <input
              type="file"
              id="threeDUrl"
              accept="image/*"
              onChange={(e) => setThreeDFile(e.target.files?.[0] || null)}
              style={{ display: "block", marginTop: "8px" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Cancel</Button>
          <Button onClick={handleUpdateSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MuiEditableTable;
