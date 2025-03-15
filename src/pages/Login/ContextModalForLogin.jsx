import React, { createContext, useContext, useState } from 'react';


const ModalContextLogin = createContext();

export const ContextModalForLogin = ({ children }) => {
    const [isOpen, setIsOpenForLogin] = useState(false);

    return (
        <ModalContextLogin.Provider value={{ isOpen, setIsOpenForLogin }}>
            {children}
        </ModalContextLogin.Provider>
    )
}


export const useModalForLogin = () => {
    return useContext(ModalContextLogin)
}