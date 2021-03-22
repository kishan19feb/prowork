import React from "react"
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import DataContainer from './components/DataContainer';
import {AppWrap, AppContainer} from './components/Styled';
import {positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <AppWrap>
        <BrowserRouter>
          <AppContainer>
              <Navigation/>
              <DataContainer/>
          </AppContainer>
        </BrowserRouter>
      </AppWrap>
    </Provider>
  );
}
export default App;