import Footer from "./Footer"
import ResponsiveAppBar from "./ResponsiveAppBar"
import '../../styles/App.css';
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <div className="App">
            <div>
                <ResponsiveAppBar />
            </div>
            <Outlet />
            <div>
                <Footer />
            </div>
        </div>

    )
}