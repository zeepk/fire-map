import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
const API_URL =
	'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Active_Fires/FeatureServer/0/query?where=1%3D1&outFields=ContainmentDateTime,ControlDateTime,CreatedOnDateTime,DailyAcres,DiscoveryAcres,FireBehaviorGeneral,FireBehaviorGeneral1,FireBehaviorGeneral2,FireBehaviorGeneral3,FireCause,FireCauseGeneral,FireCauseSpecific,FireDiscoveryDateTime,FireOutDateTime,IncidentName,IncidentShortDescription,IncidentTypeCategory,IncidentTypeKind,InitialLatitude,InitialLongitude,InitialResponseAcres,InitialResponseDateTime,IsFireCauseInvestigated,IsQuarantined,IsValid,PercentContained,PercentPerimeterToBeContained,POOCity,POOCounty,POOState,TotalIncidentPersonnel,CreatedOn,ModifiedOn,GlobalID,ModifiedOnDateTime_dt,CreatedOnDateTime_dt,CalculatedAcres,FireCode,ModifiedOnDateTime,IsDispatchComplete&outSR=4326&f=json';

export default function TheMap(props) {
	const coords = [44.967243, -103.771556];
	const [data, setData] = useState(null);
	const [fires, setFires] = useState(null);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);
	if (data && !fires) {
		const firesToPush = data.features.map((fireData) => {
			return {
				data: fireData.attributes,
				lat: fireData.attributes.InitialLatitude,
				lng: fireData.attributes.InitialLongitude,
			};
		});
		props.toUpdateLastUpdated(data);
		setFires(firesToPush);
	}
	console.log('rendering the map');
	return (
		<div style={{ height: '90%', width: '90%', margin: '0 auto' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDHmrfNeDYuDpXD6AmqiOH46XD2Ago9Sag',
				}}
				defaultCenter={coords}
				defaultZoom={4}
			>
				{fires &&
					fires.map((fireData) => (
						<div
							style={{ fontSize: '20px' }}
							lat={fireData.lat}
							lng={fireData.lng}
							onClick={() => props.onFireClick(fireData.data)}
						>
							<span role="img" aria-label="Fire">
								🔥
							</span>
						</div>
					))}
			</GoogleMapReact>
		</div>
	);
}
