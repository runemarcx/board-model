import Board from "./components/board";
import AddBoard from "./components/addBoard";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Home() {
  useEffect(() => {
    console.log("Mounted");
  });

  return (
    <div>
      <div>
        <div>
          <h1 className="logintitle">
            Scrum Board
          </h1>
        </div>
        <div>
          <Link
            href="/login"
          >
            Logout
          </Link>
        </div>
      </div>
      {<Board />}
    </div>
  );
}

