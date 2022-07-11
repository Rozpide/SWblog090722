// import React from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Personaje } from "../js/views/Personaje.jsx";
// import { BodyPlanetas } from "../js/views/BodyPlanetas.jsx";
// import {Planet} from "../js/views/Planet.jsx";
// import { Body } from "../js/views/Body.jsx";
// import { Header } from "../js/component/header.jsx";
// import injectContext from "./store/appContext.js";
// //create your first component
// const Layout = () => {
// 	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// 	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
// 	const basename = process.env.BASENAME || "";

// 	return (
// 		<>
//         <div className="container-fluid mt-4">

//             <BrowserRouter>
//                 <Header />
//                 <hr></hr>
//                 <Switch>
//                 <Route exact path="/planets/:id" component={Planet} />
//                     <Route exact path="/people/:id" component={Personaje} />
//                     <Route exact path="/planetas" component={BodyPlanetas} />
//                     <Route exact path="/" component={Body} />
//                     <Route render={() => <h1 className="text-center">no lo encuentro....</h1>} />
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     </>
// 	);
// };

// export default injectContext(Layout);
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Personaje } from "../js/views/Personaje.jsx";
import { BodyPlanetas } from "../js/views/BodyPlanetas.jsx";
import {Planet} from "../js/views/Planet.jsx";
import { Body } from "../js/views/Body.jsx";
import { Header } from "../js/component/header.jsx";
import  injectContext  from "../js/store/appContext.js";


 const Layout = () => {
    return (<>
        <div className="container-fluid mt-4">

            <BrowserRouter>
                <Header />
                <hr></hr>
                <Switch>
                <Route exact path="/planets/:id" component={Planet} />
                    <Route exact path="/people/:id" component={Personaje} />
                    <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/" component={Body} />
                    <Route render={() => <h1 className="text-center">no lo encuentro....</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}

export default injectContext(Layout);
