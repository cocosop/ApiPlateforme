import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Projets from '../../pages/projets/projets';

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/projets' element={<Projets/>} />
            </Routes>
        </div>
    );
};

export default content;