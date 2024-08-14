import "./menu.css";


function Menu({setClose, movePage}) {
    return (
        <div className={"home-page-menu"} onMouseLeave={() => setClose()}>
            <div>
                <p onClick={() => movePage(0)}>הזמנות</p>
                <p onClick={() => movePage(1)}>הגדרות</p>
                <p onClick={() => movePage(1)}>תמחור</p>
                <p onClick={() => movePage(1)}>תשלומים</p>
                <p onClick={() => movePage(1)}>נהגים</p>
                <p onClick={() => movePage(1)}>דוחות</p>
            </div>
        </div>
    );
}

export default Menu;
