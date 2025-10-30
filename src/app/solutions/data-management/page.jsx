import DataHeader from "@/components/data-management/data-header";
import DataSolutions from "@/components/data-management/data-solutions";
import TakeControl from "@/components/data-management/take-control";
import WhyChoose from "@/components/data-management/why-choose";
import React from "react";

export default function page() {
  return (
    <div>
      <DataHeader />
      <DataSolutions />
      <WhyChoose />
      <TakeControl />
    </div>
  );
}
