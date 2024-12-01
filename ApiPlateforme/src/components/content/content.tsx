import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </div>
    );
};

export default content;