import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import DataContainer from './components/DataContainer';
import {AppWrap, AppContainer} from './components/Styled';

function App() {
  return (
    <AppWrap>
      <BrowserRouter>
        <AppContainer>
            <Navigation/>
            <DataContainer/>
        </AppContainer>
      </BrowserRouter>
    </AppWrap>
  );
}
export default App;