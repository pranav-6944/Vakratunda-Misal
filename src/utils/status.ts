/**
 * Calculate live opening status for Vakratunda Misal based on IST (UTC+5:30)
 * Operating hours: 7:00 AM to 10:00 PM (07:00 - 22:00)
 */
export interface RestaurantStatus {
  isOpen: boolean;
  statusText: string;
  marathiStatusText: string;
  nextEvent: string;
  timeRemainingText?: string;
}

export function getRestaurantStatus(): RestaurantStatus {
  // Get current date/time converted to IST
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 3600000;
  const istTime = new Date(utcTime + istOffset);

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentTotalMinutes = hours * 60 + minutes;

  const openMinutes = 7 * 60; // 7:00 AM
  const closeMinutes = 22 * 60; // 10:00 PM

  const isOpen = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;

  if (isOpen) {
    const minutesLeft = closeMinutes - currentTotalMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const minsLeft = minutesLeft % 60;

    let timeRemainingText = '';
    if (hoursLeft > 0) {
      timeRemainingText = `Closes in ${hoursLeft}h ${minsLeft}m`;
    } else {
      timeRemainingText = `Closing soon (${minsLeft}m left)`;
    }

    return {
      isOpen: true,
      statusText: 'Open Now · Closes at 10:00 PM',
      marathiStatusText: 'सुरू आहे · रात्री १०:०० वाजता बंद होईल',
      nextEvent: 'Closes at 10:00 PM',
      timeRemainingText
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now · Opens at 7:00 AM',
      marathiStatusText: 'सध्या बंद आहे · सकाळी ७:०० वाजता सुरू होईल',
      nextEvent: 'Opens at 7:00 AM tomorrow'
    };
  }
}
