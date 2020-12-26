import { ThemeProvider } from 'styled-components';
import BoardContainer from './containers/BoardContainer';
import Panel from './component/lib/Panel';
import Dialog from './component/lib/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { hideDialog, showDialog2, hideDialog2 } from './modules/dialog';

function App() {
  const visible = useSelector((state) => state.dialog.visible);
  const visible2 = useSelector((state) => state.dialog.visible2);
  const dispatch = useDispatch();
  return (
    <>
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595',
          },
        }}
      >
        <Panel>
          <BoardContainer />
        </Panel>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={visible}
          onCancel={() => dispatch(hideDialog())}
          onConfirm={() => dispatch(hideDialog())}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
        <Dialog
          title="게시판"
          confirmText="등록"
          cancelText="취소"
          width={'1000px'}
          visible={visible2}
          onCancel={() => dispatch(hideDialog2())}
          onConfirm={() => dispatch(hideDialog2())}
        >
          등록 모달 컨텐츠
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default App;
