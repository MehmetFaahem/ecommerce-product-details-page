import * as React from "react";

type TimeUnitProps = {
  value: string;
  showSeparator?: boolean;
};

export const TimeUnit: React.FC<TimeUnitProps> = ({
  value,
  showSeparator = true,
}) => (
  <>
    <div className="self-stretch my-auto">{value}</div>
    {showSeparator && <div className="self-stretch my-auto">:</div>}
  </>
);
