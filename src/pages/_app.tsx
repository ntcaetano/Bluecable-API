import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../contexts/AppContext";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
       <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp
