import "./homePage.css";
import { useState } from "react";

import Menu from "./Menu";
import AppSettings from "../settings/AppSettings";
import AppRide from "../ride/AppRide";
import AppPrice from "../price/AppPrice";

import { TiThMenu, TiThMenuOutline } from "react-icons/ti";

function HomePage() {
    const [page, setPage] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    const movePage = (page) => {
        setPage(page);
        setOpenMenu(false);
    }

    return (
        <div className={"home-page"}>

            <div className={"home-page-open-menu"} onClick={() => setOpenMenu((value) => !value)}>
                {
                    openMenu ? <TiThMenuOutline color="rgb(34, 34, 34)" /> : <TiThMenu color="gray" />
                }
            </div>

            <div className={"home-page-body"}>
                {
                    page === 0 ? 
                    <AppRide /> :
                    page === 1 ?
                    <AppSettings /> :
                    <AppPrice />
                }
            </div>

            {
                openMenu && 
                <Menu 
                setClose={() => setOpenMenu(false)}
                movePage={movePage}
                />
            }

        </div>
    );
}

export default HomePage;
