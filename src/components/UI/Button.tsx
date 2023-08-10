interface ButtonProps {
    label: string;
    buttonType?: "submit" | "reset" | "button";
    onClick?: () => void;
}

export const Button = ({ label, buttonType, onClick }: ButtonProps) => {
    return (
        <button
            type={buttonType}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={onClick}
        >
            {label}
        </button>
    );
};
