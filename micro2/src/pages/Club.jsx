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

function Club() {
  const [clubDetails, setClubDetails] = useState(null);
  const [gameDetails, setGameDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchClub = async () => {
      const docRef = doc(db, "clubes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setClubDetails({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("no se encontro el documento");
      }
    };

    const fetchGame = async () => {
      const gameCollection = collection(db, "games");
      const snapshot = await getDocs(gameCollection);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGameDetails(list);
    };

    fetchClub();
    fetchGame();
  }, []);

  if (!clubDetails) {
    return <div></div>;
  }

  const idsJuegosEnCLub = new Set(clubDetails.videojuegos.map((item) => item));

  const combinedList = gameDetails.filter((itemB) =>
    idsJuegosEnCLub.has(itemB.id)
  );

  return (
    <div>
      <h1 className="title">{clubDetails.nombre}</h1>
      <p className="clubBox">{clubDetails.descripcion}</p>
      <p className="title2"> Video Juegos: </p>
      <ul className="custom-list">
        {combinedList.map((item) => (
          <li key={item.titulo}>
            <span>
              <strong>{item.titulo}:</strong> {item.descripcion}
              <p>
                <strong>Genero:</strong> {item.genero}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <button className="btn">Subscribir</button>
    </div>
  );
}

export default Club;
