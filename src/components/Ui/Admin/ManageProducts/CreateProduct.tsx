/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Grid, Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateProduct = ({ open, setOpen }: TProps) => {
  const [createProduct] = useCreateProductMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const { codeNumber, title, category, twoDFile, threeDFile } = values;
    if (!codeNumber || !title || !category || !twoDFile || !threeDFile) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const payload = {
        codeNumber,
        title,
        category,
        twoDFile: twoDFile[0],
        threeDFile: threeDFile[0],
      };
      const formData = modifyPayload(payload);
      const res = await createProduct(formData).unwrap();
      if (res?._id) {
        toast.success("Product created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error("Create product failed:", err);
      toast.error(err?.message || "Failed to create product.");
    }
  };

  const defaultValues = {
    codeNumber: "",
    title: "",
    category: "",
    twoDFile: null,
    threeDFile: null,
  };

  return (
    <PHFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Create New Product"
      sx={{ zIndex: 1300 }} // Ensure modal is above other components
    >
      <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="codeNumber"
              label="Code Number"
              fullWidth={true}
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="title"
              label="Title"
              fullWidth={true}
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="category"
              label="Category"
              fullWidth={true}
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="twoDFile"
              type="file"
              label="2D Image (Required)"
              fullWidth={true}
              sx={{ mb: 2 }}
              inputProps={{ accept: "image/*" }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="threeDFile"
              type="file"
              label="3D Model (GLB/GLTF, Required)"
              fullWidth={true}
              sx={{ mb: 2 }}
              inputProps={{ accept: ".glb,.gltf" }}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default CreateProduct;
