// ! _____________________ Додати в компонент картки
// const [modalIsOpen, setIsModalOpen] = useState(false);

// const openModal = () => {
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
// };

//!_____________________ Рендер модального вікна.
// <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
{
  /* Контент */
}
// </BasicModalWindow>;

// ! _____________________ Кнопка відкриття модального вікна
//  <Button onClick={openModal}></Button>

import { SvgCustom } from '../SvgCustom/SvgCustom';

import { CloseModalBtn } from './BasicModalWindow.styled';
import './BasicModalWindow.css';

import { Modal } from 'antd';
import { theme } from '../../styles';

export const BasicModalWindow = ({ isOpen, onRequestClose, children }) => {
  return (
    <>
      <Modal
        centered
        open={isOpen}
        closeIcon={false}
        onCancel={onRequestClose}
        footer={null}
        width={'auto'}
      >
        <CloseModalBtn type="button" onClick={onRequestClose}>
          <SvgCustom
            icon="cross"
            width={32}
            height={32}
            stroke={theme.colors.main}
            hover={theme.colors.accent}
          />
        </CloseModalBtn>
        {children}
      </Modal>
    </>
  );
};
