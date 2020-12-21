import { useCallback, useEffect, useState } from 'react';
import List from './List';
import Head from './Head';
import Foot from './Foot';

const dumy = Array(30)
  .fill()
  .map((e, i) => ({
    id: i + 1,
    name: Math.random().toString(36).substr(2, 11),
    phone: '010-0000-0000',
    address: '군산대학교',
    position: '학생',
  }));

const index = () => {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setList(dumy);
  }, []);

  const nextPage = useCallback((e) => {
    setOffset((pre) => pre + 10);
  });
  const prevPage = useCallback((e) => {
    setOffset((pre) => pre - 10);
  });
  return (
    <>
      <table>
        <Head title={list[0] && Object.keys(list[0])} />
        <List list={list.slice(offset, offset + 10)} />
      </table>
      <Foot prevPage={prevPage} nextPage={nextPage} />
    </>
  );
};

export default index;
