import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCarSide, faCircleExclamation, faTriangleExclamation, faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import { Circle } from 'rc-progress';


// import Paper from "@material-ui/core/Paper";
// import { Chart,PieSeries,Title} from "@devexpress/dx-react-chart-material-ui";

// import { PieChart } from '@mui/x-charts/PieChart';

function Dashboard() {

  //   const data = [
  //     { argument: "Monday", value: 10 },
  //     { argument: "Tuesday", value: 40 },
  //     { argument: "Wednesday", value: 10 },
  //     { argument: "Thursday", value: 20 },
  //     { argument: "Friday", value: 20 },
  // ];
  return (
    <>
      <div className='container-fluid w-100 dashboard-container'>
        {/* section1 */}
        <div className="row w-100 ">
          <div className="col-md-2"></div>
          <div className="col-md-10">

            {/* Dashboard Content */}
            <div className='d-flex mt-5'>
              <div className='vehicle-data boxshadow bg-light mx-1'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='ms-3' />
                <div className='d-flex align-items-center justify-content-center flex-column vehicle-data-text' >
                  <p className='fw-bold fs-4 mt-3'>5</p>
                  <h6>Vehicles with Errors</h6></div>
              </div>

              <div className='vehicle-data  bg-light  mx-1'>
                <FontAwesomeIcon icon={faCircleExclamation} className='ms-3' />
                <div className='d-flex align-items-center justify-content-center flex-column vehicle-data-text '>
                  <p className='fw-bold fs-4 mt-3'>14</p>
                  <h6>Vehicles with Warnings</h6></div>
              </div>

              <div className='vehicle-data  bg-light mx-1'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='ms-3 ' />
                <div className='d-flex align-items-center justify-content-center flex-column vehicle-data-text '> <p className='fw-bold fs-4 mt-3'>4</p>
                  <h6>Deviation from a route</h6></div>
              </div>

              <div className='vehicle-data  bg-light mx-1 '>
                <FontAwesomeIcon icon={faCircleExclamation} className='ms-3' />
                <div className='d-flex align-items-center justify-content-center flex-column vehicle-data-text '> <p className='fw-bold fs-4 mt-3'>34</p>
                  <h6>Being Late</h6></div>
              </div>
            </div>


            {/* Section 2 */}
            <div className="row mt-2 w-100">
              <div className="col-md-4">
                <div className='bg-light total-vahicle-container p-2'>
                <h6 className='ms-2'>Total Vehicles</h6>
                <div className='bg-light d-flex m-3'>

                  <div className='w-50 chart p-2'>
                    {/* <Paper>
            <Chart data={data}>
                <PieSeries valueField="value" argumentField="argument" />
                <Title text="Studies per day" />
            </Chart>
        </Paper> */}

                    {/* <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    /> */}
                    <p>kljljhoh</p>
                  </div>
                  <div className='w-50 mt-3'>
                    <div className='text-success content-border-en-route'><h6>En Route</h6>
                      <h6 className='text-dark'>134</h6></div>

                    <div className='content-border-avilable' ><h6>Avilable</h6>
                      <h6 className='text-dark'>45</h6></div>

                    <div className='content-border-out-of-service text-warning' ><h6>Out of Service</h6>
                      <h6 className='text-dark'>134</h6></div>

                  </div>

                </div>
                </div>

              </div>
              {/* vehicle condition section */}
              <div className="col-md-5">
                <div className='bg-light p-2 vehicle-condition-container'>
                  <h6>Vehicle Condition</h6>
                  <div className='d-flex'>

                    <div className='vehicle-condition-deails-box mx-2'>
                      <div className='vehicle-condition-deails-box2 '>
                        <div className='roundprogress m-auto' >
                          <h6 className='text-success'>Good</h6>
                          <Circle percent={58} strokeWidth={6} strokeColor="green" />
                        </div>
                      </div>

                      <div className='align-items-center d-flex justify-content-center flex-column'>
                        <h6>52</h6>
                        <h6>Vehicles</h6>
                      </div>

                    </div>

                    <div className='vehicle-condition-deails-box mx-2'>
                      <div className='vehicle-condition-deails-box2 '>
                        <div className='roundprogress m-auto' >
                          <h6 className='text-warning'>Satisfactory</h6>
                          <Circle percent={27} strokeWidth={6} strokeColor="orange" />
                        </div>
                      </div>
                      <div className='align-items-center d-flex justify-content-center flex-column'>
                        <h6>14</h6>
                        <h6>Vehicles</h6>
                      </div>
                    </div>

                    <div className='vehicle-condition-deails-box mx-2'>
                      <div className='vehicle-condition-deails-box2 '>
                        <div className='roundprogress m-auto' >
                          <h6 className='text-danger'>Critical</h6>
                          <Circle percent={15} strokeWidth={6} strokeColor="red" />
                        </div>
                      </div>
                      <div className='align-items-center d-flex justify-content-center flex-column'>
                        <h6>7</h6>
                        <h6>Vehicles</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="row">
                  <div className="col-md-12 bg-light mt-2 d-flex justify-content-between">
                    <h6>Traffic Jam</h6>
                    <div className='bg-danger car-icon '><FontAwesomeIcon icon={faCarSide} /></div>
                  </div>
                  <div className=' w-25 bg-light'>
                    <div><h6>52</h6>
                      <h6>Vehicles</h6></div>
                  </div>
                  <div className=' w-75 bg-light' >
                    <div className='d-flex justify-content-between align-items-center traffic-jam-right-box'>
                      <div className='d-flex'><FontAwesomeIcon icon={faVanShuttle} />
                        <h6>5</h6></div>
                      <div className='d-flex'>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <h6 className='text-danger'>3h</h6>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center traffic-jam-right-box'>
                      <div className='d-flex'><FontAwesomeIcon icon={faVanShuttle} />
                        <h6>8</h6></div>
                      <div className='d-flex'>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <h6 className='text-danger'>1h</h6>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center traffic-jam-right-box'>
                      <div className='d-flex'><FontAwesomeIcon icon={faVanShuttle} />
                        <h6>5</h6></div>
                      <div className='d-flex'>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <h6>3h</h6>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 bg-light mt-2 d-flex justify-content-between">
                    <h6>Accidents</h6>
                    <div className='bg-danger car-icon '><FontAwesomeIcon icon={faCarSide} /></div>
                  </div>
                  <div className='w-25 bg-light'>
                    <div><h6>52</h6>
                      <h6>Vehicles</h6></div>
                  </div>
                  <div className='w-75 bg-light'>
                    <div className='d-flex justify-content-between align-items-center traffic-jam-right-box'>
                      <div className='d-flex'><FontAwesomeIcon icon={faVanShuttle} />
                        <h6 className='text-danger'>2</h6></div>
                      <div className='d-flex'>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <h6 className='text-danger' style={{ fontSize: '5px' }}>Evaquation Required</h6>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center traffic-jam-right-box'>
                      <div className='d-flex'><FontAwesomeIcon icon={faVanShuttle} />
                        <h6>5</h6></div>
                      <div className='d-flex'>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <h6>3h</h6>
                      </div>
                    </div>



                  </div>


                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="row mt-3">
              <div className="col-md-6 bg-dark">
                <h6>Warnings</h6>
              </div>
              <div className="col-md-3  bg-warning">
                <h6>Trips</h6>
              </div>
              <div className="col-md-3 bg-primary">
                <h6>Trips Performance</h6>
              </div>
            </div>
            {/* Section 4 */}
            <div className="row">
              <div className="col-md-3 bg-danger">
                <h6>Out of Service</h6>
              </div>
              <div className="col-md-3 bg-warning">
                <h6>Safe Driving Meter</h6>
              </div>
              <div className="col-md-6 bg-dark" ></div>
            </div>

          </div>
        </div>



      </div>
    </>
  )
}

export default Dashboard