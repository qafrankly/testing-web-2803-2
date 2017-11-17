import React, { Component } from 'react';

class HomePageTakeover extends Component {

  constructor(props){ //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.state = {} /* great place to assign default state */
  }
  // ajax = (url,callback) => {
  //   let req = new XMLHttpRequest();
  //   req.open('GET', url);
  //   req.onload = function() {
  //       if (req.status === 200) {
  //           callback(req.response);
  //       } else {
  //           new Error(req.statusText);
  //       }
  //   };
  //
  //   req.onerror = function() {
  //       new Error('Network error');
  //   };
  //
  //   req.send();
  // }

  componentWillMount(){ /* OPTIONAL, fires before initial mount into DOM. Setting state here or editing props here will not cause a re-render*/ }
  componentDidMount(){/* OPTIONAL, fires after initial rendering ( based on initial default state ), DOM can be accessed here if needed. */}

  componentWillReceiveProps(nextProps){/* OPTIONAL, fired when parent component has re-rendered or made other changes to the props, allows us to conditionaal change our state only when needed*/}
  shouldComponentUpdate(nextProps, nextState){/* OPTIONAL, allows us to intelligently decide if we really need to re-render (BOOL)*/
    return true
  }
  componentWillUpdate(nextProps, nextState){/*OPTIONAL (and cannot call setState in here) last opportunity to massage data before render */}
  componentDidUpdate(prevProps, prevState){ /* OPTIONAL Here we have access to the DOM again, */}

  componentWillUnmount(){/* GREAT place to kill any network requests, or any Timeout or Interval functions trying up resources. Last stop before we are destroyed.  */}


  render(){ //REQUIRED
    return (<div className="gnm-home-page-takeover">
              <div className = "row overlaid-contents">
                <div className="col-sm-7 col-md-8 col-xs-12 left-column">
                  <h1 className="main-title">Clouds Have Descended on Devon Energy</h1>
                </div>
                <div className=" col-sm-5 col-md-4 right-column hidden-xs ">
                  <div className="dark-opacity fill-all">
                    <div className="right-column-contents">
                        <div className="row">
                          <div className="col-xs-12">
                            <a href="#" className="watch-live">
                              <span className="watch-live-text">Watch Live</span>
                              <span className="glyphicon glyphicon-play-circle"></span>
                            </a>

                          </div>
                        </div>
                        <div className="row secondary-story">

                          <div className="col-xs-12">
                            <a href="#">
                              <img className="img-responsive" src="img/oil_field.jpg"></img>
                            </a>
                          </div>
                          <div className="col-xs-12 secondary-title-container">
                            <a href="#" className="secondary-title">
                              <span >Employees looking out windows with bored and concerned faces</span>
                            </a>
                          </div>
                          <div className="col-sm-12 hidden-sm secondary-subtitle">
                            <span>Very little has happenend since the clouds appeared. It is a very sullen distraction for the workers, at a very typical time of year.</span>
                          </div>


                        </div>
                        <div className="divider visible-sm-block"></div>
                        <div className="row related-story ">
                          <div className="col-xs-5 hidden-sm related-stories-photo-col">
                            <a href="#">
                              <img className="img-responsive" src="img/oil_field.jpg"></img>
                            </a>
                          </div>
                          <div className="col-sm-12 col-md-7 related-stories-text-col">
                            <div className="row">
                              <div className="col-xs-12">
                                <a href="#" className="related-stories-title">Overcast skies seen over pumps and entire oilfields, concern for the future is rising</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider visible-sm-block"></div>
                        <div className="row related-story ">
                          <div className="col-xs-5 hidden-sm related-stories-photo-col">
                            <a href="#">
                              <img className="img-responsive" src="img/old_oil_field.jpg"></img>
                            </a>
                          </div>
                          <div className="col-sm-12 col-md-7 related-stories-text-col">
                            <div className="row">
                              <div className="col-xs-12">
                                <a href="#" className="related-stories-title">The industry looks back at a time when it was never cloudy, surprised that this could happen</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider visible-sm-block"></div>
                        <div className="row related-story ">
                          <div className="col-xs-5 hidden-sm related-stories-photo-col">
                            <a href="#">
                              <img className="img-responsive" src="img/workers.jpg"></img>
                            </a>
                          </div>
                          <div className="col-sm-12 col-md-7 related-stories-text-col">
                            <div className="row">
                              <div className="col-xs-12">
                                <a href="#" className="related-stories-title">Drillers continue drilling without regard for depression faced in the offices, unconcerned about clouds</a>
                              </div>
                            </div>

                          </div>
                        </div>

                    </div>
                    <div className="view-more">
                      <div className="row">
                        <div className="col-xs-12">
                          <a href="#" >
                            <span >View More</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div className="main-image-container">
                  <img className ="main-image" src="img/devon.jpg"></img>
              </div>

              <div className="row visible-xs-block dark-opacity xs-bottom-bar related-stories small">


                    <div className="col-xs-12">
                      <a href="#" className="watch-live">
                        <span className="watch-live-text">Watch Live</span>
                        <span className="glyphicon glyphicon-play-circle"></span>
                      </a>
                    </div>

                    <div className="col-xs-12 bottom-border">
                      <a href="#">Employees looking out windows with bored and concerned faces</a>
                    </div>

                    <div className="col-xs-12  bottom-border">
                      <a href="#">Overcast skies seen over pumps and entire oilfields, concern for the future is rising</a>
                    </div>

                    <div className="col-xs-12  bottom-border">
                      <a href="#">Drillers continue drilling without regard for depression faced in the offices, unconcerned about clouds</a>
                    </div>
                    <div className="view-more small">

                      <a href="#" className="bottom-border">
                        <span >View More</span>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                      </a>
                    </div>




              </div>
            </div>)
  }
}

export default HomePageTakeover;
