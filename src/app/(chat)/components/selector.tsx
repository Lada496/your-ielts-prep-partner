"use client";
import { useState, type ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { NAV_LINKS } from "~/app/components/nab-bar";

interface Option {
  value: string;
  label: string;
}

interface SelectorProps {
  options: Option[];
}

const Selector = ({ options }: SelectorProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const isWriting = pathName.includes("writing");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    router.push(
      `${isWriting ? NAV_LINKS[1].path : NAV_LINKS[2].path}/${
        event.target.value
      }`,
    );
  };

  return (
    <div className="pt-4">
      <label htmlFor="selector" className="mr-2 text-white">
        What task do you want to practice?:
      </label>
      <select
        id="selector"
        className="mt-2 rounded-md bg-white/20 p-2"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" defaultValue="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
