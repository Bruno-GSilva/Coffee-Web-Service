import { Label, TextInput } from "flowbite-react";
import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    errors: ReactNode;
    label: string;
    type: "email" | "password";
}

export const InputText = (props: InputTextProps) => {
    const { register } = useFormContext()

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor={props.type} value={props.label} />
            </div>
            <TextInput
                {...props}
                type={props.type}
                required
                placeholder="name@gmail.com"
                color={props.errors ? "failure" : "success"}
                helperText={<span className="font-medium">{props.errors}</span>}
                {...register(props.type)}
            />
        </div>
    );
};
