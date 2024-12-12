import React, {useState} from "react";

export default function User() {
  const [username, setUsername] = useState("catanacomics");
  const [profileImg, setProfileImg] = useState("assets/img/catanacomics.svg");

  const changeUsername = () => {
    const newUsername = prompt('Digite o novo nome de usuário:');
    if (newUsername) setUsername(newUsername);
  };

  const changeProfileImg = () => {
    const newImg = prompt('Insira o link da nova imagem de perfil:');
    if (newImg) setProfileImg(newImg);
  };

  return (
    <div className="usuario">
      <img src={profileImg} alt="imagem de perfil" onClick={changeProfileImg}/>
      <div className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon name="pencil" onClick={changeUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}