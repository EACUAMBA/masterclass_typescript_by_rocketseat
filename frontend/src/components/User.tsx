import React from 'react';
import IUser from './../interfaces/IUser';

interface Props {
  user: IUser;
}
const User : React.FC<Props> = ({user}) => {
  return (
    <div>
      <div style={{display: 'flex', gap: '1rem'}}><b>Nome:</b><span>{user.nome}</span></div>
      <div style={{display: 'flex', gap: '1rem'}}><b>Email:</b><span>{user.email}</span></div>
    </div>
  );
};

export default User;