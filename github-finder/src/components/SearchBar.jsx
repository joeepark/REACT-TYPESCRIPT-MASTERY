import { useContext, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { GithubContext } from './context/GithubContext';

export default function SearchBar() {
  const [user, setUser] = useState('');
  const { fetchUser } = useContext(GithubContext);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(user);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <FcSearch size={40} className="search-icon" />
        <input
          type="text"
          placeholder="Search for a user"
          id="input"
          value={user}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
