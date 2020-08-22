import React from 'react';
import { List, Button } from 'grommet';
import moment from 'moment';
const Side = (props) => {
	const data = props.data;
	const colorReturn = (severity) => {
		switch (severity) {
			case 'Minimal':
				return 'status-ok';
			case 'Active':
			case 'Moderate':
				return 'status-warning';
			case 'Extreme':
				return 'status-error';
			default:
				return 'status-unknown';
		}
	};
	return (
		<div
			style={{
				color: 'white',
				margin: '5vh 0 0 0',
			}}
		>
			{!data ? (
				<h2 style={{ textAlign: 'center' }}>Click or Tap for More Details</h2>
			) : (
				<List
					primaryKey="name"
					secondaryKey="percent"
					data={[
						{ name: 'Name', percent: data.IncidentName },
						{
							name: 'Discovered',
							// percent: Date(data.FireDiscoveryDateTime).toLocaleString(),
							percent: moment(data.FireDiscoveryDateTime).format(
								'MMM DD YYYY, h:mm a'
							),
						},
						{ name: 'Desc.', percent: data.IncidentShortDescription },
						{ name: 'State', percent: data.POOState.split('-')[1] },
						{ name: 'County', percent: data.POOCounty },
						{ name: 'Cause', percent: data.FireCause },
						{
							name: 'Severity',
							percent: (
								<Button
									primary
									color={colorReturn(data.FireBehaviorGeneral)}
									style={{ fontWeight: 'bold', pointerEvents: 'none' }}
									label={
										data.FireBehaviorGeneral
											? data.FireBehaviorGeneral
											: 'unknown'
									}
								/>
							),
						},
						{
							name: 'Contained',
							percent: (
								<Button
									primary
									color={
										data.PercentContained
											? data.PercentContained > 30
												? data.PercentContained > 70
													? 'status-ok'
													: 'status-warning'
												: 'status-error'
											: 'status-unknown'
									}
									style={{ fontWeight: 'bold', pointerEvents: 'none' }}
									label={
										data.PercentContained
											? `${data.PercentContained}%`
											: 'unknown'
									}
								/>
							),
						},
						{
							name: 'Responders',
							percent: data.TotalIncidentPersonnel
								? `${data.TotalIncidentPersonnel}🚨`
								: 'Unknown',
						},
						{
							name: 'Last Updated',
							percent: moment(data.ModifiedOnDateTime_dt).format(
								'MMM DD YYYY, h:mm a'
							),
						},
					]}
				/>
			)}
		</div>
	);
};

export default Side;
