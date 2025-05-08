import React, { createContext, useContext, useState } from 'react';


const ModalContextLogin = createContext();

export const ContextModalForLogin = ({ children }) => {
    const [isOpenForLogin, setIsOpenForLogin] = useState(false);

    return (
        <ModalContextLogin.Provider value={{ isOpenForLogin, setIsOpenForLogin }}>
            {children}
        </ModalContextLogin.Provider>
    )
}


export const useModalForLogin = () => {
    return useContext(ModalContextLogin)
}