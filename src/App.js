import Home from './Routes/Home/home.route';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/navigation.route';
import SignIn from './Routes/sign-in/sign-in.route';

const Shop  = () => <h1>Hi I am shop page</h1>;

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='sign-in' element={<SignIn/> }/>
            </Route>
        </Routes>
    )
}

export default App;
