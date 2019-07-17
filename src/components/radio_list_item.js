import React from 'react';
import minus from '../img/minus.png';
import plus from '../img/plus.png';
import { selectRadio } from "../actions";
import { connect } from "react-redux";

class RadioListItem extends React.Component {

	render() {
		const radio = this.props.radio;
		const onUserSelected = this.props.selectRadio;
		const isActive = this.props.isActive;

		if (isActive) {
			return (
				<li onClick={() => onUserSelected(radio)} className="list-group-item text-white-50 bg-dark">
					<div className="d-flex justify-content-between align-items-center">
						<img onClick={()=>alert("Minus button is clicked")} className="radio-widget-icon" src={minus} alt="minus" />
						<img className="preview-img rounded-circle" src={radio.img} alt="preview" />
						<img onClick={()=>alert("Plus button is clicked")} className="radio-widget-icon" src={plus} alt="plus" />
					</div>
					<div className="d-flex justify-content-between align-items-center">
						{radio.name}
						<span>{radio.frekans}</span>
					</div>
				</li>
			);
		} else {
			return (
				<li onClick={() => onUserSelected(radio)} className="list-group-item text-white-50 bg-dark">
					<div className="d-flex justify-content-between align-items-center">
						{radio.name}
						<span>{radio.frekans}</span>
					</div>
				</li>
			);
		}
	}
}

const mapStateToProps = state => {
    return { };
};

export default connect(mapStateToProps, {selectRadio})(RadioListItem);

