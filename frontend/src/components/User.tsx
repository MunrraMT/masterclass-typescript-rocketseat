import React from 'react';

type TUser = {
  name: string;
  lastName: string;
  email?: string;
};

type Props = {
  user: TUser;
  children?: React.ReactNode;
};

const User = ({ user, children }: Props): JSX.Element => (
  <article>
    <h2>
      {user.name} {user.lastName}
    </h2>
    <p>{user.email ? user.email : 'Não possui e-mail.'}</p>
    {children && <p>Observação: {children}</p>}
  </article>
);

export default User;
