import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "./patientModuleStyle.scss";

import { patientMoudles } from "../../utils/container";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PatientModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      startDate: "",
      firstName: "",
      lastName: ""
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) this.setState({ activeTab: tab });
  };

  handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    console.log("@@@@@ first", this.state.firstName);
    console.log("@@@@@ last", this.state.lastName);
    const { activeTab, startDate } = this.state;
    return (
      <div className="row container-fluid justify-content-center">
        <div className="col-md-8" style={{ marginTop: "50px" }}>
          <h1 className="mb-4">Request An Appointment</h1>
          <div className="headerLine "></div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                <span className={activeTab === "1" ? "patientActiveStyle" : ""}>
                  1. Personal Information
                  {activeTab === "1" ? (
                    <div className="progress_step"></div>
                  ) : null}
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <span className={activeTab === "2" ? "patientActiveStyle" : ""}>
                  2. Contact Info
                  {activeTab === "2" ? (
                    <div className="progress_step"></div>
                  ) : null}
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                <span className={activeTab === "3" ? "patientActiveStyle" : ""}>
                  3. Address
                  {activeTab === "3" ? (
                    <div className="progress_step"></div>
                  ) : null}
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                <span className={activeTab === "4" ? "patientActiveStyle" : ""}>
                  4. Attendent/Next of Kin
                  {activeTab === "4" ? (
                    <div className="progress_step"></div>
                  ) : null}
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "5" })}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                <span className={activeTab === "5" ? "patientActiveStyle" : ""}>
                  5. Patient Type
                  {activeTab === "5" ? (
                    <div className="progress_step"></div>
                  ) : null}
                </span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="mt-4">
                {patientMoudles.patientTab1.map((item, index) => (
                  <>
                    <Col sm={item.value === "Title" ? "12" : "6"}>
                      {item.type === "checkBox" ? (
                        <div
                          style={{
                            maxWidth: item.value === "Title" ? "48%" : "100%"
                          }}
                        >
                          <Select
                            options={item.options ? item.options : null}
                            className="mb-3"
                            placeholder={
                              item.type === "checkBox" ? item.placeholder : null
                            }
                          />
                        </div>
                      ) : index === 3 ? (
                        <>
                          <div className="mb-3 input-group ">
                            <div className="customDatePickerWidth">
                              <DatePicker
                                selected={startDate ? startDate : null}
                                onChange={this.handleChange}
                                className="datepickerInput"
                                placeholderText="Select date of birth"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="mb-3 input-group">
                          <input
                            type="email"
                            placeholder={item.value}
                            required=""
                            className="form-control"
                            autocomplete="off"
                            onChange={(e) =>
                              this.setState({ [item.name]: e.target.value })
                            }
                          ></input>
                        </div>
                      )}
                    </Col>
                  </>
                ))}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="mt-4">
                {patientMoudles.patientTab2.map((item, index) => (
                  <>
                    <Col sm={item.value === "Title" ? "12" : "6"}>
                      {item.type === "checkBox" ? (
                        <div
                          style={{
                            maxWidth: item.value === "Title" ? "48%" : "100%"
                          }}
                        >
                          <Select
                            options={item.options ? item.options : null}
                            className="mb-3"
                            placeholder={
                              item.type === "checkBox" ? item.placeholder : null
                            }
                          />
                        </div>
                      ) : (
                        <div className="mb-3 input-group">
                          <input
                            type="email"
                            placeholder={item.value}
                            required=""
                            className="form-control"
                            autocomplete="off"
                          ></input>
                        </div>
                      )}
                    </Col>
                  </>
                ))}
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default PatientModule;
// import React, { Component } from "react";

// import Form from "react-jsonschema-form";
// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: { type: "string", title: "Title" },
//     done: { type: "boolean", title: "Done?", default: false }
//   }
// };

// class FormElement extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: ""
//     };
//   }
//   handleFormData = (e) => {
//     let value = e.formData;
//     this.setState({
//       firstName: value
//     });
//   };
//   render() {
//     console.log(this.state.firstName);
//     return (
//       <div>
//         <Form
//           schema={schema}
//           onChange={(formData) => this.handleFormData(formData)}
//         />
//       </div>
//     );
//   }
// }
// export default FormElement;
