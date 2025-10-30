import PrivacyBody from "@/components/privacy-policy/privacy-body";
import PrivacyHeader from "@/components/privacy-policy/privacy-header";
import React from "react";

export default function page() {
  return (
    <div className="dark:bg-white">
      <PrivacyHeader />
      <PrivacyBody />
    </div>
  );
}
