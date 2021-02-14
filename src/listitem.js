import React from 'react';
import FlipMove from 'react-flip-move';
import './listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props) {
		const items = props.items;
		console.log(items);
		const listItems = items.map(item => {
			console.log(item.key);
			return <div className="list" key={item.key}>
							<p>
							<input type="text" id={item.key} value={item.text} onChange= {(event) => props.editItem(event.target.value, item.key)}/>
							<span><FontAwesomeIcon className="faicon" icon="trash" onClick= {() => props.deleteItem(item.text)} />
							</span></p>
						</div>
		})
	return (
		<div>
		 <FlipMove duration={300} easing="ease-in-out">
		 	{listItems}
		 </FlipMove>
		</div>
		 
	);
}

export default ListItems;