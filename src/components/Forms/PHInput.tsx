import { InputAdornment, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  iconColor?: string;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  placeholder = label,
  required,
  icon,
  iconColor = "#949494",
}: TPHInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          size={size}
          fullWidth={fullWidth}
          variant="outlined"
          placeholder={placeholder}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">
                <span
                  style={{
                    color: iconColor,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                </span>
              </InputAdornment>
            ) : undefined,
          }}
        />
      )}
    />
  );
};

export default PHInput;
