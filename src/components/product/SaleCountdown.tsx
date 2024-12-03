import React, { useEffect, useState } from "react";
import { CountdownTimer } from "./CountdownTimer";

interface SaleCountdownProps {
  endDate: string; // Expecting an ISO date string
}

export const SaleCountdown: React.FC<SaleCountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date(endDate).getTime();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex gap-10 p-3 mt-4 w-full text-base font-medium leading-tight text-red-600 rounded border border-solid bg-red-100/20 border-red-600 border-opacity-10 max-w-[424px] max-md:max-w-full">
      <div className="grow shrink w-[136px]">Hurry up! Sale ends in..</div>
      <CountdownTimer
        days={timeLeft.days.toString()}
        hours={timeLeft.hours.toString()}
        minutes={timeLeft.minutes.toString()}
        seconds={timeLeft.seconds.toString()}
      />
    </div>
  );
};
