import DraasConsultation from "@/components/draas/draas-consultation";
import DraasDefense from "@/components/draas/draas-defense";
import DraasHeader from "@/components/draas/draas-header";
import DraasIndustries from "@/components/draas/draas-industries";
import DraasSolutions from "@/components/draas/draas-solutions";
import Ransomware from "@/components/draas/ransomware";
import Trust from "@/components/draas/trust";
import WhatSetsUs from "@/components/draas/what-sets-us";
import React from "react";

export default function Page() {
  return (
    <div>
      <DraasHeader />
      <DraasDefense />
      <Ransomware />
      <DraasSolutions />
      <Trust />
      <DraasIndustries />
      <WhatSetsUs />
      <DraasConsultation />
    </div>
  );
}
