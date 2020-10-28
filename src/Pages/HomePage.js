// Home.js
import React, {Component} from 'react';


export default class Home extends Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <div className="page">
                <div className="flex-fill">
                <div className="my-3 my-md-5">
                      <div className="container">
                        <div className="page-header">
                          <h1 className="page-title">
                            Dashboard
                          </h1>
                        </div>
                        <div className="row row-cards">
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-green">
                                  6%
                                  <i className="fe fe-chevron-up"></i>
                                </div>
                                <div className="h1 m-0">43</div>
                                <div className="text-muted mb-4">New Tickets</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-red">
                                  -3%
                                  <i className="fe fe-chevron-down"></i>
                                </div>
                                <div className="h1 m-0">17</div>
                                <div className="text-muted mb-4">Closed Today</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-green">
                                  9%
                                  <i className="fe fe-chevron-up"></i>
                                </div>
                                <div className="h1 m-0">7</div>
                                <div className="text-muted mb-4">New Replies</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-green">
                                  3%
                                  <i className="fe fe-chevron-up"></i>
                                </div>
                                <div className="h1 m-0">27.3K</div>
                                <div className="text-muted mb-4">Followers</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-red">
                                  -2%
                                  <i className="fe fe-chevron-down"></i>
                                </div>
                                <div className="h1 m-0">$95</div>
                                <div className="text-muted mb-4">Daily Earnings</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-2">
                            <div className="card">
                              <div className="card-body p-3 text-center">
                                <div className="text-right text-red">
                                  -1%
                                  <i className="fe fe-chevron-down"></i>
                                </div>
                                <div className="h1 m-0">621</div>
                                <div className="text-muted mb-4">Products</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-header">
                                <h3 className="card-title">Development Activity</h3>
                              </div>
                              <div id="chart-development-activity"></div>
                              <div className="table-responsive">
                                <table className="table card-table table-striped table-vcenter">
                                  <thead>
                                    <tr>
                                      <th colspan="2">User</th>
                                      <th>Commit</th>
                                      <th>Date</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="w-1"><span className="avatar"></span></td>
                                      <td>Ronald Bradley</td>
                                      <td>Initial commit</td>
                                      <td className="text-nowrap">May 6, 2018</td>
                                      <td className="w-1"><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                      <td><span className="avatar">BM</span></td>
                                      <td>Russell Gibson</td>
                                      <td>Main structure</td>
                                      <td className="text-nowrap">April 22, 2018</td>
                                      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                      <td><span className="avatar"></span></td>
                                      <td>Beverly Armstrong</td>
                                      <td>Left sidebar adjustments</td>
                                      <td className="text-nowrap">April 15, 2018</td>
                                      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                      <td><span className="avatar"></span></td>
                                      <td>Bobby Knight</td>
                                      <td>Topbar dropdown style</td>
                                      <td className="text-nowrap">April 8, 2018</td>
                                      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                      <td><span className="avatar"></span></td>
                                      <td>Sharon Wells</td>
                                      <td>Fixes #625</td>
                                      <td className="text-nowrap">April 9, 2018</td>
                                      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-body text-center">
                                    <div className="h5">New feedback</div>
                                    <div className="display-4 font-weight-bold mb-4">62</div>
                                    <div className="progress progress-sm">
                                      <div className="progress-bar bg-red"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-body text-center">
                                    <div className="h5">Today profit</div>
                                    <div className="display-4 font-weight-bold mb-4">$652</div>
                                    <div className="progress progress-sm">
                                      <div className="progress-bar bg-green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="alert alert-primary">Are you in trouble? <a href="./docs/index.html" className="alert-link">Read our documentation</a> with code samples.</div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title">Chart title</h3>
                                  </div>
                                  <div className="card-body">
                                    <div id="chart-donut"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title">Chart title</h3>
                                  </div>
                                  <div className="card-body">
                                    <div id="chart-pie"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <a href="https://gumroad.com/l/tabler-email?utm_source=demo" className="card" target="_blank">
                                  <img src="/demo/card-demo.jpg" alt="" className="card-img"/>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="card p-3">
                              <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-blue mr-3">
                                  <i className="fe fe-dollar-sign"></i>
                                </span>
                                <div>
                                  <h4 className="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
                                  <small className="text-muted">12 waiting payments</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="card p-3">
                              <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-green mr-3">
                                  <i className="fe fe-shopping-cart"></i>
                                </span>
                                <div>
                                  <h4 className="m-0"><a href="javascript:void(0)">78 <small>Orders</small></a></h4>
                                  <small className="text-muted">32 shipped</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="card p-3">
                              <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-red mr-3">
                                  <i className="fe fe-users"></i>
                                </span>
                                <div>
                                  <h4 className="m-0"><a href="javascript:void(0)">1,352 <small>Members</small></a></h4>
                                  <small className="text-muted">163 registered today</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="card p-3">
                              <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-yellow mr-3">
                                  <i className="fe fe-message-square"></i>
                                </span>
                                <div>
                                  <h4 className="m-0"><a href="javascript:void(0)">132 <small>Comments</small></a></h4>
                                  <small className="text-muted">16 waiting</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-cards row-deck">
                          <div className="col-lg-6">
                            <div className="card card-aside">
                              <a href="#" className="card-aside-column"></a>
                              <div className="card-body d-flex flex-column">
                                <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                <div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                  <div className="avatar avatar-md mr-3"></div>
                                  <div>
                                    <a href="./profile.html" className="text-default">Rose Bradley</a>
                                    <small className="d-block text-muted">3 days ago</small>
                                  </div>
                                  <div className="ml-auto text-muted">
                                    <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card card-aside">
                              <a href="#" className="card-aside-column"></a>
                              <div className="card-body d-flex flex-column">
                                <h4><a href="#">Well, I didn't vote for you.</a></h4>
                                <div className="text-muted">Well, we did do the nose. Why? Shut up! Will you shut up?! You don't frighten us, English pig-dog...</div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                  <div className="avatar avatar-md mr-3"></div>
                                  <div>
                                    <a href="./profile.html" className="text-default">Peter Richards</a>
                                    <small className="d-block text-muted">3 days ago</small>
                                  </div>
                                  <div className="ml-auto text-muted">
                                    <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-cards row-deck">
                          <div className="col-12">
                            <div className="card">
                              <div className="table-responsive">
                                <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                                  <thead>
                                    <tr>
                                      <th className="text-center w-1"><i className="icon-people"></i></th>
                                      <th>User</th>
                                      <th>Usage</th>
                                      <th className="text-center">Payment</th>
                                      <th>Activity</th>
                                      <th className="text-center">Satisfaction</th>
                                      <th className="text-center"><i className="icon-settings"></i></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Elizabeth Martin</div>
                                        <div className="small text-muted">
                                          Registered: Mar 7, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>42%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-visa"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>4 minutes ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.42" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">42%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Michelle Schultz</div>
                                        <div className="small text-muted">
                                          Registered: Feb 19, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>0%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-red" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-googlewallet"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>5 minutes ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.0" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">0%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Crystal Austin</div>
                                        <div className="small text-muted">
                                          Registered: Mar 26, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>96%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-mastercard"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>a minute ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.96" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">96%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Douglas Ray</div>
                                        <div className="small text-muted">
                                          Registered: Jan 4, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>6%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-red" role="progressbar" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-shopify"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>a minute ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.06" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">6%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Teresa Reyes</div>
                                        <div className="small text-muted">
                                          Registered: Feb 21, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>36%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-red" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-ebay"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>2 minutes ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.36" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">36%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Emma Wade</div>
                                        <div className="small text-muted">
                                          Registered: Mar 8, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>7%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-red" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-paypal"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>a minute ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.07" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">7%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Carol Henderson</div>
                                        <div className="small text-muted">
                                          Registered: Feb 10, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>80%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-green" role="progressbar" 
                                         aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-visa"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>9 minutes ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.8" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">80%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-center">
                                        <div className="avatar d-block">
                                          <span className="avatar-status bg-green"></span>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Christopher Harvey</div>
                                        <div className="small text-muted">
                                          Registered: Jan 10, 2019
                                        </div>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left">
                                            <strong>83%</strong>
                                          </div>
                                          <div className="float-right">
                                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                          </div>
                                        </div>
                                        <div className="progress progress-xs">
                                          <div className="progress-bar bg-green" role="progressbar" 
                                         aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <i className="payment payment-googlewallet"></i>
                                      </td>
                                      <td>
                                        <div className="small text-muted">Last login</div>
                                        <div>8 minutes ago</div>
                                      </td>
                                      <td className="text-center">
                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.83" data-thickness="3" data-color="blue">
                                          <div className="chart-circle-value">83%</div>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="card">
                              <div className="card-header">
                                <h4 className="card-title">Browser Stats</h4>
                              </div>
                              <table className="table card-table">
                                <tr>
                                  <td width="1"><i className="fa fa-chrome text-muted"></i></td>
                                  <td>Google Chrome</td>
                                  <td className="text-right"><span className="text-muted">23%</span></td>
                                </tr>
                                <tr>
                                  <td><i className="fa fa-firefox text-muted"></i></td>
                                  <td>Mozila Firefox</td>
                                  <td className="text-right"><span className="text-muted">15%</span></td>
                                </tr>
                                <tr>
                                  <td><i className="fa fa-safari text-muted"></i></td>
                                  <td>Apple Safari</td>
                                  <td className="text-right"><span className="text-muted">7%</span></td>
                                </tr>
                                <tr>
                                  <td><i className="fa fa-internet-explorer text-muted"></i></td>
                                  <td>Internet Explorer</td>
                                  <td className="text-right"><span className="text-muted">9%</span></td>
                                </tr>
                                <tr>
                                  <td><i className="fa fa-opera text-muted"></i></td>
                                  <td>Opera mini</td>
                                  <td className="text-right"><span className="text-muted">23%</span></td>
                                </tr>
                                <tr>
                                  <td><i className="fa fa-edge text-muted"></i></td>
                                  <td>Microsoft edge</td>
                                  <td className="text-right"><span className="text-muted">9%</span></td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="card">
                              <div className="card-header">
                                <h2 className="card-title">Projects</h2>
                              </div>
                              <table className="table card-table">
                                <tr>
                                  <td>Admin Template</td>
                                  <td className="text-right">
                                    <span className="badge badge-default">65%</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Landing Page</td>
                                  <td className="text-right">
                                    <span className="badge badge-success">Finished</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Backend UI</td>
                                  <td className="text-right">
                                    <span className="badge badge-danger">Rejected</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Personal Blog</td>
                                  <td className="text-right">
                                    <span className="badge badge-default">40%</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>E-mail Templates</td>
                                  <td className="text-right">
                                    <span className="badge badge-default">13%</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Corporate Website</td>
                                  <td className="text-right">
                                    <span className="badge badge-warning">Pending</span>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="card">
                              <div className="card-header">
                                <h3 className="card-title">Members</h3>
                              </div>
                              <div className="card-body o-auto" >
                                <ul className="list-unstyled list-separated">
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block"></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Amanda Hunt</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">amanda_hunt@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block"></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Laura Weaver</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">lauraweaver@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block" ></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Margaret Berry</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">margaret88@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block"></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Nancy Herrera</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">nancy_83@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block"></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Edward Larson</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">edward90@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-separated-item">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <span className="avatar avatar-md d-block"></span>
                                      </div>
                                      <div className="col">
                                        <div>
                                          <a href="javascript:void(0)" className="text-inherit">Joan Hanson</a>
                                        </div>
                                        <small className="d-block item-except text-sm text-muted h-1x">joan.hanson@example.com</small>
                                      </div>
                                      <div className="col-auto">
                                        <div className="item-action dropdown">
                                          <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12">
                            <div className="row">
                              <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="card-value float-right text-blue">+5%</div>
                                    <h3 className="mb-1">423</h3>
                                    <div className="text-muted">Users online</div>
                                  </div>
                                  <div className="card-chart-bg">
                                    <div id="chart-bg-users-1"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="card-value float-right text-red">-3%</div>
                                    <h3 className="mb-1">423</h3>
                                    <div className="text-muted">Users online</div>
                                  </div>
                                  <div className="card-chart-bg">
                                    <div id="chart-bg-users-2"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="card-value float-right text-green">-3%</div>
                                    <h3 className="mb-1">423</h3>
                                    <div className="text-muted">Users online</div>
                                  </div>
                                  <div className="card-chart-bg">
                                    <div id="chart-bg-users-3"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="card-value float-right text-yellow">9%</div>
                                    <h3 className="mb-1">423</h3>
                                    <div className="text-muted">Users online</div>
                                  </div>
                                  <div className="card-chart-bg">
                                    <div id="chart-bg-users-4"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h3 className="card-title">Invoices</h3>
                              </div>
                              <div className="table-responsive">
                                <table className="table card-table table-vcenter text-nowrap datatable">
                                  <thead>
                                    <tr>
                                      <th className="w-1">No.</th>
                                      <th>Invoice Subject</th>
                                      <th>Client</th>
                                      <th>VAT No.</th>
                                      <th>Created</th>
                                      <th>Status</th>
                                      <th>Price</th>
                                      <th></th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><span className="text-muted">001401</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
                                      <td>
                                        Carlson Limited
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        15 Dec 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid
                                      </td>
                                      <td>$887</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001402</span></td>
                                      <td><a href="invoice.html" className="text-inherit">UX Wireframes</a></td>
                                      <td>
                                        Adobe
                                      </td>
                                      <td>
                                        87956421
                                      </td>
                                      <td>
                                        12 Apr 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-warning"></span> Pending
                                      </td>
                                      <td>$1200</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001403</span></td>
                                      <td><a href="invoice.html" className="text-inherit">New Dashboard</a></td>
                                      <td>
                                        Bluewolf
                                      </td>
                                      <td>
                                        87952621
                                      </td>
                                      <td>
                                        23 Oct 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-warning"></span> Pending
                                      </td>
                                      <td>$534</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001404</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Landing Page</a></td>
                                      <td>
                                        Salesforce
                                      </td>
                                      <td>
                                        87953421
                                      </td>
                                      <td>
                                        2 Sep 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-secondary"></span> Due in 2 Weeks
                                      </td>
                                      <td>$1500</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001405</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Marketing Templates</a></td>
                                      <td>
                                        Printic
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        29 Jan 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-danger"></span> Paid Today
                                      </td>
                                      <td>$648</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001406</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Sales Presentation</a></td>
                                      <td>
                                        Tabdaq
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        4 Feb 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-secondary"></span> Due in 3 Weeks
                                      </td>
                                      <td>$300</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001407</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Logo & Print</a></td>
                                      <td>
                                        Apple
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        22 Mar 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid Today
                                      </td>
                                      <td>$2500</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001408</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Icons</a></td>
                                      <td>
                                        Tookapic
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        13 May 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid Today
                                      </td>
                                      <td>$940</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001409</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
                                      <td>
                                        Carlson Limited
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        15 Dec 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid
                                      </td>
                                      <td>$887</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001410</span></td>
                                      <td><a href="invoice.html" className="text-inherit">UX Wireframes</a></td>
                                      <td>
                                        Adobe
                                      </td>
                                      <td>
                                        87956421
                                      </td>
                                      <td>
                                        12 Apr 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-warning"></span> Pending
                                      </td>
                                      <td>$1200</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001411</span></td>
                                      <td><a href="invoice.html" className="text-inherit">New Dashboard</a></td>
                                      <td>
                                        Bluewolf
                                      </td>
                                      <td>
                                        87952621
                                      </td>
                                      <td>
                                        23 Oct 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-warning"></span> Pending
                                      </td>
                                      <td>$534</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001412</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Landing Page</a></td>
                                      <td>
                                        Salesforce
                                      </td>
                                      <td>
                                        87953421
                                      </td>
                                      <td>
                                        2 Sep 2017
                                      </td>
                                      <td>
                                        <span className="status-icon bg-secondary"></span> Due in 2 Weeks
                                      </td>
                                      <td>$1500</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001413</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Marketing Templates</a></td>
                                      <td>
                                        Printic
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        29 Jan 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-danger"></span> Paid Today
                                      </td>
                                      <td>$648</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001414</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Sales Presentation</a></td>
                                      <td>
                                        Tabdaq
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        4 Feb 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-secondary"></span> Due in 3 Weeks
                                      </td>
                                      <td>$300</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001415</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Logo & Print</a></td>
                                      <td>
                                        Apple
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        22 Mar 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid Today
                                      </td>
                                      <td>$2500</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><span className="text-muted">001416</span></td>
                                      <td><a href="invoice.html" className="text-inherit">Icons</a></td>
                                      <td>
                                        Tookapic
                                      </td>
                                      <td>
                                        87956621
                                      </td>
                                      <td>
                                        13 May 2018
                                      </td>
                                      <td>
                                        <span className="status-icon bg-success"></span> Paid Today
                                      </td>
                                      <td>$940</td>
                                      <td className="text-right">
                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                        </div>
                                      </td>
                                      <td>
                                        <a className="icon" href="javascript:void(0)">
                                          <i className="fe fe-edit"></i>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="bottombar js-bottombar">
                        <a href="#" className="bottombar-close js-bottombar-close">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                        <div className="container position-relative d-flex align-items-center">
                          <a href="https://gumroad.com/l/tabler-email?utm_source=demo" className="bottombar-image">
                          </a>
                          <div className="d-lg-flex flex-fill align-items-center">
                            <div className="mr-2">
                              50 eye-catching templates tested in 90+ email clients. Compose your own, mobile optimized email message in less than 5 minutes!
                            </div>
                            <div className=" ml-auto mt-2 mt-lg-0">
                              <a href="https://gumroad.com/l/tabler-email?utm_source=demo" className="btn btn-sm btn-green text-nowrap" target="_blank">More info</a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
            
                </div>
            </div>
        )
    }
}