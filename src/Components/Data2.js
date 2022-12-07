import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const App = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={12}>
      <Col span={2}>
        <Card>
          <Statistic
            title="Active"
            value={11}
        
          />
        </Card>

        
      </Col>
      <Col span={2}>
        <Card>
          <Statistic
            title="Idle"
            value={9}
          />
        </Card>
      </Col>
      <Col span={2}>
        <Card>
          <Statistic
            title="Idle"
            value={9}
          />
        </Card>
      </Col>
    </Row>
  </div>
);
export default App;