import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Account = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="py-10">
      <div className="flex justify-center bg-gray-100 py-10">
        <div>
          <h1 className="text-xl font-bold py-2">Account</h1>
          {/* <p className="py-2">User Email :</p> */}
          <div>
            {/* <h1>{user && user.email}</h1> */}
            <h1>{user && user.email}</h1>
          </div>

          <button
            className="py-2 px-3 font-mediuml bg-orange-500"
            onClick={handleLogOut}
          >
            sign out
          </button>

          {/* <Link to={"/"} className=" py-4">
            <button className="py-2 px-3 font-mediuml bg-orange-500">
              sign out
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Account;
