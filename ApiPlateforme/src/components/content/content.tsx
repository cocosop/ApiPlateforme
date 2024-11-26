import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home />} />
            </Routes>
        </div>
    );
};

export default content;