import React from 'react';
import { Row, Col } from 'antd';

import './styles.css';

export default props => {
  return (
    <div className="page-header-index-pageHeader">
      <div>
        <Row type="flex" align="middle">
          <Col span={12}>
            <div className="page-header-index-content-left">
              {/* {props.headerIcon} */}
              <div className="page-header-index-content-left-detail">
                <h3>{props.title}</h3>
                {props.subtitle ? <p>{props.subtitle}</p> : null}
              </div>
            </div>
          </Col>
          <Col span={12}>{props.headerActions}</Col>
        </Row>
      </div>
    </div>
  );
};
