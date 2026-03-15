export const getSabbathDetails = (currentTime) => {
  const eventNames = [
    "Youth/Music Sabbath",
    "Prayer Sabbath",
    "Family Sabbath",
    "Education Sabbath"
  ];

  // Starting Point: March 21, 2026
  const startDate = new Date("2026-03-21T08:30:00");
  const msInWeek = 7 * 24 * 60 * 60 * 1000;

  // 1. Calculate how many weeks have passed since the start date
  // We add a 2-day buffer to the calculation to ensure we are looking at the "current" week cycle correctly
  const weeksPassed = Math.max(0, Math.floor((currentTime.getTime() - startDate.getTime() + (2 * 24 * 60 * 60 * 1000)) / msInWeek));
  
  // 2. Identify the Saturday for this week cycle
  let targetSaturday = new Date(startDate.getTime() + weeksPassed * msInWeek);
  
  // 3. Define the Window for "This Sabbath" (Fri 6pm - Sat 6pm)
  const fridayStart = new Date(targetSaturday);
  fridayStart.setDate(targetSaturday.getDate() - 1);
  fridayStart.setHours(18, 0, 0, 0);

  const saturdayEnd = new Date(targetSaturday);
  saturdayEnd.setHours(18, 0, 0, 0);

  // 4. Logic: If we are past Saturday 6:00 PM, move to the NEXT Sabbath immediately
  let finalWeeksPassed = weeksPassed;
  if (currentTime > saturdayEnd) {
    targetSaturday = new Date(targetSaturday.getTime() + msInWeek);
    finalWeeksPassed += 1;
  }

  // 5. Check if the "current" time falls within the Friday 6pm - Sat 6pm window
  // Note: We re-check the window based on the original targetSaturday 
  // before we potentially incremented it for the "Next" display.
  const isLive = currentTime >= fridayStart && currentTime <= saturdayEnd;

  return {
    date: targetSaturday,
    title: eventNames[finalWeeksPassed % eventNames.length],
    isLive: isLive
  };
};