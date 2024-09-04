"use client"
import React from "react";
import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxProps {
    label: String;
  }
export const CheckboxWithText: React.FC<CheckboxProps> = ({label}) =>  {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        {label}
        </label>
      </div>
    </div>
  )
}
