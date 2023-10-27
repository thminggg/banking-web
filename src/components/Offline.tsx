"use client";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Offline({ isSWReq }: { isSWReq: boolean }) {
  if (!isSWReq && typeof window !== "undefined") {
    window.location.href = "/banking-web/home";
  }

  return isSWReq ? (
    <>
      You are offline,
      <Link href="/home">
        <Button>retry </Button>
      </Link>
      when network is reconnected
    </>
  ) : (
    <></>
  );
}
