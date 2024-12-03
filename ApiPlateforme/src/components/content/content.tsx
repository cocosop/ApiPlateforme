import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/projets' element={<Projets />} />
            </Routes>
        </div>
    );
};

export default content;