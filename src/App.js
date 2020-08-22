import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import Dashboard from './components/Dashboard';
const theme = {
	global: {
		font: {
			family: 'Roboto',
			size: '14px',
			height: '20px',
		},
	},
};

function App() {
	return (
		<Grommet className="App" theme={theme}>
			<Dashboard />
		</Grommet>
	);
}

export default App;
