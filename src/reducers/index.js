import {combineReducers} from "redux";
import metrofm from '../img/metrofm.jpg';
import powerfm from '../img/powerfm.png';
import fenomenfm from '../img/fenomenfm.jpg';
import joyfm from '../img/joyfm.png';
import radiowales from '../img/radiowales.png';

const radiosReducer = () => {
    return [
    { name: "Power FM", frekans: "100,0", key: "1", img: powerfm},
    { name: "Metro FM", frekans: "101,2", key: "2", img: metrofm},
    { name: "Fenomen FM", frekans: "99,4", key: "3", img: fenomenfm},
    { name: "Joy FM", frekans: "87,1", key: "4", img:joyfm},
    { name: "Radio Wales", frekans: "142,2", key: "5", img:radiowales}
    ];
}


const selectedRadioReducer = (selectedRadio = { name: "", frekans: "", key: "", img:null}, action) => {
    if (action.type === 'SELECT_RADIO'){
        return action.payload;
    }
    
    return selectedRadio;
}

export default combineReducers({
    radios: radiosReducer,
    selectedRadio: selectedRadioReducer
});