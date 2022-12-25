// import { logEvent } from "firebase/analytics";
// import { analytics } from "../firebase.util";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// logEvent(analytics, "select_content", {
//   content_type: "image",
//   content_id: "P12453",
//   items: [{ name: "Kittens" }],
// });

export const FirebaseAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // track pageview with gtag / react-ga / react-ga4, for example:
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
    const analytics = window.firebase && window.firebase.analytics;
    if (typeof analytics === "function") {
      const page_path = location.pathname + location.search;
      analytics().setCurrentScreen(page_path);

      analytics().logEvent("page_view", {
        page_path,
        page_location: window.location.href,
      });
    }
  }, [location]);
  return null;
};
