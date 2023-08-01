import { HTMLInputTypeAttribute } from "react";
import { Link } from "react-router-dom";

interface InputProps {
  mode: "InputText" | "Checkbox";
  labelText: string;
  inputType?: HTMLInputTypeAttribute;
  labelTextCheckbox?: string;
  inputPlaceHolder?: string;
  navigate?:string;
}

export const Input = (props: InputProps) => {
  const { labelText, inputType, inputPlaceHolder, mode, labelTextCheckbox, navigate } =
    props;

  if (mode === "InputText") {
    return (
      <>
        <label
          htmlFor={inputType}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {labelText}
        </label>
        <input
          id={inputType}
          name={inputType}
          type={inputType}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={inputPlaceHolder}
          required={true}
        />
      </>
    );
  }
  if (mode === "Checkbox") {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id={"checkbox"}
              aria-describedby={"checkbox"}
              type={"checkbox"}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required={true}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor={"checkbox"}
              className="text-gray-500 dark:text-gray-300">
              {labelText}
            </label>
          </div>
        </div>
        <p className="text-sm mx-1 font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
          <Link to={`${navigate}`}>{labelTextCheckbox}</Link>
        </p>
      </div>
    );
  }

  return null;
};
