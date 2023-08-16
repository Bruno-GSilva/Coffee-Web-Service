import { Label, TextInput } from "flowbite-react";
import { HTMLAttributes, ReactNode } from "react";

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
    errors: ReactNode;
    label: string;
    type: "email" | "password";
}

export const InputText = ({ errors, type, label, ...rest }: InputTextProps) => {
    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor={type} value={label} />
            </div>
            <TextInput
                {...rest}
                type={type}
                required
                placeholder="name@gmail.com"
                color={errors ? "failure" : "success"}
                helperText={<span className="font-medium">{errors}</span>}
            />
        </div>
    );
};
