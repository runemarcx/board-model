import Link from "next/link";
import AddBoard from "./addBoard";

export default function Board() {
  return (
    <div>
      <h1>Boards</h1>

      <div>
        <div>
          <p>Thesis of the Project</p>
          <p>Scrumboard that enoeasdfasdf</p>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Descrition Here</p>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Descrition Here</p>
        </div>
        <Link href="/components/addBoard">
          <div className=" border-gray-300 border-2 rounded-lg p-5">
            <p className="text-3xl text-gray-400 text-center">+</p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}