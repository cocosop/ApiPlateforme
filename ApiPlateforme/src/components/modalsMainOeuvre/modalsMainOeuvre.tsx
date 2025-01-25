import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  title: string;
  content2: React.ReactNode;
  onClose: () => void;
}

const ModalsMainOeuvre: React.FC<ModalProps> = ({ title, content2, onClose }) => {
  const modalContent = (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="bg-white p-4 rounded shadow-lg w-[80%] max-w-4xl max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
          {content2}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ModalsMainOeuvre;
