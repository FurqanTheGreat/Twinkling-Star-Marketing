'use client'
import React from "react";
import {Select, SelectItem, Selection} from "@nextui-org/react";

const animals = [
    {key: "0", label: "0"},
    {key: "1", label: "1"},
    {key: "2", label: "2"},
    {key: "3", label: "3"},
    {key: "4", label: "4"},
    {key: "5", label: "5"},
  ];

export default function Dropdown2() {
  const [value, setValue] = React.useState<Selection>(new Set([]));

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Pets"
        classNames={{
            popoverContent: "dark"
        }}
        variant="underlined"
        placeholder="0"
        selectedKeys={value}
        className="w-[80px] dark text-center"
        onSelectionChange={setValue}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key} className="text-white">
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
