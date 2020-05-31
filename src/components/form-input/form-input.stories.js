import React from 'react';
import {storiesOf} from '@storybook/react';
import FormInput from './form-input.component';


storiesOf("form-input", module).add("Form-Input", () => (
	<FormInput
		type="text"
		placeholder ="Type your text"
		required
	/>

))