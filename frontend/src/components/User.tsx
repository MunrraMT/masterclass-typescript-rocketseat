import React from 'react';

type TUser = {
  name: string;
  lastName: string;
  email: string;
};

type Props = {
  user: TUser;
  children?: React.ReactNode;
};

const User = ({ user, children }: Props): JSX.Element => (
  <article>
    <h2>{user.name}</h2>
    <p>{user.lastName}</p>
    <p>{user.email}</p>
    {children && <p>Observação: {children}</p>}
  </article>
);

export default User;
