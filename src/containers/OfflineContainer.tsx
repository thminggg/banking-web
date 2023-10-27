import { headers } from "next/headers";
import Offline from "@/components/Offline";

export default function OfflineContainer() {
  const headersList = headers();
  const referer = headersList.get("referer");

  // Identify service worker request
  const isSWReq = Boolean(referer && referer.includes("sw"));

  return <Offline isSWReq={isSWReq} />;
}
