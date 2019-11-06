//import React from 'react';
import React, {Component} from 'react'

//class BuilingList extends React.Component {
export default ({data, filterText, selectedUpdate}) => {
	//render() {
		//console.log('This is my directory file', this.props.data);
		//const { data } = this.props;

		const buildingList = data
		.filter(Directory => {
			if (Directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
				return Directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			}
			if (Directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
				return Directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			}
		})
		.map(directory => {
			return (
				<tr
					key={directory.id}
					onClick = {() => selectedUpdate(directory.id)}
				>
					<td>{directory.code} </td>
					<td>{directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	//}
}
//export default BuilingList;
