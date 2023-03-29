import Link from "next/link";

export default function AddBoard() {
  return (
    <div>
      <div>
        <input
          className="bg-white text-black flex border-2 rounded-lg p-2 w-80 mb-5"
          placeholder="Board Title"
        ></input>
        <input
          placeholder="Enter a description..."
        ></input>
        <div>
          <button>
            Cancel
          </button>
          <button>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}