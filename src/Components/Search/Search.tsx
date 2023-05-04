import { ChangeEvent } from "react";
import s from "./Search.module.css"

type ComponentProps = {
  inputName: string;
  inputType?: "text" | "date" | "number";
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Search = (props: ComponentProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };
  return (
    <div>
      <label>{props.inputName}</label>
      <input className={s.inputStyle}
        placeholder={props.placeholder}
        value={props.value}
        onInput={handleChange}
        type={props.inputType ?? "text"}
      ></input>
    </div>
  );
};
export default Search;
