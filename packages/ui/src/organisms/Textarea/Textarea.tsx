import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
        Description
      </label>
      <textarea {...props} id={props.id} className="w-full p-2 border border-gray-300 rounded-md" />
    </>
  );
}

export default Textarea;
