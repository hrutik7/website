import Image from "next/image";
import type { ReactNode } from "react";

export function FeatureBox({
  name,
  description,
  icon,
}: {
  icon: React.ReactNode;
  name: string;
  description: ReactNode;
}) {
  return (
    <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden text-black no-underline border dark:text-white rounded-xl dark:border-neutral-800">
      {icon}

      <div className="flex flex-col gap-2">
        <h3 className="m-0 font-bold leading-5 text-gray-900 font-space-grotesk dark:text-white">
          {name}
        </h3>

        <p className="m-0 leading-6 opacity-70">{description}</p>
      </div>
    </div>
  );
}
