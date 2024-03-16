// datestring is of format YYYYMMDD
export function calculateAge(birthDate: string): number | null {
  // Convert birthDate string to Date object
  const birthDateObj = new Date(
    parseInt(birthDate.substring(0, 4)), // Year
    parseInt(birthDate.substring(4, 6)) - 1, // Month (zero-based)
    parseInt(birthDate.substring(6, 8)) // Day
  )

  // Get current date
  const currentDate = new Date()

  // Calculate age
  let age = currentDate.getFullYear() - birthDateObj.getFullYear()

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate <
    new Date(
      currentDate.getFullYear(),
      birthDateObj.getMonth(),
      birthDateObj.getDate()
    )
  ) {
    age--
  }

  return age
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

function daySuffix(day: number) {
  if (day >= 11 && day <= 19) {
    return 'th'
  }
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
// date string is in format YYYYMMDDHHMM
export function formatDate(dateString: string) {
  const year = dateString.slice(0, 4)
  const monthIndex = parseInt(dateString.slice(4, 6)) - 1
  const day = parseInt(dateString.slice(6, 8))
  const hour = parseInt(dateString.slice(8, 10))
  const minute = parseInt(dateString.slice(10, 12))

  const formattedDate = `${day}${daySuffix(day)} ${
    months[monthIndex]
  } ${year}, ${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}`

  return formattedDate
}

export function parseObservationResult(value: string): number | null {
  if (!value) {
    return null
  }
  if (typeof value === 'string') {
    // Parse the value as a number
    const numericValue = parseFloat(value)
    // Check if the parsed value is a valid number
    if (!Number.isNaN(numericValue)) {
      // Return the numeric value
      return numericValue
    }
  }

  const stringifiedValue = Object.values(value).join('')

  // Check if the value starts with "<^"
  if (stringifiedValue.startsWith('<') || stringifiedValue.startsWith('>')) {
    // Extract the number after "<^"
    const numericValueStr = stringifiedValue.substring(1)
    // Convert the string to a number
    const numericValue = parseFloat(numericValueStr)
    // Return the negative of the numeric value

    if (Number.isNaN(numericValue)) {
      return null
    }
    return numericValue
  }
  // Return null for invalid or unrecognized values
  return null
}
