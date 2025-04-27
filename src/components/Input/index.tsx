import { StyledInput } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Input({ type, placeholder, value, onChange, required }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />;
}

export default Input;
