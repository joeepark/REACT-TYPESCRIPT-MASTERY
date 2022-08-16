import GithubProvider from './assets/components/context/GithubContext';
import ProfileCard from './assets/components/ProfileCard';
import SearchBar from './assets/components/SearchBar';

function App() {
  return (
    <GithubProvider>
      <div className="finder-container">
        <SearchBar />
        <ProfileCard />
      </div>
    </GithubProvider>
  );
}

export default App;
