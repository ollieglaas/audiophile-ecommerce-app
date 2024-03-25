import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  placeholder: string;
  register: UseFormRegister<FormData>;
}

const InputBox = ({ placeholder, register }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        className="border border-[#CFD8E2] w-full mt-2 tracking-wide rounded-md px-3 py-2 placeholder:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
