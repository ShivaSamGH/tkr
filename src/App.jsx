import {useState} from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import {Row1} from "./components/Row1.jsx";
import {HopOnPage} from "./components/HopOnPage.jsx";

function App() {

    return (
        <div className={`flex flex-col min-h-screen`}>
            <div className={`bg-gray-300 text-black font-semibold text-center py-2 text-xs`}>FREE DELIVERY, RETURN & EXCHANGE</div>
            <Navbar />
            <main className={`mx-8 lg:mx-4 flex-grow`}>
                <Row1 />
                <Products />
                <HopOnPage />
            </main>
            <Footer />
        </div>
    )
}

export default App
