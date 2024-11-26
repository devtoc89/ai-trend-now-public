"use client";

import type { ReactNode } from "react";
import Button from "#atoms/Button/Button.tsx";
import ModalCloseButton from "#atoms/Button/ModalCloseButton.tsx";
import Textarea from "#organisms/Textarea/Textarea.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  title: ReactNode;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* { // Modal Background } */}
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* { // Modal Container } */}
        <div className="flex justify-between items-center mb-4">
          {/* { // Modal Header } */}
          <h2 className="text-lg font-bold">{title}</h2>
          <ModalCloseButton onClick={onClose} />
        </div>

        <form>
          {children}
          {/* { // Modal Content } */}
          <div className="mb-4">
            <Textarea label="Textarea" />
          </div>

          <div className="mb-4">
            {/* { // Select Dropdown } */}
            <label htmlFor="select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Option
            </label>
            <select id="select" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="mb-4">
            {/* { // Input Field } */}
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
              Input
            </label>
            <input id="input" type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          {/* <div className="mb-4 flex items-center">
            <input id="checkbox" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="checkbox" className="ml-2 text-sm text-gray-700">
              Accept Terms
            </label>
          </div> */}

          <div className="mb-4">
            {/* { // Radio Buttons } */}
            <span className="block text-sm font-medium text-gray-700 mb-1">Options</span>
            <div className="flex items-center mb-2">
              <input
                id="radio1"
                name="radio-group"
                type="radio"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="radio1" className="ml-2 text-sm text-gray-700">
                Option 1
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="radio2"
                name="radio-group"
                type="radio"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="radio2" className="ml-2 text-sm text-gray-700">
                Option 2
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="cancel">Cancel</Button>
            <Button variant="confirm">Confirm</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
