import { createContext, useState } from 'react';

export const GithubContext = createContext();

export default function GithubProvider({ children }) {
  const [user, setUser] = useState('');
  const [noUser, setNoUser] = useState(false);

  const fetchUser = async (login) => {
    try {
      const request = await fetch(`https://api.github.com/users/${login}`);
      const data = await request.json();
      setUser(data);
      console.log(data)
      if (data.message === 'Not Found') {
        setNoUser(true);
      } else {
        setNoUser(false)
      }
    } catch (err) {
      console.error(err);
    }
  };




  return <GithubContext.Provider value={{ fetchUser, user, noUser }}>{children}</GithubContext.Provider>;
}
