import { useState } from "react";

function InputField(props) {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAddItem() {
    if (input.trim() !== "") {
      props.onAddItem(input);
      setInput("");
    }
  }

  return (
    <div class="mt-2 flex-col flex-wrap justify-center items-start">
      <label class="flex justify-start">{props.label}</label>
      <div class="relative justify-start">
        <input
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        {props.type === "list" ? (
          <button
            class="absolute w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleAddItem}
          >
            Add
          </button>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default InputField;
