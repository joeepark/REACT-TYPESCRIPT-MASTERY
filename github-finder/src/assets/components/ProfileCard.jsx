import { useContext } from 'react';
import { GithubContext } from './context/GithubContext';

export default function ProfileCard() {
  const { user, noUser } = useContext(GithubContext);
  const { avatar_url, login, bio, followers, following, public_repos } = user;

  if (noUser) {
    return (
      <div className="profile-container">
        <h2>No User Found</h2>
      </div>
    );
  } else if (user) {
    return (
      <div className="profile-container">
        <img src={`${avatar_url}`} className="profile-picture" />
        <div className="profile-info">
          <h2>{login}</h2>
          <h4>{bio}</h4>
          <div className="details">
            <span>
              <strong>{followers} </strong>Followers
            </span>
            <span>
              <strong>{following} </strong>Following
            </span>
            <span>
              <strong>{public_repos}</strong> Repos
            </span>
          </div>
        </div>
      </div>
    );
  }
}
