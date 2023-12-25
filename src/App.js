import logo from './logo.svg';
import './App.css';

import {
  Actionbuttonlogoutdefault, Actionbuttonsettingdefault, Actionbuttonnewdefault,
  Sitetitle, Titlebar, Notelist, Noteitemdefault, Notecanvas, Noteview, Toolbartitle, ToolbarBody, Currentink, Flashinginks 
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sitetitle overrides={{
          Sitetitle: {
            justifyContent: 'space-between',
          },
          apptitle: {
            justifyContent: 'flex-start',
            flex: 1,
          }
        }}/>
        <div class='ActionButtonWrapper' style={{display: 'block'}}>
          <Actionbuttonlogoutdefault />
          <Actionbuttonsettingdefault />
          <Actionbuttonnewdefault />
        </div>
        <Noteitemdefault />
        <Notelist />
        <Titlebar overrides={{
          title: {
            children: 'Un Foglio Nuovo',
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}}
        />
        <Noteview />
        <Toolbartitle />
        <ToolbarBody />
        <Currentink />
        <Flashinginks />
      </header>
    </div>
  );
}

export default App;
