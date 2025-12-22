"use client";
import { addDays, isWithinInterval, set } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../Context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some(date =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const { minBookingLength, maxBookingLength } = settings;

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  const endMonth = new Date();
  endMonth.setFullYear(endMonth.getFullYear() + 5);

  const handleSetRange = newRange => {
    if (!newRange) return;
    if (range.from && !range.to && newRange.from && range.from) {
      if (newRange.from.getTime() < range.from.getTime()) {
        // From date is before current from date
        setRange({ from: newRange.from, to: undefined });
        return;
      }
    }
    if (isAlreadyBooked(newRange, bookedDates)) {
      // Date range contains booked dates
      setRange({ from: newRange.to, to: undefined });
      return;
    }

    setRange(newRange);
  };

  let disabledDays = [
    ...bookedDates,
    { before: new Date() }, // Disable past dates
  ];

  if (range?.from && !range?.to) {
    if (minBookingLength > 1) {
      // Disable dates before minBookingLength
      disabledDays.push({
        from: addDays(range.from, 1),
        to: addDays(range.from, minBookingLength - 1),
      });
    }
    if (maxBookingLength) {
      // Disable dates after maxBookingLength
      disabledDays.push({
        from: addDays(range.from, maxBookingLength + 1),
        to: set(endMonth, { hours: 23, minutes: 59, seconds: 59 }),
      });
    }
  }

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={handleSetRange}
        selected={range}
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={endMonth}
        disabled={disabledDays}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="mt-4 lg:mt-0 flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-18">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
