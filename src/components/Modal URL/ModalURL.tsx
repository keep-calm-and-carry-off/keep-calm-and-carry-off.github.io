import React, { useState, useEffect, ReactNode } from 'react';
import Modal2 from '../Modal2';
import { ProductCardEdit } from '../Product Card Edit/ProductCardEdit';
import { AuthForm } from '../Forms/AuthForm/AuthForm';
import { useModal } from 'src/hooks/useModal';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggle } from 'src/stores/globalStore/globalStore';

export const ModalURL: React.FC = () => {
    const { getState: isOpen, close: closeModal } = useModal()
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (searchParams.has('showModal')) {
            dispatch(toggle(true))
            const contentParam = searchParams.get('content')
            const productParam = searchParams.get('productId')
            switch (contentParam) {
                case 'auth': setModalContent(<AuthForm />);
                    break;
                case 'cart': setModalContent(<>Корзина</>);
                    break;
                case 'editProduct': if (productParam) {
                    setModalContent(<ProductCardEdit productId={productParam} />)
                    break;
                }
                default: setModalContent(<>Ошибка. Содержимое окна не найдено. Проверьте корректность введенного URL</>);
            }
        }
    }, [searchParams])

    return (
        <>
            {isOpen() &&
                <Modal2 onClose={closeModal}>
                    {modalContent}
                </Modal2>}

        </>
    );
};