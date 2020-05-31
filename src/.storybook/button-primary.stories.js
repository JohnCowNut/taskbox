import React from 'react';
import {storiesOf} from '@storybook/react'
import ButtonPrimary from '../components/button-primary/button-primary.component';
//export const withText = () => <ButtonPrimary>Hello Button</ButtonPrimary>;
storiesOf("Button",module)
	.add(
		'primary',
		() => (
			<ButtonPrimary>
				Primary
			</ButtonPrimary>
		)
	)
