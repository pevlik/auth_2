import { forwardRef } from "react";
import SchedulerComponent from "./SchedulerComponent";
import { Scheduler as SchedulerProps, SchedulerRef } from "./types";
import { StoreProvider } from "./store/provider";
import React from "react";

const Scheduler = forwardRef<SchedulerRef, SchedulerProps>(function Scheduler(props, ref) {
  return (
    <StoreProvider initial={props}>
      <SchedulerComponent ref={ref} />
    </StoreProvider>
  );
});

export { Scheduler };
