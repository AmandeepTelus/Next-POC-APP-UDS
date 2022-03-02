import "../styles/globals.css";
import "@telus-uds/palette-allium/build/web/fonts/fonts-cdn.css";
import { AlliumProvider } from "@telus-uds/ds-allium";

function MyApp({ Component, pageProps }) {
  return (
    <AlliumProvider>
      <Component {...pageProps} />
    </AlliumProvider>
  );
}

export default MyApp;
