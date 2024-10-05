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
                <input className="navIteminput" placeholder="Search anything"></input>
                <text className="navItemText">Udemy Business</text>
                <text className="navItemText">Teach on Udemy</text>
                <text className="navItemText">My learning</text>                
            </div>
            <div id="navbticon-div">
                <button className="navItemBtnIcon" ><img src="heart.png" alt="Wishlist"></img></button>
                <button className="navItemBtnIcon"><img src="cart.png" alt="Add to Cart"></img></button>
                <button className="navItemBtnIcon"><img src="bell-24.png" alt="Notifications"></img></button>
                <button className="navItemBtnIcon"><img src="circle-32.png" alt="My Profile"></img></button>
            </div>
        </div>
    );
}