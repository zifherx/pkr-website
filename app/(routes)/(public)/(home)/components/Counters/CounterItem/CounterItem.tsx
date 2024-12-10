import CountUp from "react-countup";

import { tCounter } from "@/types";

export function CounterItem({ items }: tCounter) {
  const { endCounter, lineRight, lineRightMobile, text } = items;

  return (
    <div className={`${lineRight && "ltr"}`}>
      <div
        className={`${
          lineRight && "px-6 border-2 border-transparent md:border-e-bluePKR"
        } ${lineRightMobile && "border-e-bluePKR"}`}
      >
        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-bluePKR">
          +{" "}
          <CountUp end={endCounter} start={0} duration={3.5} enableScrollSpy />
        </p>
        <p className="uppercase max-w-[100px]">{text}</p>
      </div>
    </div>
  );
}
