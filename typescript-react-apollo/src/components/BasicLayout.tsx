import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderSearch from './HeaderSearch';
import ReportWrapper from './ReportWrapper';

const { Header, Content, Footer } = Layout;

type BasicLayoutProps = {
  setSearchValue: (searchValue: string) => void,
  searchValue: string
}

const BasicLayout = ({ setSearchValue, searchValue }: BasicLayoutProps) => {
  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Header>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <div style={{ display: 'flex', alignItems: 'middle' }}>
              <HeaderSearch setSearchValue={setSearchValue} />
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '36px 50px 0px', flex: '1 0 auto' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {searchValue ? <ReportWrapper searchValue={searchValue} /> : <div />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Gemological Institute of America ©2019</Footer>
    </Layout>
  )
}

export default BasicLayout