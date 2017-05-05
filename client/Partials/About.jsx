import React, {Component} from 'react';
import Header from './Header';

export default class About extends Component {

    render() {

        return (
          <div>
            <Header />
            <div className="container">
                <h2 className="text-center">TEAM UV_TECHTROIDS</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="">
                            <a href="/alu.jpg" target="_blank">
                                <img src="/alu.jpg" alt="Lights" className="img-circle" />
                                <div className="caption">


                                </div>
                            </a>
                            <br />
                            <p className="text-center">
                              Alumanda Shakankale is Computer Engineer,Trainer, and Entrepreneur who has a BEng in Computer Engineering and has a passion in using ICT for development.<br />


                              <a href="mailto:alumandas.sil@gmail.com">Contact Alu Shaks</a>

                            </p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <a href="/oliv.jpg" target="_blank">
                                <img src="/oliv.jpg" alt="Fjords" className="img-circle" />
                                <div className="caption">


                                </div>
                            </a>
                            <br />
                            <p className="text-center">
                              Enjoys learning about new things everyday <br />

                              <a href="mailto:manolivier93@gmail.com">Contact Olivier </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <a href="/coree.jpg" target="_blank">
                                <img src="/coree.jpg" alt="Nature" className="img-circle coree" />
                            </a>
                            <div className="caption">




                            </div>
                              <br />
                            <p className="text-center">
                              Socially technical introvert. I.T Specialist. Social entrepreneur. <br />
                              <a href="mailto:ceezathena@gmail.com">Contact Coree</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
          </div>
        )
    }
}
