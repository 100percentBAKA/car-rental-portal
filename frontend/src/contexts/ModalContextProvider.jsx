import React, { useContext, useState } from "react";

const ModalContext = React.createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
}; //? this method will unwrap all the context value i.e. 'ContextValue' and provide it to the user
//? there will be no need of useContext(ModelContext) to be used where the states will be used

export default function ModalContextProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false); //? states we are going to deal with

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ContextValue = {
    isModalOpen,
    openModal,
    closeModal,
  }; //? these will be passed as props to ModalContext.Provider

  return (
    <ModalContext.Provider value={ContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
