"use client";

function ModalCloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="text-xl text-gray-400 hover:text-gray-600" onClick={onClick}>
      &times;
    </button>
  );
}

export default ModalCloseButton;
