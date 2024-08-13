import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthUserProvider } from '../context/AuthUserContext';
export default function App({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}
