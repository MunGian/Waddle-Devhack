import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CarpoolPage3 from "./pages/CarpoolPage3";
import PublicTransportPage from "./pages/PublicTransportPage";
import WalletPage from "./pages/WalletPage";
import SidePage from "./pages/SidePage";
import PublicTransportPage1 from "./pages/PublicTransportPage1";
import LRTPage4 from "./pages/LRTPage4";
import MRTPage3 from "./pages/MRTPage3";
import SubscriptionPage from "./pages/SubscriptionPage";
import LRTPage2 from "./pages/LRTPage2";
import LRTPage1 from "./pages/LRTPage1";
import MRTPage2 from "./pages/MRTPage2";
import MRTPage1 from "./pages/MRTPage1";
import CarpoolPage2 from "./pages/CarpoolPage2";
import CarpoolPage1 from "./pages/CarpoolPage1";
import PublicBusesPage3 from "./pages/PublicBusesPage3";
import PublicBusesPage2 from "./pages/PublicBusesPage2";
import PublicBusesPage1 from "./pages/PublicBusesPage1";
import TrainServicesPage2 from "./pages/TrainServicesPage2";
import TrainServicesPage1 from "./pages/TrainServicesPage1";
import ViewMoreEventPage from "./pages/ViewMoreEventPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventDetails1Page from "./pages/EventDetails1Page";
import CommunityEventPage from "./pages/CommunityEventPage";
import WasteManagementPage from "./pages/WasteManagementPage";
import CarpoolPage21 from "./pages/CarpoolPage21";
import IPhone1415Pro13 from "./pages/IPhone1415Pro13";
import IPhone1415Pro12 from "./pages/IPhone1415Pro12";
import IPhone1415Pro11 from "./pages/IPhone1415Pro11";
import ProfilePage from "./pages/ProfilePage";
import RewardPage3 from "./pages/RewardPage3";
import RewardPage2 from "./pages/RewardPage2";
import RewardPage1 from "./pages/RewardPage1";
import RewardPage from "./pages/RewardPage";
import NotificationPage from "./pages/NotificationPage";
import IPhone1415Pro10 from "./pages/IPhone1415Pro10";
import IPhone1415Pro7 from "./pages/IPhone1415Pro7";
import IPhone1415Pro6 from "./pages/IPhone1415Pro6";
import HomePage from "./pages/HomePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/public-transport-page1":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-page":
        title = "";
        metaDescription = "";
        break;
      case "/side-page":
        title = "";
        metaDescription = "";
        break;
      case "/public-transport-page":
        title = "";
        metaDescription = "";
        break;
      case "/lrt-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/mrt-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/subscription-page":
        title = "";
        metaDescription = "";
        break;
      case "/lrt-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/lrt-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/mrt-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/mrt-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/carpool-page-21":
        title = "";
        metaDescription = "";
        break;
      case "/carpool-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/public-buses-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/public-buses-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/public-buses-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/train-services-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/train-services-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/view-more-event-page1":
        title = "";
        metaDescription = "";
        break;
      case "/event-details-page":
        title = "";
        metaDescription = "";
        break;
      case "/event-details-1-page":
        title = "";
        metaDescription = "";
        break;
      case "/community-event-page":
        title = "";
        metaDescription = "";
        break;
      case "/waste-management-page":
        title = "";
        metaDescription = "";
        break;
      case "/carpool-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-13":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-12":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-11":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/reward-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/reward-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/reward-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/reward-page":
        title = "";
        metaDescription = "";
        break;
      case "/notification-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-10":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-7":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-6":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CarpoolPage3 />} />
      <Route path="/public-transport-page1" element={<PublicTransportPage />} />
      <Route path="/wallet-page" element={<WalletPage />} />
      <Route path="/side-page" element={<SidePage />} />
      <Route path="/public-transport-page" element={<PublicTransportPage1 />} />
      <Route path="/lrt-page-3" element={<LRTPage4 />} />
      <Route path="/mrt-page-3" element={<MRTPage3 />} />
      <Route path="/subscription-page" element={<SubscriptionPage />} />
      <Route path="/lrt-page-2" element={<LRTPage2 />} />
      <Route path="/lrt-page-1" element={<LRTPage1 />} />
      <Route path="/mrt-page-2" element={<MRTPage2 />} />
      <Route path="/mrt-page-1" element={<MRTPage1 />} />
      <Route path="/carpool-page-21" element={<CarpoolPage2 />} />
      <Route path="/carpool-page-1" element={<CarpoolPage1 />} />
      <Route path="/public-buses-page-3" element={<PublicBusesPage3 />} />
      <Route path="/public-buses-page-2" element={<PublicBusesPage2 />} />
      <Route path="/public-buses-page-1" element={<PublicBusesPage1 />} />
      <Route path="/train-services-page-2" element={<TrainServicesPage2 />} />
      <Route path="/train-services-page-1" element={<TrainServicesPage1 />} />
      <Route path="/view-more-event-page1" element={<ViewMoreEventPage />} />
      <Route path="/event-details-page" element={<EventDetailsPage />} />
      <Route path="/event-details-1-page" element={<EventDetails1Page />} />
      <Route path="/community-event-page" element={<CommunityEventPage />} />
      <Route path="/waste-management-page" element={<WasteManagementPage />} />
      <Route path="/carpool-page-2" element={<CarpoolPage21 />} />
      <Route path="/iphone-14-15-pro-13" element={<IPhone1415Pro13 />} />
      <Route path="/iphone-14-15-pro-12" element={<IPhone1415Pro12 />} />
      <Route path="/iphone-14-15-pro-11" element={<IPhone1415Pro11 />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/reward-page-3" element={<RewardPage3 />} />
      <Route path="/reward-page-2" element={<RewardPage2 />} />
      <Route path="/reward-page-1" element={<RewardPage1 />} />
      <Route path="/reward-page" element={<RewardPage />} />
      <Route path="/notification-page" element={<NotificationPage />} />
      <Route path="/iphone-14-15-pro-10" element={<IPhone1415Pro10 />} />
      <Route path="/iphone-14-15-pro-7" element={<IPhone1415Pro7 />} />
      <Route path="/iphone-14-15-pro-6" element={<IPhone1415Pro6 />} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
  );
}
export default App;
