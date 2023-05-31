import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import Home from '../Pages/Home/Home';



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Home />} />
       
        </>
    )
)

export default router