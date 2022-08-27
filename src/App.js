import React, { useState } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

const App = () => {
	/* State */
	const [title, _] = useState('Github Cards App');
	const [profiles, setProfiles] = useState([]);

	const addNewProfile = profileData => {
		setProfiles(prevState => [...prevState, profileData])
	};

	return (
		<main>
			<div className="header">{title}</div>
			<Form onSubmit={addNewProfile} />
			<CardList profiles={profiles} />
		</main>
	);
}

export default App;