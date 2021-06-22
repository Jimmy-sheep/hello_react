// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import HeaderApp from './header/HeaderApp';
import BodyHomePage from './body/BodyHomePage';
import BodyHumanPage from './body/BodyHumanPage';
import BodyAnimalPage from './body/BodyAnimalPage';
import BodyAnimationPage from './body/BodyAnimationPage';
import BodyOthersPage from './body/BodyOthersPage';

function App() {
    return (
        <div className="App">
            <header className="">
                <HeaderApp />
            </header>
            <body className="App-body">
                <Switch>
                    <Route exact path="/">
                        <BodyHomePage />
                    </Route>
                    <Route exact path="/human">
                        <BodyHumanPage />
                    </Route>
                    <Route path="/animal">
                        <BodyAnimalPage />
                    </Route>
                    <Route path="/animation">
                        <BodyAnimationPage />
                    </Route>
                    <Route path="/others">
                        <BodyOthersPage />
                    </Route>
                </Switch>
            </body>
        </div>
    );
}

export default App;
