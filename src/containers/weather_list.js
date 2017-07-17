import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map.js';


class WeatherList extends Component {

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const tempData = cityData.list.map(weather => weather.main.temp);
        const pressureData = cityData.list.map(weather => weather.main.pressure);
        const humidityData = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;

        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        return(
            <tr key={cityName}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td><Chart data={tempData} color="orange" units="F" /></td>
                <td><Chart data={pressureData} color="green" units="hPa" /></td>
                <td><Chart data={humidityData} color="purple" units="%"/></td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(F)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather}; //since key and value are the same we can use it with one work.
    //return {weather: weather};
}

export default connect(mapStateToProps)(WeatherList);