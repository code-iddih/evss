export const getSabbathDetails = (currentTime) => {
  const eventNames = [
    "Youth/Music Sabbath",
    "Prayer Sabbath",
    "Family Sabbath",
    "Education Sabbath"
  ];

  // Starting Point: March 21, 2026 (The first Saturday in the cycle)
  const startDate = new Date("2026-03-21T08:30:00");
  const msInWeek = 7 * 24 * 60 * 60 * 1000;

  // 1. Calculate weeks passed since start date
  const weeksPassed = Math.max(0, Math.floor((currentTime.getTime() - startDate.getTime() + (2 * 24 * 60 * 60 * 1000)) / msInWeek));
  
  // 2. Identify the Saturday for this week cycle
  let targetSaturday = new Date(startDate.getTime() + weeksPassed * msInWeek);
  
  // 3. Define the Window for "This Sabbath" (Fri 6pm - Sat 6pm)
  const fridayStart = new Date(targetSaturday);
  fridayStart.setDate(targetSaturday.getDate() - 1);
  fridayStart.setHours(18, 0, 0, 0);

  const saturdayEnd = new Date(targetSaturday);
  saturdayEnd.setHours(18, 0, 0, 0);

  // 4. If we are past Saturday 6:00 PM, move to the NEXT Sabbath immediately
  let finalWeeksPassed = weeksPassed;
  if (currentTime > saturdayEnd) {
    targetSaturday = new Date(targetSaturday.getTime() + msInWeek);
    fridayStart.setTime(fridayStart.getTime() + msInWeek);
    saturdayEnd.setTime(saturdayEnd.getTime() + msInWeek);
    finalWeeksPassed += 1;
  }

  // 5. Check if we are currently in the Friday 6pm - Sat 6pm window
  const isLive = currentTime >= fridayStart && currentTime <= saturdayEnd;

  // 6. TARGET LOGIC: 
  // If Sabbath hasn't started yet (before Friday 6pm), count down to Friday 6pm.
  // This makes the timer read "1 hour to go" on Friday afternoon.
  const countdownTarget = (currentTime < fridayStart) ? fridayStart : targetSaturday;

  return {
    date: countdownTarget, // Targets Fri 6pm or Sat morning service
    displayDate: targetSaturday, // Always labels the Saturday date
    title: eventNames[finalWeeksPassed % eventNames.length],
    isLive: isLive
  };
};