import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "/src/firebase.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function SearchJuegos() {
  const [gameDetails, setGameDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchGame = async () => {
    const gameCollection = collection(db, "games");
    const snapshot = await getDocs(gameCollection);
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGameDetails(list);
  };

  fetchGame();

  const filteredGames = gameDetails.filter((game) =>
    game.titulo.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div>
      <header className="title">Search Juegos</header>
      <input
        placeholder="Ingresa el nombre del juego"
        className="fact-form"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <div>
        <ul className="custom-list">
          {filteredGames.map((game) => (
            <li>
              <span>
                <strong>{game.titulo}:</strong> {game.descripcion}
                <p>
                  <strong>Genero:</strong> {game.genero}
                </p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
