export default function Suggestions() {
  const suggestions = [
    { img: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", reason: "Segue você" },
    { img: "assets/img/chibirdart.svg", name: "chibirdart", reason: "Segue você" },
    { img: "assets/img/smallcutecats.svg", name: "smallcutecats", reason: "Segue você" },

  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((sug, index) => (
        <Suggestion key={index} {...sug} />
      ))}
    </div>
  );
}

function Suggestion({ img, name, reason }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={img} alt={name} />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}