import React, { useState } from "react";

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
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const likePostOnImageClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

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

      <div className="conteudo" onClick={likePostOnImageClick}>
        <img src={contentImg} alt="conteúdo" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={isLiked ? "heart" : "heart-outline"}
              onClick={toggleLike}
              className={isLiked ? "liked" : ""}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={isSaved ? "bookmark" : "bookmark-outline"}
              onClick={toggleSave}
            ></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={likedByImg} alt={likedByText} />
          <div className="texto">
            Curtido por <strong>{likedByText}</strong> e{" "}
            <strong>outras {likeCount.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}