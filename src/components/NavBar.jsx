import "./NavBar.css"
export default function NavBar()
{
    return (
        <div className="navContainerparent-div">
            <div id="navLogo-div">
                <a className="navLogo" href="https://www.udemy.com/" >
                     <img src="logo-udemy.svg" alt="udemylogo" width="91" height="42" />
                 </a>    
            </div>
            <div id="navbtnContainer-div">
                <text className="navItemText">Categories</text>
                <input className="navIteminput"></input>
                <text className="navItemText">Udemy Business</text>
                <text className="navItemText">Teach on Udemy</text>
                <text className="navItemText">My learning</text>
                <button className="navItemBtn" img="wishlist.svg">Wishlist</button>
                <button className="navItemBtn" img="">Cart</button>
                <button className="navItemBtn" img="">Notifications</button>
                <button className="navItemBtn" img="" >Profile</button>
            </div>
        </div>
    );
}