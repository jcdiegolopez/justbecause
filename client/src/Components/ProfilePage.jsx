// ProfilePage.js

import { Navigate } from 'react-router-dom';
import { useUser } from '../Hooks/userHook';

const ProfilePage = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const { _id, nombre, correo, tipo } = user;

  return (
    <div>
      <h1>Perfil de {nombre}</h1>
      <p>ID: {_id}</p>
      <p>Correo: {correo}</p>
      <p>Tipo de Usuario: {tipo}</p>
      {/* ... Otros detalles del perfil */}
    </div>
  );
};

export default ProfilePage;
