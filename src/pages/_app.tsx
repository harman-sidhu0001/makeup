import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useRouter } from "next/router";
import { BarLoader } from "react-spinners";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 120,
    });

    const timer = setTimeout(() => {
      setLoading(false);
      AOS.refresh(); // This ensures AOS recalculates positions
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS on every route change
  useEffect(() => {
    const handleRouteChange = () => {
      AOS.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <BarLoader color="pink" height={4} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kamna Sharma Bridal Makeup Artist & Academy</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
