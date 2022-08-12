import { auth } from "../firebase";

// Tailwind classes object
const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const Logout = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button onClick={signOut} className={style.button}>
      Logout
    </button>
  );
};

export default Logout;
