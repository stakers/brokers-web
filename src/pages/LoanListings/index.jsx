/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Row, Col } from 'reactstrap';
import Slider from 'rc-slider';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'rc-slider/assets/index.css';
import styles from './styles.scss';
import SectionTitle from '../../components/SectionTitle';
import FilterArea from '../../containers/FilterArea';
import { data, columns } from '../../constants/tableData';
import './table.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const LoanListings = () => {
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
                    <span styleName="filter-sliders-title">Interest rate</span>
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
                        { height: '6px', backgroundColor: 'rgb(63, 133, 244)' }
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
                        { height: '6px', backgroundColor: 'rgb(63, 133, 244)' }
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
};

export default CssModules(LoanListings, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
