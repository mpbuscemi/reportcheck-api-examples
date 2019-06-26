import React from 'react';
import get from 'lodash/get'
import startCase from 'lodash/startCase'
import isPlainObject from 'lodash/isPlainObject'

import { ReportQuery } from '../types';
import { Descriptions } from 'antd';
import { ApolloError } from 'apollo-client';
interface ReportContentProps {
  reportQueryResponse?: ReportQuery,
  reportQueryError?: ApolloError
}

type ResultItem = {
  keyName: string,
  resultValue: string | number
}

const renderResultItem = ({ keyName, resultValue }: ResultItem) => <Descriptions.Item label={`${startCase(keyName)}`}>{resultValue}</Descriptions.Item>

const ReportContent = ({ reportQueryResponse }: ReportContentProps) => {
  const reportData = get(reportQueryResponse, 'getReport');
  if (!reportData) return <div>No Report Found</div>
  const {
    report_date: reportDate,
    report_number: reportNumber,
    report_type: reportType
  } = reportData;
  const resultItems = get(reportData, 'results', {})
  const listItems = Object.keys(resultItems!).map(keyName => {
    console.log(keyName)
    const resultValue = get(resultItems, keyName, 'N/A')
    if (isPlainObject(resultValue) || keyName === '__typename') return true;
    return (
      renderResultItem({ keyName, resultValue })
    )
  })
  return (
    <Descriptions title={`Report #${reportNumber}`} size="small" bordered>
      <Descriptions.Item label="Date" span={3}>{reportDate}</Descriptions.Item>
      <Descriptions.Item label="Type" span={3}>{reportType}</Descriptions.Item>
      <Descriptions.Item label="Report Number">{reportNumber}</Descriptions.Item>
      {listItems}
    </Descriptions>
  )
};

export default ReportContent