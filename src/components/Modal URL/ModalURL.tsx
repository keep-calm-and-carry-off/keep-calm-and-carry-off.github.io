import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Modal2 from '../Modal2';
import { ProductCardEdit } from '../Product Card Edit/ProductCardEdit';

export const ModalURL: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null)

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const showModalParam = urlParams.get('showModal');
        const contentParam = urlParams.get('content')
        const productParam = urlParams.get('productId')
        switch (contentParam) {
            case 'auth': setModalContent(<>Авторизация</>);
                break;
            case 'cart': setModalContent(<>Корзина</>);
                break;
            case 'editProduct' : if (productParam) {
                setModalContent(<ProductCardEdit productId={productParam}/>)
                break;
            }
            default: setModalContent(<>Ошибка. Содержимое окна не найдено. Проверьте корректность введенного URL</>);
        }
        if (showModalParam && showModalParam === 'true') {
            setIsOpen(true);
        }
    }, [location.search]);

    const closeModal = () => {
        setIsOpen(false);
        const url = new URL(window.location.href);
        url.searchParams.delete('showModal');
        url.searchParams.delete('content');
        url.searchParams.delete('productId');
        window.history.replaceState({}, '', url.toString());
    };

    return (
        <>
            {isOpen &&
                <Modal2 onClose={closeModal}>
                    {modalContent}
                </Modal2>}

        </>
    );
};