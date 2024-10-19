'use client'
import React from "react";
import {Select, SelectItem, Selection} from "@nextui-org/react";

const animals = [
    {key: "1", label: "1"},
    {key: "2", label: "2"},
    {key: "3", label: "3"},
    {key: "4", label: "4"},
    {key: "5", label: "5"},
    {key: "6", label: "6"},
    {key: "7", label: "7"},
    {key: "8", label: "8"},
    {key: "9", label: "9"},
    {key: "10", label: "10"},
    {key: "11", label: "11"},
    {key: "12", label: "12"},
    {key: "13", label: "13"},
    {key: "14", label: "14"},
    {key: "15", label: "15"},
  ];

export default function Dropdown1() {
  const [value, setValue] = React.useState<Selection>(new Set([]));

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Children"
        classNames={{
            popoverContent: "dark"
        }}
        variant="underlined"
        placeholder="1"
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
