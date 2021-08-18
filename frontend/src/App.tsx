import { useState, useEffect } from 'react';

import User from './components/User';
import api from './services/api';

type TUser = {
  name: string;
  lastName: string;
  email?: string;
};

function App() {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    api.get<TUser[]>('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Users</h1>

      <section>
        {users.map((user) =>
          user.name === 'André' ? (
            <User user={user}>Sou eu!</User>
          ) : (
            <User user={user} />
          ),
        )}
      </section>
    </div>
  );
}

export default App;
