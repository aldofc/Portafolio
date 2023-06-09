import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import CyberZon3Details from '../components/Projects/CyberZon3/CyberZoneDetails/CyberZoneDetails';



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<CyberZon3Details />} />
       
        </>
    )
)

export default router