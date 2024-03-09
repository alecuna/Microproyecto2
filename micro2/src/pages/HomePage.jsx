const initialClubs = [
  {
    ID: "1",
    nombre: "Club de Aventureros",
    descripcion:
      "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
    videojuegos: ["1", "3", "11"],
  },
  {
    ID: "2",
    nombre: "Club de Estrategia",
    descripcion:
      "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
    videojuegos: ["4", "15", "16"],
  },
];

export default function HomePage() {
  return (
    <aside>
      <header className="header title">
        Bienvenidos al club de videojuegos
      </header>
      <section className="facts-list">
        <ul className="facts-list">
          {initialClubs.map((club) => (
            <A clubObj={club} />
          ))}
        </ul>
      </section>
    </aside>
  );
}

function A(clubObj) {
  <li key={clubObj.ID} className="fact">
    {clubObj.nombre}
  </li>;
}
