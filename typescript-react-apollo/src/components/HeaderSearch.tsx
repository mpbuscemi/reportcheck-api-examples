import * as React from 'react';
import { Input } from 'antd';
import { ApolloConsumer } from 'react-apollo';

const { Search } = Input;

type HeaderSearchProps = {
  setSearchValue: (searchValue: string) => void
}

const HeaderSearch = ({ setSearchValue }: HeaderSearchProps) => {
  return (
    <ApolloConsumer>
      {client => (
        <Search
          placeholder="Search by report number..."
          enterButton="Search"
          size="large"
          onSearch={value => setSearchValue(value)}
          defaultValue="1263580581"
        />
      )}
    </ApolloConsumer>
  );
}

export default HeaderSearch;