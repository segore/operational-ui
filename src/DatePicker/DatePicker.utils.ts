import moment from "moment"
import { DatePickerProps } from "./DatePicker"

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/** A range of numbers pre-filled in an array
 * range(5) -> [ 0, 1, 2, 3, 4 ]
 */
export const range = (length: number) => Array.from({ length }, (_, i) => i)

export const changeMonth = (
  diff: number,
  { year, month }: { year: number; month: number },
): { year: number; month: number } => {
  return {
    month: month + diff < 0 ? month + diff + 12 : (month + diff) % 12,
    year: month + diff < 0 ? year - 1 : month + diff > 11 ? year + 1 : year,
  }
}

export const toDate = (year: number, month: number, day: number): string =>
  `${year}-${month < 9 ? "0" : ""}${month + 1}-${day < 9 ? "0" : ""}${day + 1}`

export const validateDateString = (date: string): void => {
  const chunks = date.split("-").map(chunk => Number(chunk))

  if (chunks.length !== 3) {
    throw new Error(
      "Date must be of the format YYYY-MM-DD. You seem to have supplied fewer numbers separated by dashes.",
    )
  }

  if (isNaN(chunks[0])) {
    throw new Error("Invalid year. Date must be a valid YYYY-MM-DD format.")
  }

  if (isNaN(chunks[1])) {
    throw new Error("Invalid month. Date must be a valid YYYY-MM-DD format.")
  }

  if (isNaN(chunks[2])) {
    throw new Error("Invalid day. Date must be a valid YYYY-MM-DD format.")
  }
}

export const toYearMonthDay = (
  date: string,
): {
  year: number
  month: number
  day: number
} => {
  const chunks = date.split("-").map(chunk => Number(chunk))
  return {
    year: chunks[0],
    // Months and days are numbered starting 0 as a state management convenience
    month: chunks[1] - 1,
    day: chunks[2] - 1,
  }
}

export const monthStartDay = (year: number, month: number): number => moment(toDate(year, month, 0)).day()

export const daysInMonth = (month: number, year: number): number => {
  return moment(toDate(year, month, 2)).daysInMonth()
}

export const getStartMonthYearInWidget = (props?: DatePickerProps) => {
  // set start month and year of the widget based on the availability of start, end, max, or min props.
  // if none of the props are available or if there are no props, set it to the current month and year.
  if (props) {
    return props.start
      ? {
          year: toYearMonthDay(props.start).year,
          month: toYearMonthDay(props.start).month,
        }
      : props.end
      ? {
          year: toYearMonthDay(props.end).year,
          month: toYearMonthDay(props.end).month,
        }
      : props.min
      ? {
          year: toYearMonthDay(props.min).year,
          month: toYearMonthDay(props.min).month,
        }
      : props.max
      ? {
          year: toYearMonthDay(props.max).year,
          month: toYearMonthDay(props.max).month,
        }
      : {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
        }
  } else {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    }
  }
}
