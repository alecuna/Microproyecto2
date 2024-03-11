import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "/src/firebase.js";
import Club from "./Club";

function ParentComponent() {
  const [clubInfo, setClubInfo] = useState({});
  const [items, setItems] = useState([]);

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

  function handleButtonClick(clubData) {
    setClubInfo(clubData);
  }

  return (
    <div>
      {clubsData.map((club) => (
        <button key={club.id} onClick={() => handleButtonClick(club)}>
          {club.name}
        </button>
      ))}
      <Club info={clubInfo} />
    </div>
  );
}

export default ParentComponent;
