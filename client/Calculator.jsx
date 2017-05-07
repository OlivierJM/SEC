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
  {'name':'HairDryer','value':1538},
  {'name':'Standard Tv', 'value':188},
  {'name':'LCD Monitor', 'value': 150},
  {'name':'Portable Fan', 'value': 100},
  {'name': 'Stereo', 'value': 60},
  {'name':'Oven', 'value': 3000},
  {'name':'Dish Washer', 'value': 1500},
  {'name':'Microwave', 'value': 1500},
  {'name': 'Iron', 'value': 1100},
  {'name':'Laptop Computer', 'value': 120}
]
export default class Calculator extends Component {




  handleCalcute(event){
    event.preventDefault();
    let solarRadiation = '1.27';
    let spa = $('#spa').val();
    let efficiency = $('#eff').val();
     uvIndex = Session.get('uvIndex');
    let radiation = uvIndex * 100;
    let eff = efficiency / 100;
    let aEnergy = Math.round(radiation * spa * eff);



    Session.set('energy', aEnergy)
    Session.set('radiation', radiation);
    // $('#rads').text("The Solar Radiation for your area is: " + radiation + "Watts/meter squared")


    if(isNaN(aEnergy)){
      $('#feedback').html(`We can't get details for your locations now`);
      $('#appliance').html(`<a href="/battery">Consider checking our Battery tool and come back</a>`)
      // alert('Sorry try again');

    }else {
      $('#amount').text(`${aEnergy} Watts`);
      $('#appliance').html(`<a href="/battery">Check the best Battery for your solar</a>`)

    }


  }


  getData(){
    // lat = Session.get('lat');
    // lon = Session.get('lon');
    lat = -15;
    lon = 28;
      var link = "http://api.openweathermap.org/v3/uvi/"+lat+','+lon+"/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8";
      // fetch("http://api.openweathermap.org/v3/uvi/-15.3,20.8/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8")
      $.get(link, function(data){
        Session.set('uvIndex', data.data)
        $('#rads').text('The UV Index in Your Location is ' +data.data);
      })
    }

    renderAppliances(){
      var index = 1;
      var energy = Session.get('energy');
        return appliances.map((item)=>(
        <tr key={index++}>
          <td>{item.name}</td>
          <td>{item.value}</td>
        </tr>
      ))

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
                    {/* <h3 className="" ><span id="rads">The UV Index in your location is: {uvIndex}</span></h3> */}
                      <h2 className="form-signin-heading">Calculations</h2>
                      <h4 className="locate">Location is :<span>{city} in {country}</span></h4>
                      <div className="alert" role="alert"></div>
                      <div className='form-group'>


                          <div className="form-group">
                              <label htmlFor="spa">Solar Panel Area</label>
                              <select className="form-control" id="spa" required>
                                  <option>1.61</option>
                                  <option>1.64</option>
                                  <option>1.9</option>
                              </select>
                          </div>
                          {/* <input type="number" id="spa" className="form-control" placeholder="Solar Panel Area in meter squared eg:30 " required autoFocus/> */}


                          <input className="" id="location" hidden placeholder={loc}/>
                      </div>

                      <div className='form-group'>


                          <div className="form-group">
                              <label htmlFor="eff">Efficiency</label>
                              <select className="form-control" id="eff" required>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                              </select>
                          </div>

                          {/* <input type="number" id="eff" className="form-control" pattern='[0-12]' placeholder="Put Solar Panel Efficiency range eg:8-12" required/> */}

                      </div>

                      <button className="btn btn-lg btn-primary btn-block" type="submit">Calculate</button>

                  </form>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-footer">

                    <h4>The amount of usable energy you can get from this solar panel in your area is:</h4>
                          <h2><span id="amount">0 Watts</span></h2>
                          <p><span id="feedback"></span></p>
                          <div id='appliance'>You Have not Calculated</div>
                        </div>

                </div>
              </div>
              <div className="col-sm-4">
                <h3 className="text-primary">Some Home Appliances That can be used</h3>
                <table className='table table-striped '>
                  <thead>
                    <tr>
                      <th>Appliance</th>
                      <th>Watts</th>
                  </tr>
                  </thead>
                  <tbody>

                  {this.renderAppliances()}

                  </tbody>
                </table>
              </div>
          </div>
        </div>

      </div>
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
