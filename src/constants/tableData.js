/* eslint-disable react/display-name */
/* eslint-disable  import/no-unresolved */
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import InvestButton from '../components/InvestButton';

export const data = [
  {
    id: '7589427-02',
    issue_date: '22.11.2018',
    loan_type: 'Business Loan',
    loan_originator:
      'https://s3.eu-central-1.amazonaws.com/mintos-prod-public-files/E11384D8-3EA8-FB17-7D6D-5094655641C5.png',
    loan_amount: '₽ 480 000 / ₽ 480 000',
    borrower_apr: '-',
    interest_rate: '16.0%',
    term: '10 d. (0)',
    available_for_investment: '₽ 396 303.95'
  },
  {
    id: '7589427-02',
    issue_date: '22.11.2018',
    loan_type: 'Business Loan',
    loan_originator:
      'https://s3.eu-central-1.amazonaws.com/mintos-prod-public-files/E11384D8-3EA8-FB17-7D6D-5094655641C5.png',
    loan_amount: '₽ 480 000 / ₽ 480 000',
    borrower_apr: '-',
    interest_rate: '16.0%',
    term: '10 d. (0)',
    available_for_investment: '₽ 396 303.95'
  }
];

export const columns = [
  {
    Header: 'ID',
    columns: [
      {
        Header: <FaInfoCircle color="#d1d3d4" />,
        accessor: 'id',
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' },
        Cell: props => <a href="#">{props.value}</a>
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'left' },
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' },
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
        style: { fontSize: '12px', whiteSpace: 'normal', textAlign: 'center' }
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
