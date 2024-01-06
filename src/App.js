import './App.css';

import {
  Actionbuttonlogoutdefault, Actionbuttonsettingdefault, Actionbuttonnewdefault,
  Sitetitle, Titlebar, Notelist, Noteitemdefault, Noteview, Toolbartitle, ToolbarBody, Currentink, Flashinginks 
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        position: 'relative',
      }}>
        <Sitetitle overrides={{
          Sitetitle: {
            top: '0px',
            alignSelf: 'flex-start',
            position: 'absolute',
          },
          apptitle: {
            top: '-16%',
          }
        }}/>
        <div className='ActionButtonWrapper' style={{
          top: '80px',
          left: '19px',
          display: 'flex',
          alignSelf: 'flex-start',
          position: 'absolute',
        }}>
          <Actionbuttonlogoutdefault overrides={{
            logout: {
              top: '4%',
            }
          }}
           />
          <Actionbuttonsettingdefault overrides={{
            setting: {
              top: '4%',
            }
          }}
           />
          <Actionbuttonnewdefault overrides={{
            new: {
              top: '4%',
            }
          }} />
        </div>
        <div className='NoteListWrapper' style={{
          position: 'absolute',
          top: '150px',
          left: '0px',
        }}>
          <div className='NoteItemWrapper' style={{
            position: 'relative'
          }}>
            <Notelist overrides={{
              Notelist: {
                top: '0px',
                left: '0px',
                position: 'relative',
                height: '872px',
              }
            }}/>
            <Noteitemdefault overrides={{
              Noteitemdefault: {
                top: '-872px',
                left: '0px',
                position: 'relative',
              },
              "last updated": {
                top: '40%',
              },
              title: {
                top: '0%',
              }
            }} />
          </div>
        </div>
      </header>
      <div className='NoteViewerWrapper' style={{
        position: 'absolute',
        left: '401px',
        top: '0px',
        justifyContent: 'flex-start',
      }}>
          <Titlebar overrides={{
            Titlebar: {
              position: 'absolute',
              top: '0px',
              left: '0px',
            },
            title: {
              children: 'Happy New Year',
              top: '4%',
            }
          }}/>
          <Noteview overrides={{
            Noteview: {
              top: '80px',
              position: 'absolute',
            }
          }} />
      </div>
      <div className='ToolbarWrapper' style={{
        position: 'absolute',
        left: '1200px',
        top: '0px',
      }}>
        <Toolbartitle overrides={{
          Toolbar: {
            top: '0px',
          }
        }} />
        <ToolbarBody />
        <Currentink overrides={{
          Currentink: {
            top: '-944px'
          },
          "option-field/ink": {
            overrides: {
              "color-input": {
                top: '4px',
              },
              label: {
                top: '-32%',
              },
            },
          },
          "option-field/size": {
            overrides: {
              "color-input": {
                top: '4px',
              },
              label: {
                top: '-32%',
              },
            },
          },
          "option-field/mode/text": {
            overrides: {
              "color-input": {
                top: '4px',
              },
              label: {
                top: '-32%',
              },
            },
          },
          "menu-body" : {
            overrides: {
              title: {
                top: '-4%',
                children: 'Current Ink',
            }},
          },
        }}/>
        <Flashinginks overrides={{
          Flashinginks: {
            top: '-940px',
          },
          "menu-body" : {
            overrides: {
              title: {
                top: '-4%',
            }},
          },
        }}/>
      </div>
    </div>
  );
}

export default App;
