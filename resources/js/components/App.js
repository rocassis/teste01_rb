import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
function App() {
    return (
        <div>
            <Router/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}


// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     return (
//         <div>
//             Hello
//         </div>
//     );
// }

// export default App;

// if (document.getElementById('app')) {
//     ReactDOM.render(<App />, document.getElementById('app'));
// }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './AppComponent';
  
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('app')
// );