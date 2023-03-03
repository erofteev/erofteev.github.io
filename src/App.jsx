import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop"
import { withErrorBoundary } from "react-error-boundary";

import './assets/css/main.scss'
import Header from "./components/header/Header"
import Home from './pages/home/Home'
import ProjectPage from "./pages/projectPage/ProjectPage"
import Footer from "./components/footer/Footer"
import NoMatch from "./pages/404/NoMatch";

function App() {

    return (
        <div className="page container">
            <Router>
                <ScrollToTop />
                <Header />
                <div className="wrapper">
                    <Routes>
                        <Route path="/project/:name" element={<ProjectPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default withErrorBoundary(App, {
    fallback: <NoMatch />
});