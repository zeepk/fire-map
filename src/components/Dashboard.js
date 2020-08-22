import React, { useState } from 'react';
import TheMap from './TheMap';
import Header from './Header';
import Side from './Side';
import Footer from './Footer';
import 'primeflex/primeflex.css';
const Dashboard = () => {
	const [sideData, setSideData] = useState(null);
	const fireClick = (newSideData) => setSideData(newSideData);
	const [updated, setUpdated] = useState(null);
	const updateLastUpdated = (newDate) => setUpdated(newDate);

	return (
		<div>
			<Header />
			<div className="p-grid p-dir-rev" style={{ margin: '5vh 0 0 0' }}>
				<div style={{ height: '70vh' }} className="p-col-12 p-md-6 p-lg-9">
					<TheMap
						onFireClick={fireClick}
						toUpdateLastUpdated={updateLastUpdated}
					/>
				</div>
				<div className="p-col-12 p-md-6 p-lg-3">
					<Side data={sideData} />
				</div>
			</div>
			<Footer lastUpdated={updated} />
		</div>
	);
};

export default Dashboard;
