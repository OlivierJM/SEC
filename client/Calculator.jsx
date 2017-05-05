import React, {Component} from 'react';
import {Session} from 'meteor/session';
import Header from './Partials/Header';

var loc = '';
var lat = '';
var lon = '';
var rad = '';
var city = '';
var country = '';
var lati = '';
var uvIndex = '';
var appliances = [
  {'name':'oven',value:3000},{'name':'HairDryer',value:1538}
]
export default class Calculator extends Component {




  handleCalcute(event){
    event.preventDefault();
    let solarRadiation = '1.27';
    let spa = $('#spa').val();
    let efficiency = $('#eff').val();
     uvIndex = Session.get('uvIndex');
    let radiation = uvIndex * 100;
    let aEnergy = radiation * spa * efficiency;
    Session.set('energy', aEnergy)
    Session.set('radiation', radiation);
    // $('#rads').text("The Solar Radiation for your area is: " + radiation + "Watts/meter squared")
    $('#amount').text(aEnergy);

    for(i = 0; i < appliances.length; i++){
        if(appliances[i].value <= aEnergy){
        // return  <List name={appliances[i].name} value={appliances[i].value}/>
        console.log(appliances[i].name);
        $('#appliance').html('<ul><li>'+appliances[i].name+' >> '+appliances[i].value +'</li></ul>')
        }
    }


  }



  renderAppliances(){
    return(
      <table className='table table-striped '>
        <thead>
          <tr>
            <th>Appliance</th>
            <th>Watts</th>
        </tr>
        </thead>
        <tbody>
          {

          }
        </tbody>
      </table>
    )


  }

  getData(){
    lat = 19;
    lon = 155;

      var link = "http://api.openweathermap.org/v3/uvi/"+lat+','+lon+"/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8";
      // fetch("http://api.openweathermap.org/v3/uvi/-15.3,20.8/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8")
      $.get(link, function(data){
        Session.set('uvIndex', data.data)
        $('#rads').text('The UV Index in Your Location is ' +data.data);
      })
    }


  render(){






    $.get("http://ipinfo.io", function(response) {
        loc = response.loc;
        city = response.city;
        country = response.country;
        $('.locate').text('Your Location is '+city+ ' in ' + country)
        var coords = loc.split(',');
        for (let a in coords){
          lat = Math.round(coords[0]);
          lon = Math.round(coords[1]);
          Session.set('lat', lat);
          Session.set('lon', lon);
        }
  }, "jsonp");
  //


    return(
      <div className="calc">
        <Header />
        {this.getData()}
        <div className='container'>
          <div className='row'>
              <div className='col-sm-4'>

                  <form className="form-signin" onSubmit={this.handleCalcute.bind(this)}>
                    <h3 className="" ><span id="rads">The UV Index in your location is: {uvIndex}</span></h3>
                      <h2 className="form-signin-heading">Calculations</h2>
                      <h4 className="locate">Location is :<span>{city} in {country}</span></h4>
                      <div className="alert" role="alert"></div>
                      <div className='form-group'>

                          <label htmlFor="spa" className="sr-only">Solar Panel Area</label>
                          <input type="number" id="spa" className="form-control" placeholder="Solar Panel Area in meter squared eg:30 " required autoFocus/>
                          <input className="" id="location" hidden placeholder={loc}/>
                      </div>

                      <div className='form-group'>

                          <label htmlFor="eff" className="sr-only">Efficiency</label>
                          <input type="number" id="eff" className="form-control" pattern='[0-12]' placeholder="Put Solar Panel Efficiency range eg:8-12" required/>

                      </div>

                      <button className="btn btn-lg btn-primary btn-block" type="submit">Calculate</button>

                  </form>
              </div>
              <div className="col-sm-4">
                <h4>The amount of usable energy you can get from this solar panel in your area is</h4>
                <h2><span id="amount"></span> Watts</h2>
                 {/* {Session.get('energy')} */}
                 <div id='appliance'></div>
              </div>
              <div className="col-sm-4">
                <h3 className="text-primary">Table to help you with How much Appliances use</h3>
                <Table/>
              </div>
          </div>
        </div>

      </div>
    )
  }

}
export class Table extends Component{
  render(){
    return(
      <table className='table table-striped '>
        <thead>
          <tr>
            <th>Appliance</th>
            <th>Watts</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Tv</td>
            <td>188</td>
          </tr>
          <tr>
            <td>LCD Monitor</td>
            <td>80 - 150</td>
          </tr>
          <tr>
            <td>Portable Fan</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Stereo </td>
            <td>60</td>
          </tr>
          <tr>
            <td>Oven</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Hair Dryer</td>
            <td>1538</td>
          </tr>
          <tr>
            <td>Dishwasher</td>
            <td>1200 - 1500</td>
          </tr>
          <tr>
            <td>Microwave</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Iron</td>
            <td>1100</td>
          </tr>
          <tr>
            <td>laptop Computer</td>
            <td>40 - 120</td>
          </tr>
          {/* <tr>
            <td></td>
            <td></td>
          </tr> */}

        </tbody>
      </table>
    )
  }
}


export class List extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.value}</td>
      </tr>
    )
  }
}


export function initiate_geolocation() {
     navigator.geolocation.getCurrentPosition(handle_geolocation_query);
 }

export function handle_geolocation_query(position){
     alert('Lat: ' + position.coords.latitude + ' ' +
           'Lon: ' + position.coords.longitude);

         }
