import React from 'react';
import {storiesOf} from '@storybook/react';
import CardItem from './card-item.component';

storiesOf("div", module).add("card-item-default",() => (
		<CardItem
			imgUrl ="https://i.picsum.photos/id/0/300/350.jpg"
			title = "Default Title"
			detail ="Detail about product"
		/>
	))