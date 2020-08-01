import React from "react"
import { TextField, TextFieldProps } from "@material-ui/core";
import { Field, FieldProps } from "formik";

export const FormikField = (props: TextFieldProps) => (
    <Field name={props.name}>
        {(fieldprops: FieldProps) => (
            <TextField
                {...props}
                {...fieldprops.field}
                error={fieldprops.meta.value ? (fieldprops.meta.error ? true : false) : false}
                helperText={fieldprops.meta.value ? (fieldprops.meta.error) : null}
            />
        )}
    </Field>
)
