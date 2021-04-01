import React, { useEffect, useState } from 'react';
import app from '../firebase/config';

export const AuthContext = React.createContext({});

const FirebaseProvider: React.FC = ({ children }) => {
	const [user, setUser]: [user: any, setUser: any] = useState(null);

	useEffect(() => {
        console.log('user: ', user);
		app.auth().onAuthStateChanged(setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

export { FirebaseProvider };
