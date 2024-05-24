'use client';

import { Provider } from 'react-redux';


import store from '@/app/store/store';
import Navbar from './Navbar';
import Footer from './Footer';

const ClientLayout = ({ children, poppinsClassName }) => {


    return (
        <Provider store={store}>
            <div className={`${poppinsClassName} min-h-screen`}>
                <Navbar />
                {children}
                <Footer/>
            </div>
        </Provider>
    );
};

export default ClientLayout;
