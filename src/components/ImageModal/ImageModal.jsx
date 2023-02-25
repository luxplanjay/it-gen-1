import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
      <h1>MODAL</h1>
      <img src={image} alt="" width="320" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};
