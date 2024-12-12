export default function Stories() {
  const stories = [
    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: "meowed" },
    { img: "assets/img/barked.svg", user: "barked" },
  ];

  return (
    <div className="stories">
      {stories.map((story, index) => (
        <Story key={index} img={story.img} user={story.user} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story({ img, user }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={img} alt={user} />
      </div>
      <div className="usuario">{user}</div>
    </div>
  );
}