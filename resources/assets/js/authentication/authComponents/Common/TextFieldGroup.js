import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

const TextFieldGroup = ({field, value, placeholder, error, required, type, onChange}) => {
	let styleName = error ? 'form-group has-error' : 'form-group';

	return (
		<div>
			<label>{field}</label>
			<input
				onChange={onChange}
				value={value}
				type={type}
				name={field}
				styleName="form-control"
				placeholder={placeholder}
				required={required}
			/>
			{error && <span styleName="help-block">{error}</span>}
		</div>
	)
}

TextFieldGroup.popTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	required: PropTypes.bool
}

TextFieldGroup.defaultProps = {
	type: 'text',
	required: true
}

export default TextFieldGroup;
