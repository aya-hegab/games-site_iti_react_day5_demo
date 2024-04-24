import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutWithHeader from '../components/Layout/LayoutWithHeader'
// import Games from '../pages/Games'
// import GameDetails from '../pages/GameDetails'
// import ContactUs from '../pages/ContactUs'
// import AddGame from '../pages/AddGame'
import NotFound from '../pages/NotFound'
// import Counter from '../pages/Counter'

const Games = React.lazy(() => import('../pages/Games'));
const ContactUs = React.lazy(() => import('../pages/ContactUs'));
const AddGame = React.lazy(() => import('../pages/AddGame'));
const Counter = React.lazy(() => import('../pages/Counter'));
const GameDetails = React.lazy(() => import('../pages/GameDetails'));


export default function Router() {
    return (
        <Suspense fallback={<h5>Loading ...</h5>}>
            <Routes>
                <Route element={<LayoutWithHeader />}>
                    <Route path='' element={<Games />} />
                    <Route path='/game-details/:id' element={<GameDetails />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/add-game' element={<AddGame />} />
                </Route>
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
