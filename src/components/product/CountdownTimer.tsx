import * as React from "react";
import { TimeUnit } from "./TimeUnit";

type CountdownTimerProps = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="flex flex-1 gap-1.5 items-center self-start whitespace-nowrap">
      <TimeUnit value={`${days}d`} />
      <TimeUnit value={`${hours}h`} />
      <TimeUnit value={`${minutes}m`} />
      <TimeUnit value={`${seconds}s`} showSeparator={false} />
    </div>
  );
};
