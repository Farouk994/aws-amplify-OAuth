import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";

function Profile() {
   useEffect(() => {
      checkUser();
      async function checkUser() {
         const user = await Auth.currentAuthenticatedUser();
         console.log({ user });
      }
   }, []);
   return (
      <div>
         <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
            Sign In with Google
         </button>
         <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
            Sign In with Facebook
         </button>
         <button onClick={() => Auth.signOut()}>
            Sign Out
         </button>
      </div>
   );
}

export default Profile;

// First thing google and facebook sign in
