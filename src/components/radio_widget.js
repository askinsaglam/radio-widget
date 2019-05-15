import React, { Component } from 'react';
import RadioList from './radio_list';
import RadioListHeader from './radio_list_header';
import RadioListFooter from './radio_list_footer';
import metrofm from '../img/metrofm.jpg';
import powerfm from '../img/powerfm.png';
import fenomenfm from '../img/fenomenfm.jpg';
import joyfm from '../img/joyfm.png';
import radiowales from '../img/radiowales.png';


class RadioWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radios: [{ name: "Power FM", frekans: "100,0", key: "1", img: powerfm},
      { name: "Metro FM", frekans: "101,2", key: "2", img: metrofm},
      { name: "Fenomen FM", frekans: "99,4", key: "3", img: fenomenfm},
      { name: "Joy FM", frekans: "87,1", key: "4", img:joyfm},
      { name: "Radio Wales", frekans: "142,2", key: "5", img:radiowales}],
      selectedRadio: { name: "", frekans: "", key: "0" }
    };
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <RadioListHeader />
          <RadioList
            selectedItemKey = {this.state.selectedRadio.key}
            onRadioSelect={userSelected => this.setState({ selectedRadio: userSelected })}
            radios={this.state.radios} />
          <RadioListFooter currentStation={this.state.selectedRadio} />
        </div>
      </div>
    );
  }
}

export default RadioWidget;