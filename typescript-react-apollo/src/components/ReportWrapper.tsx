import React from 'react';

import { ReportComponent } from '../types';
import ReportContent from './ReportContent';
import { Card } from 'antd';
interface ReportWrapperProps {
  searchValue: string
}

const ReportWrapper = ({ searchValue }: ReportWrapperProps) => (
  <ReportComponent variables={{ report_number: searchValue }}>
    {({ loading, error, data }) => {
      return (
        <Card loading={loading}>
          {error ? <div>Invalid Report Number</div> : <ReportContent reportQueryResponse={data} reportQueryError={error} />}
        </Card>
      )
    }
    }
  </ReportComponent>
);

export default ReportWrapper