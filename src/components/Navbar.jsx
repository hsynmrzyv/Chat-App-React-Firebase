import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Components
import SignIn from "./SignIn";
import LogOut from "./LogOut";

// Tailwind classes object
const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {!user && <SignIn />}
      {user && <LogOut />}
    </div>
  );
};

export default Navbar;
