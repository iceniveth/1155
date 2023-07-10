import type { HTMLInputTypeAttribute } from "react";
import { useField } from "remix-validated-form";

type Props = {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
};

export const InputField = ({ name, label, type }: Props) => {
  const { error, getInputProps } = useField(name);

  return (
    <label>
      {label} &nbsp;
      <input type={type} {...getInputProps({ id: name })} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </label>
  );
};
