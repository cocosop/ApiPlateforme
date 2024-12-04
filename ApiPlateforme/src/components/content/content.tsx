import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';
import Blank from '../../pages/blank/blank';

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/projets' element={<Projets />} />
                <Route path='/*' element={<Blank />} />
            </Routes>
        </div>
    );
};

export default content;