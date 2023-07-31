import React, { createContext, useState } from "react";

type ChangeFormContextType = {
    changeForm: boolean;
    setChangeForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalChangeContext = createContext({} as ChangeFormContextType);

interface ChangeFormContextProps {
    children: React.ReactNode;
}

export default function ChangeFormContext({
    children,
}: ChangeFormContextProps) {

    const [changeForm, setChangeForm] = useState<boolean>(false);

    return (
        <GlobalChangeContext.Provider value={{ changeForm, setChangeForm }}>
            {children}
        </GlobalChangeContext.Provider>
    );
}
