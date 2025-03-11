import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ContextModal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    return useContext(ModalContext);
}