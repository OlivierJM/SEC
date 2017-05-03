import React, {Component} from 'react';
import {Session} from 'meteor/session';
import Header from './Partials/Header';

export default class Calculator extends Component {


  getData(){
    // var key = "9b4b3c2c3e0f4891591a759ce746eef8";
    // // var link = "http://samples.openweathermap.org/v3/uvi/15.3,28.32/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8"
    var link = 'http://api.openweathermap.org/v3/uvi/15.3,28.32/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8'
    // // let data = fetch(link);
    // // console.log(data);
    // fetch("api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9b4b3c2c3e0f4891591a759ce746eef8 ")
    //   .then(function(response){
    //       console.log(response);
    //     var data = response.json();
    //     console.log(data);
    //       return data
    //   })
    $.ajax({
    type:"GET"
    , url:"http://api.openweathermap.org/data/2.5/weather?q=Lusaka&APPID=9b4b3c2c3e0f4891591a759ce746eef8"
    , dataType:"jsonp"
    , success: function(data){

        $('#result').text(data)
        console.log(data.coord.lat);

    }
   , error: function(e) {
       console.log(e)
       alert(e + "Error");
       }
    });

  }

  handleCalcute(event){
    event.preventDefault();

    let  solarRadiation = '1.27';
    let spa = $('#spa').val();
    let efficiency = $('#eff').val();
    let aEnergy = solarRadiation * spa * efficiency;
    Session.set('energy', aEnergy)
    $('#amount').text(aEnergy);
    // console.log(aEnergy);


  }

  render(){

    return(
      <div className="calc">
        <Header />
        {this.getData()}
        <div className='container'>
          <div className='row'>
              <div className='col-sm-4'>

                  <form className="form-signin" onSubmit={this.handleCalcute.bind(this)}>
                    <h3>The Solar Radiation for your area is: <br/> 1.27 Watts/meter squared</h3>
                      <h2 className="form-signin-heading">Calculations</h2>
                      <div className="alert" role="alert"></div>
                      <div className='form-group'>

                          <label htmlFor="spa" className="sr-only">Solar Panel Area</label>
                          <input type="number" id="spa" className="form-control" placeholder="Solar Panel Area in meter squared eg:30 " required autoFocus/>

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
              </div>
              <div className="col-sm-4">
                <h3 className="text-primary">Table to help you with How much Appliances use</h3>
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

                  </tbody>
                </table>
              </div>
          </div>
        </div>

      </div>
    )
  }

}
