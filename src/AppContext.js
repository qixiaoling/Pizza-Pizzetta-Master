import react, {useState} from 'react';

const ModalContext = react.createContext(null);

const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }



    return <ModalContext.Provider value={{
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
    }}>
        {children}
    </ModalContext.Provider>
}
export { ModalProvider, ModalContext};