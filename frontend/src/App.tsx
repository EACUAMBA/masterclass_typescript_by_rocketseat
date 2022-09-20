import React from 'react';
import api from './service/api';
import User from './components/User'
import IUser from './interfaces/IUser';

function App() {
  const [users, setUsers] = React.useState<Array<IUser>>([]);
  React.useEffect(()=>{
    api.get<Array<IUser>>('users').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div>
      {
        users.map((user, index) => <User user={user} key={index}/>)
      }
    </div>
  );
}

export default App;
