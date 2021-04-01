import React, { useEffect, useState } from 'react';
import app from '../firebase/config';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		app.auth().onAuthStateChanged(setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};
