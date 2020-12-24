import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

const Template = styled.div``;

const index = ({ onChangeInput, users, loadingUsers }) => {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [searchTxt, setSearchTxt] = useState('');

  const nextPage = useCallback(() => {
    setOffset((pre) => pre + limit);
  });
  const prevPage = useCallback(() => {
    setOffset((pre) => pre - limit);
  });
  const changeLimit = useCallback((num) => {
    setLimit(num);
  });
  return (
    <Template>
      {loadingUsers && '로딩 중'}
      {!loadingUsers && users && (
        <div>
          <Header onChangeInput={onChangeInput} />
          <Table list={users.slice(offset, offset + limit)} />
          <Footer />
        </div>
      )}
    </Template>
  );
};

export default index;
