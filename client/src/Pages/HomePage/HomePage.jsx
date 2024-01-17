import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const HomePage = () => {
  // const { user } = useUser();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user);
  const token = localStorage.getItem("clerk-db-jwt");

  return (
    <div>
    {!user ? (<SignedOut>
        <h1>Sign in with this button</h1>
        <SignInButton mode="modal" redirectUrl="/" />
      </SignedOut>) : (<SignedIn>
        <h1>Welcome to Dashbaord {user.fullName}</h1>
        <SignOutButton afterSignOutUrl="/" />
        {/* <UserButton /> */}
      </SignedIn>)} 
      
      
    </div>
  );
};

export default HomePage;
