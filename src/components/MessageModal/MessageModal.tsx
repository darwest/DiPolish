import Modal from "react-modal";
import "./MessageModal.scss"

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const MessageModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  message,
  onConfirm,
  onCancel,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>Скасувати</button>
          <button onClick={onConfirm}>Так</button>
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;

/*
У цьому компоненті використовується бібліотека react-modal для створення модального вікна.
 Інтерфейс Props визначає типи властивостей, які можна передати компоненту.


isOpen: булевий параметр, який визначає, чи повинно бути вікно відкритим чи закритим.
onRequestClose: функція, яка викликається при закритті модального вікна, наприклад, при кліку на кнопку закриття або на overlay.
contentLabel: текст, який надається для атрибута contentLabel модального вікна. Це важливо для доступності.
message: текст повідомлення, яке відображається в модальному вікні.
onConfirm: функція, яка викликається при підтвердженні дії користувача, наприклад, клікнувши "Так".
onCancel: функція, яка викликається при відміні дії користувача, наприклад, клікнувши "Скасувати".


 Компонент приймає ці властивості та використовує їх для відображення модального вікна з відповідним повідомленням та кнопками.
*/