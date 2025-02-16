import { SearchIcon } from "lucide-react";

function Input() {
  return (
    <div className="mt-4 relative">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2"
      />
      <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

export default Input;
