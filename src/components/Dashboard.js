import React, { useState } from 'react';
import TheMap from './TheMap';
import Header from './Header';
import Side from './Side';
import { Box, Grid } from 'grommet';
const Dashboard = () => {
	const [sideData, setSideData] = useState(null);
	const fireClick = (newSideData) => setSideData(newSideData);

	return (
		<Grid
			style={{ border: '1px solid red', height: '100vh' }}
			areas={[
				{ name: 'nav', start: [0, 0], end: [2, 0] },
				{ name: 'main', start: [1, 1], end: [1, 1] },
				{ name: 'side', start: [0, 1], end: [0, 1] },
			]}
			columns={['500px', 'flex', '2vw']}
			rows={['10%', 'flex']}
			gap="small"
		>
			<Box gridArea="nav">
				<Header />
			</Box>
			<Box gridArea="main">
				<TheMap onFireClick={fireClick} />
			</Box>
			<Box gridArea="side" background="dark-2">
				<Side data={sideData} />
			</Box>
		</Grid>
	);
};

export default Dashboard;
