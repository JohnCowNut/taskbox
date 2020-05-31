import React from 'react';
import ButtonPrimary from '../button-primary/button-primary.component'
const CardItem = ({imgUrl,title,detail}) => (
	<div className="card" style={{"width":"18rem","height":"18rem"}}>
		<img className="catd-img-top img-fluid" src = {imgUrl} alt ="#" />
		<div className="card-body">
			 <h5 className="card-title">{title}</h5>
			 <p className="card-text">{detail}</p>
			 <ButtonPrimary>View Book</ButtonPrimary>
			 <ButtonPrimary>Add Item To Cart</ButtonPrimary>
		</div>
	</div>
)
export default CardItem;