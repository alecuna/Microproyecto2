import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "/src/firebase.js";
import { useNavigate } from "react-router-dom"; // v6

const HomePage = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/club"); // Replace with your desired path
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

  return (
    <div>
      <h1 className="title">Clubes</h1>
      <ul>
        {items.map((item) => (
          <li className=" clubBox" key={item.id}>
            {item.nombre}: {item.descripcion}
            <button className="btn" onClick={handleClick}>
              Info
            </button>
          </li> // Adjust based on your document fields
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
