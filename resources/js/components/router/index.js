import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';
import Cadastro from '../views/cadastro';
import Edicao from '../views/editar';
import Navbar from '../Navbar';
function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="py-4">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/sobre" element={<About />}></Route>
                        <Route path="/cadastro" element={<Cadastro />}></Route>
                        <Route path="/editar/:id" element={<Edicao />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;

// import * as React from "react";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from '../views/home'
// import About from '../views/about'
// import Cadastro from '../views/cadastro'
// import Navbar from '../Navbar';

// function App() {
//     return (<Router>
//         <Navbar />

//         <Routes>
//             <Route path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Cadastro} />
//         </Routes>
//     </Router>);
// }

// export default App;