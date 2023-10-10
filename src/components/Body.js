import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";

function Body() {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Outlet>
                <MainContainer />
                <WatchPage />
            </Outlet>
        </div>
    )
}

export default Body;