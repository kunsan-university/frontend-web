import { ThemeProvider } from 'styled-components';
import BoardContainer from './containers/BoardContainer';
import Panel from './component/lib/Panel';

function App() {
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
      </ThemeProvider>
    </>
  );
}

export default App;
