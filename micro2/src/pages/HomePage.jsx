import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "/src/firebase.js";
import { useNavigate } from "react-router-dom";
import Club from "./Club";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    setClubInfo(clubData);
    navigate("/club");
  };

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, "clubes");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsList);
    };

    fetchItems();
  }, []);

  const handleClubSelection = (item) => {
    navigate(`/club/${item.id}`);
  };

  return (
    <div>
      <h1 className="title">Clubes</h1>
      <ul>
        {items.map((item) => (
          <li className=" clubBox" key={item.id}>
            <span>
              <strong>{item.nombre}:</strong> {item.descripcion}
              <p>
                <strong>Estado:</strong>
              </p>
            </span>
            <button
              className="btn"
              key={item.id}
              onClick={() => handleClubSelection(item)}
            >
              Info
            </button>
            <Club info={selectedClub} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

// export default function HomePage() {
//   return (
//     <aside>
//       <header className="header title">
//         Bienvenidos al club de videojuegos
//       </header>
//     </aside>
//   );
// }

// function A(clubObj) {
//   <li key={clubObj.ID} className="fact">
//     {clubObj.nombre}
//   </li>;
// }
