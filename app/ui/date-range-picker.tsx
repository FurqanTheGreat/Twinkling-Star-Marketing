"use client"
import React from "react";
import { DateRangePicker } from "@nextui-org/react";
import { today, parseDate, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import {useDateFormatter} from "@react-aria/i18n";

export default function DatePicker() {
  let now = today(getLocalTimeZone());
  const [value, setValue] = React.useState({
    start: now,
    end: now.add({days: 7}),
  });

  let disabledRanges = [
    [parseDate("2024-10-23"), parseDate("2024-10-25")], // October 23 to 25, 2024
  ];

  // Set an initial date range (e.g., from October 10 to October 15, 2024)
  let initialStart = parseDate("2024-10-10");
  let initialEnd = parseDate("2024-10-15");
  let formatter = useDateFormatter({dateStyle: "long"});

  return (
    <div>
    <DateRangePicker
    classNames={{
      calendar: "dark",
    }}
    isRequired
    value={value}
    onChange={setValue}
      label="Stay duration"
      isDateUnavailable={(date) =>
        disabledRanges.some(
          (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
        )
      }
      minValue={today(getLocalTimeZone())}
      validate={(value) => {
        if (!value) return null;
      
        // Create an array to store unavailable dates
        const unavailableDates : any = [];
      
        // Loop through each day in the selected date range
        let currentDate = value.start;
        while (currentDate.compare(value.end) <= 0) {
          // Check if the current date is within any disabled range
          disabledRanges.forEach(([start, end]) => {
            if (currentDate.compare(start) >= 0 && currentDate.compare(end) <= 0) {
              unavailableDates.push(currentDate.toString()); // Add unavailable date to the array
            }
          });
      
          currentDate = currentDate.add({ days: 1 }); // Move to the next day
        }
      
        // Convert CalendarDate to JavaScript Date and calculate the difference in days
        const startDate = value.start.toDate(getLocalTimeZone());
        const endDate = value.end.toDate(getLocalTimeZone());
      
        const timeDiff = endDate.getTime() - startDate.getTime(); // Difference in milliseconds
        const diffInDays = timeDiff / (1000 * 60 * 60 * 24); // Convert milliseconds to days
      
        // Check if the booking duration is less than 7 days
        if (diffInDays < 0) {
          return `Start date must be before end date.`;
        } else if (diffInDays < 7) {
          return `Booking must be at least 7 days. You selected ${Math.floor(diffInDays)} day(s).`;
        }
      
        // If there are unavailable dates, return a validation message
        if (unavailableDates.length > 0) {
          return `Selected date range includes unavailable dates: ${unavailableDates.join(', ')}.`;
        }
      
        return null; // No validation errors
      }}
      
      
      
      validationBehavior="native"
      className="max-w-xs dark"
      defaultValue={{ start: initialStart, end: initialEnd }} // Setting the initial value
    />
    <p className="text-default-500 text-sm">
          Selected date:{" "}
          {value
            ? formatter.formatRange(
                value.start.toDate(getLocalTimeZone()),
                value.end.toDate(getLocalTimeZone()),
              )
            : "--"}
        </p>
    </div>
  );
}
