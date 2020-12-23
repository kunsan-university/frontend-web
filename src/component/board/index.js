import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

const Template = styled.div``;

///////////////////////////////////////////////////////
const dumy = Array(30)
  .fill()
  .map((e, i) => ({
    id: i + 1,
    name: Math.random().toString(36).substr(2, 11),
    phone: '010-0000-0000',
    address: '군산대학교',
    position: '학생',
  }));
///////////////////////////////////////////////////////

const index = () => {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [searchTxt, setSearchTxt] = useState('');

  ///////////////////////////////////////////////////////
  useEffect(() => {
    setList(dumy);
  }, []);
  ///////////////////////////////////////////////////////

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
      <Header />
      <Table list={list.slice(offset, offset + limit)} />
      <Footer />
    </Template>
  );
};

export default index;
