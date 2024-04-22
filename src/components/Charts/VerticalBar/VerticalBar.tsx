import React from 'react';
import { Row, Col } from 'antd';
import '../VerticalBar/VerticalBar.css';

const VerticalBar = () => {
  return (
    <Row gutter={32}>
      <Col span={12} className="d-flex justify-content-end align-items-center mt-3">
        <div className="bar">
          <div className="bar-content">
            <h3 style={{ color: '#ffffff' }}>753</h3>
          </div>
        </div>
      </Col>
      <Col span={12} className="d-flex flex-column justify-content-center align-items-center">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ color: '#4CAF50' }}>753</h1>
          <h6 style={{ marginTop: '15px' }}>/900</h6>
        </div>
        <h4 style={{ color: '#4CAF50', fontWeight: 'bold' }}>Good</h4>
        <p style={{ textAlign: 'center' }}>
          12% improvement from yesterday
        </p>
      </Col>
    </Row>
  );
};

export default VerticalBar;
