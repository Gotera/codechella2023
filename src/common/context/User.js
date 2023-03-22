import { createContext, useState } from "react";

export const UserContext = createContext();
UserContext.displayName = 'Usuário';

export default function UserProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [data, setData] = useState('');
	const [passe, setPasse] = useState('');
	return (
		<UserContext.Provider
			value={{
				name,
				setName,
				email,
				setEmail,
				data,
				setData,
				passe,
				setPasse
			}}
		>
			{children}
		</UserContext.Provider>
	)
}