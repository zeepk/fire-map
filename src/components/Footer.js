import React from 'react';

const Footer = (props) => {
	return (
		<div className="footer">
			<ul className="footer-ul">
				<li className="footer-li">
					<p className="made-by">
						<a
							className="footer-link"
							href="https://data-nifc.opendata.arcgis.com/"
						>
							Data Source: NIFC
						</a>
					</p>
				</li>
				<li className="footer-li">
					<p className="made-by">
						<span role="img" aria-label="laptop">
							💻
						</span>
						v1.0.0
					</p>
				</li>
				<li className="footer-li"></li>
				<li className="footer-li">
					<p className="made-by">
						{'Made by '}
						<a
							className="footer-link"
							href="https://twitter.com/matthughes2112"
						>
							@matthughes2112
						</a>
					</p>
				</li>
				<li className="footer-li">
					<p className="made-by">
						<a className="footer-link" href="https://github.com/zeepk/fire-map">
							<span role="img" aria-label="cat">
								🐈
							</span>
							Github Source
						</a>
					</p>
				</li>
				<li className="footer-li"></li>
			</ul>
		</div>
		// <div className="p-col-12 p-sm-1">
		// 	<Button
		// 		href="https://data-nifc.opendata.arcgis.com/"
		// 		primary
		// 		label="NIFC"
		// 	/>
		// </div>
		// <div className="p-col-12 p-sm-1">
		// 	<Button
		// 		href="https://data-nifc.opendata.arcgis.com/datasets/incident-5?geometry=-79.843%2C-3.256%2C-130.819%2C75.908&orderBy=FireBehaviorGeneral3&selectedAttribute=CalculatedAcres"
		// 		primary
		// 		label="source"
		// 	/>
		// </div>
	);
};
export default Footer;
