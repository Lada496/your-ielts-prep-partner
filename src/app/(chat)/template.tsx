"use client";
import { usePathname } from "next/navigation";

import Selector from "./components/selector";
import { NAV_LINKS } from "../components/nab-bar";

const WRITING_MENU = [
  { label: "Task 1 (Academic)", value: "task-1-academic" },
  {
    label: "Task 1 (General)",
    value: "task-1-general",
  },
  {
    label: "Task 2",
    value: "task-2",
  },
];

const SPEAKING_MENU = [
  { label: "Task 1", value: "task-1" },
  { label: "Task 2", value: "task-2" },
  { label: "Task 3", value: "task-3" },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  /**
   * Example: /writing/task-1-academic -> writing: task 1 academic
   */
  const pageTitle = pathName
    .substring(1)
    .replaceAll("/", ": ")
    .replaceAll("-", " ");

  return (
    <section className="container mx-auto flex h-full flex-col justify-start">
      <h1 className="text-4xl font-semibold capitalize">{pageTitle}</h1>
      <Selector
        options={
          pathName.includes(NAV_LINKS[1].path) ? WRITING_MENU : SPEAKING_MENU
        }
      />
      {children}
    </section>
  );
}
