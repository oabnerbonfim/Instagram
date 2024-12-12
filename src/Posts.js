export default function Posts() {
  const posts = [
    {
      userImg: "assets/img/meowed.svg",
      userName: "meowed",
      contentImg: "assets/img/gato-telefone.svg",
      likedByImg: "assets/img/respondeai.svg",
      likedByText: "respondeai",
      likes: 101523,
    },
    {
      userImg: "assets/img/barked.svg",
      userName: "barked",
      contentImg: "assets/img/dog.svg",
      likedByImg: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      likes: 99159,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

function Post({ userImg, userName, contentImg, likedByImg, likedByText, likes }) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImg} alt={userName} />
          {userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img src={contentImg} alt="conteúdo" />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={likedByImg} alt={likedByText} />
          <div className="texto">
            Curtido por <strong>{likedByText}</strong> e <strong>outras {likes.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
