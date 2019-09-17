// Given an array of meeting times, merge times that overlap
// [{ startTime: 0, endTime: 1 },
// { startTime: 3, endTime: 5 },
// { startTime: 4, endTime: 8 },
// { startTime: 10, endTime: 12 },
// { startTime: 9, endTime: 10 }]

// should be
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

function mergeTimes(meetings) {
  // sort by time
  const sortMeetings = meetings.sort((a, b) => a.startTime - b.startTime);

  // mergeMeetings with earliest time
  const mergedMeetings = [sortMeetings[0]];

  for (let i = 1; i < sortMeetings.length; i++) {
    const currentMeeting = sortMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

module.exports = mergeTimes;
