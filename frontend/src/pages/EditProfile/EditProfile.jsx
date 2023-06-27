import "./EditProfile.css";

export const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p>Adicione uma imagem de perfil e conte mais sobre você...</p>
      {/* preview da imagem */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" disable />
        <label htmlFor="">
          <span>Imagem do Perfil:</span>
          <input type="file" />
        </label>
        <label htmlFor="">
          <span>Bio:</span>
          <input type="text" placeholder="Descrição do perefil" />
        </label>
        <label htmlFor="">
          <span>Quer alterar sua senha?</span>
          <input type="password" placeholder="Digite sua nova senha" />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};
