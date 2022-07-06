import { ChangeEvent, FC, HTMLAttributes, useState } from "react";

import { Container } from "./styles";

export type InputProps = {} & HTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ onChange, ...rest }) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);

    setInputText(event.target.value);
  };

  return (
    <Container {...rest} isFilled={!!inputText} onChange={handleChangeInput} />
  );
};
