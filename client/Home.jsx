import React, {Component} from 'react';

export default class extends Component{

  render(){

    return(
      <div className="intro-header">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>UV_TECHTROIDS</h1>
                        <h3>Solar Energy Calculator</h3>
                        <hr className="intro-divider"/>
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="/calculate" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Energy Calculator</span></a>
                            </li>
                            <li>
                                <a href="/battery" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Battery</span></a>
                            </li>
                            <li>
                                <a href="/about" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">UV_TECHTROIDS</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
  }
}
