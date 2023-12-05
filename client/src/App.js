import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';
import FetchProfile from './components/Profile/FetchProfile';
import EditPassword from './components/Profile/EditPassword';
import MatchSearch from './components/Matchmaking/MatchSearch';
import MainPage from './components/Main/MainPage';
import Game from './components/Matchmaking/Game';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile/:username" element={<FetchProfile />} />
				<Route path="/edit-password" element={<EditPassword />} />
				<Route path="/search-match" element={<MatchSearch />} />
				<Route path="/" element={<MainPage />} />
				<Route path="/game" element={<Game/>} />
			</Routes>
		</Router>
	);
};

export default App;
