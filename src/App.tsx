import { useCallback, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is an example of a modal window.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default App;
