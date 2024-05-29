import React, { useState, useEffect, ReactNode } from 'react';
import Modal2 from '../Modal2';
import { ProductCardEdit } from '../Product Card Edit/ProductCardEdit';
import { useModal } from 'src/hooks/useModal';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthMainComponent } from '../Forms/Auth Main Component';
import { toggle } from 'src/stores/sagaStore/slices/modal';
import { CreateCategoryForm } from '../Forms/Create Category Form';
import { CreateGameForm } from '../Forms/Create Game Form';

export const ModalURL: React.FC = () => {
  const { getState: isOpen, close: closeModal } = useModal();
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.has('showModal')) {
      dispatch(toggle(true));
      const contentParam = searchParams.get('content');
      const productParam = searchParams.get('productId');
      switch (contentParam) {
        case 'auth':
          setModalContent(<AuthMainComponent />);
          break;
        case 'cart':
          setModalContent(<>Корзина</>);
          break;
        case 'editProduct':
          if (productParam) {
            setModalContent(<ProductCardEdit productId={productParam} />);
            break;
          }
        case 'createCategory':
          setModalContent(<CreateCategoryForm />);
          break;
        case 'createGame':
          setModalContent(<CreateGameForm />);
          break;
        default:
          setModalContent(<>Ошибка. Содержимое окна не найдено. Проверьте корректность введенного URL</>);
      }
    }
  }, [searchParams]);

  return <>{isOpen() && <Modal2 onClose={closeModal}>{modalContent}</Modal2>}</>;
};
