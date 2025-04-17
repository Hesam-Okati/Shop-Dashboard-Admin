import Add_product from "./pages/Add_product/Add_product";
import Analytics from "./pages/Analytics/Analytics";
import Feedback from "./pages/Feedback/Feedback";
import Home from "./pages/Home/Home";
import Mail from "./pages/Mail/Mail";
import Massages from "./pages/Massages/Massages";
import NewUser from "./pages/NewUser/NewUser";
import NotFaund from "./pages/NotFaund/NotFaund";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Prroduct/Prroduct";
import Sales from "./pages/Sales/Sales";
import Settings from "./pages/Settings/Settings";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import Products from "./pages/products/Products"
import UserProfile from "./pages/user/user";

let route = [
    {path : "/" , element : <Home />},
    {path : "/users" , element : <Users />},
    {path : "/new_user" , element : <NewUser />},
    {path : "/products" , element : <Products />},
    {path: "/product/:productID" , element :<Product />},
    // {path: "/new-products" , element :<NewProduct />},
    {path: "/massages" , element :<Massages />},
    {path: "/Settings" , element :<Settings />},
    {path: "/Analytics" , element :<Analytics />},
    {path: "/Sales" , element :<Sales />},
    {path: "/mail" , element :<Mail />},
    {path: "/Feedback" , element :<Feedback />},
    {path: "/Transactions" , element :<Transactions />},
    {path: "/new-products" , element :<Add_product />},
    {path: "/Profile" , element :<Profile />},
    {path: "/users/:userID" , element :<UserProfile />},
     
    {path:"*" , element : <NotFaund />}
]

export default route