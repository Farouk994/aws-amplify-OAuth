import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";
import SignIn from "../components/SignIn";

const initialState = { email: "", password: "", authCode: "" };

function Profile() {
   const [uiState, setUiState] = useState(null);
   //    Toggling different pieces of ui
   const [formState, setFormState] = useState(initialState);
   const [user, setUser] = useState(null);

   useEffect(() => {
      checkUser();
      async function checkUser() {
         try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
            setUiState("signedIn");
         } catch (err) {
            setUser(null);
            setUiState("signIn");
         }
      }
   }, []);
   console.log(user);

   //    Handle input
   function onChange() {
      setFormState({ ...formState, [e.target.name]: e.target.value });
   }
   return (
      <div>
         <div className="bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center">
               <div className="max-w-full sm:w-540 mt-14">
                  <div className="bg-white py-14 px-16 shadow-form rounded">
                     {uiState === "signIn" && (
                        <div>
                           <SignIn
                              onChange={onChange}
                              setUiState={setUiState}
                           />
                        </div>
                     )}
                     {uiState === "signedIn" && (
                        <div>
                           <p className="text-xl">
                              Welcome, {user.attributes.email}
                           </p>
                           <button
                              className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                              onClick={() => {
                                 Auth.signOut();
                                 setUiState("signIn");
                                 setUser(null);
                              }}
                           >
                              Sign Out
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;

// First thing google and facebook sign in
