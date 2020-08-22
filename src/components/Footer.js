import React from 'react';
import { Button } from 'grommet';

const Footer = (props) => {
	return (
		<div
			className="p-grid"
			style={{ margin: '0 0 0 0', padding: '0 0 10vh 0', color: 'white' }}
		>
			<div className="p-col-12 p-sm-1">
				<Button
					href="https://data-nifc.opendata.arcgis.com/"
					primary
					label="NIFC"
				/>
			</div>
			<div className="p-col-12 p-sm-1">
				<Button
					href="https://data-nifc.opendata.arcgis.com/datasets/incident-5?geometry=-79.843%2C-3.256%2C-130.819%2C75.908&orderBy=FireBehaviorGeneral3&selectedAttribute=CalculatedAcres"
					primary
					label="source"
				/>
			</div>
		</div>
	);
};
export default Footer;
