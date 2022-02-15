import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
   return (
      <div>
         <nav>
            <Link href="/">
               <a>Home</a>
            </Link>
            <Link href="/profile">
               <a>Profile</a>
            </Link>
            <Link href="/dashboard">
               <a>Dashboard</a>
            </Link>
         </nav>
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
