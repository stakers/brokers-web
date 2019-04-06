/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Row, Col } from 'reactstrap';
import Slider from 'rc-slider';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'rc-slider/assets/index.css';
import Modal from 'react-modal';

import styles from './styles.scss';
import SectionTitle from '../../components/SectionTitle';
import FilterArea from '../../containers/FilterArea';
import { data } from '../../constants/tableData';
import './table.css';
import { FaInfoCircle } from 'react-icons/fa';
import InvestButton from '../../components/InvestButton';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1200px',
    minWidth: '0',
    maxHeight: '90%',
    overflowY: 'auto',
    backgroundColor: '#F3F4F8'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.54)',
    zIndex: '1112'
  }
};

class LoanListings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal = props => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const columns = [
      {
        Header: 'ID',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'id',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            },
            Cell: props => (
              <a href="#" onClick={() => this.openModal(props)}>
                {props.value}
              </a>
            )
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Issue Date',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'issue_date',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Loan Type',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'loan_type',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'left'
            },
            minWidth: 55
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Loan Originator',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'loan_originator',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            },
            Cell: props => <img src={props.value} alt="loan_originator" />
          }
        ],

        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Loan Amount/Balance',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'loan_amount',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Borrower APR',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'borrower_apr',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Interest Rate',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'interest_rate',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Term',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'term',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],
        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: 'Available for Investment',
        columns: [
          {
            Header: <FaInfoCircle color="#d1d3d4" />,
            accessor: 'available_for_investment',
            style: {
              fontSize: '12px',
              whiteSpace: 'normal',
              textAlign: 'center'
            }
          }
        ],

        headerStyle: { whiteSpace: 'normal', border: 'none' }
      },
      {
        Header: '',
        accessor: 'id',
        Cell: props => <InvestButton size="btn-lg">Invest</InvestButton>
      }
    ];

    return (
      <div styleName="content">
        <SectionTitle size="1">Primary Market</SectionTitle>
        <div styleName="filter-wrapper">
          <Row>
            <Col md={{ size: 2 }}>
              <FilterArea />
            </Col>
            <Col md={{ size: 10 }}>
              <div>
                <Row>
                  <Col>
                    <div styleName="filter-sliders-wrapper">
                      <span styleName="filter-sliders-title">
                        Interest rate
                      </span>
                      <Range
                        min={5}
                        max={20}
                        defaultValue={[5, 20]}
                        tipFormatter={value => `${value}%`}
                        onChange={value => console.log(value)}
                        allowCross={false}
                        tipProps={{
                          placement: 'bottom'
                        }}
                        trackStyle={[
                          {
                            height: '6px',
                            backgroundColor: 'rgb(63, 133, 244)'
                          }
                        ]}
                        handleStyle={[
                          {
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'rgb(237, 241, 241)',
                            border: '1px solid rgb(181, 194, 194)'
                          }
                        ]}
                      />
                      <div styleName="risk">
                        <span>Lower Risk</span>
                        <span>Higher Risk</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div styleName="filter-sliders-wrapper">
                      <span styleName="filter-sliders-title">Term</span>
                      <Range
                        min={0}
                        max={72}
                        defaultValue={[0, 72]}
                        tipFormatter={value => `${value}m`}
                        onChange={value => console.log(value)}
                        allowCross={false}
                        tipProps={{
                          placement: 'bottom'
                        }}
                        trackStyle={[
                          {
                            height: '6px',
                            backgroundColor: 'rgb(63, 133, 244)'
                          }
                        ]}
                        handleStyle={[
                          {
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'rgb(237, 241, 241)',
                            border: '1px solid rgb(181, 194, 194)'
                          }
                        ]}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div styleName="loan-listings">
                <div styleName="result-status">
                  <span>Showing 1 - 20 of 201987 selected entries</span>
                </div>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div>
                    <div styleName="modal-content-header">
                      <span styleName="modal-content-title">
                        Borrower&apos;s Profile
                      </span>
                      <span onClick={this.closeModal} styleName="close-modal">
                        &times;
                      </span>
                    </div>
                    <div styleName="modal-body">
                      <div styleName="modal-body-col-right">
                        <div styleName="score-cards-wrapper">
                          <div styleName="score-card credit-score">
                            <span>8.0</span>
                            <span>Credit Score</span>
                          </div>
                          <div styleName="score-card personality-score">
                            <span>256</span>
                            <span>Personality Score</span>
                          </div>
                          <div styleName="score-card">
                            <button>Accept</button>
                          </div>
                        </div>
                        <div styleName="section">
                          <div styleName="section-header">
                            <span>Credit Analysis</span>
                            <span>Car Loan</span>
                          </div>
                          <div>
                            <Row>
                              <Col>
                                <div styleName="info-card">
                                  <div styleName="info-card-header">
                                    Oustanding balance
                                  </div>
                                  <table styleName="table-no-header">
                                    <tbody>
                                      <tr>
                                        <td colSpan="1">Amount Outstanding</td>
                                        <td>N175,000</td>
                                      </tr>
                                      <tr>
                                        <td>Amount Due</td>
                                        <td>N12,500</td>
                                      </tr>
                                      <tr>
                                        <td>Next due date</td>
                                        <td>24th April, 2019</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                              <Col>
                                <div styleName="info-card">
                                  <div styleName="info-card-header">
                                    Auto Payments
                                  </div>
                                  <table styleName="table-no-header">
                                    <tbody>
                                      <tr>
                                        <td colSpan="1">Auto-payment date</td>
                                        <td>24th/Month</td>
                                      </tr>
                                      <tr>
                                        <td>Auto-payment method</td>
                                        <td>Debit card</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div styleName="section">
                          <div styleName="section-header">
                            <span>Payment history</span>
                          </div>
                          <div>
                            <Row>
                              <Col>
                                <div styleName="info-card">
                                  <div styleName="info-card-header">
                                    Oustanding balance
                                  </div>
                                  <table styleName="table-with-header">
                                    <thead>
                                      <tr>
                                        <td>Date</td>
                                        <td>Amount</td>
                                        <td>Payment Method</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>24/1/18</td>
                                        <td>N15,000</td>
                                        <td>Debit Card</td>
                                      </tr>
                                      <tr>
                                        <td>24/1/18</td>
                                        <td>N15,000</td>
                                        <td>Debit Card</td>
                                      </tr>
                                      <tr>
                                        <td>24/1/18</td>
                                        <td>N15,000</td>
                                        <td>Debit Card</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div styleName="section">
                          <div styleName="section-header">
                            <span>Income Analysis</span>
                          </div>
                          <div>
                            <Row>
                              <Col>
                                <div styleName="info-card">
                                  <div styleName="info-card-header">
                                    Oustanding balance
                                  </div>
                                  <table styleName="table-no-header">
                                    <tbody>
                                      <tr>
                                        <td colSpan="1">Amount Outstanding</td>
                                        <td>N175,000</td>
                                      </tr>
                                      <tr>
                                        <td>Amount Due</td>
                                        <td>N12,500</td>
                                      </tr>
                                      <tr>
                                        <td>Next due date</td>
                                        <td>24th April, 2019</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                              <Col>
                                <div styleName="info-card">
                                  <div styleName="info-card-header">
                                    Auto Payments
                                  </div>
                                  <table styleName="table-no-header">
                                    <tbody>
                                      <tr>
                                        <td colSpan="1">Auto-payment date</td>
                                        <td>24th/Month</td>
                                      </tr>
                                      <tr>
                                        <td>Auto-payment method</td>
                                        <td>Debit card</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div>Spending Patterns</div>
                      </div>
                      <div styleName="modal-body-col-left">
                        Personality Score
                      </div>
                    </div>
                  </div>
                </Modal>
                <ReactTable
                  data={data}
                  columns={columns}
                  minRows={1}
                  resizable={false}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CssModules(LoanListings, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
