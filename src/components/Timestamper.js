export const Timestamp = timecode => {
  let timeToStamp = new Date(timecode);
  let day = timeToStamp.getUTCDate();
  let month = timeToStamp.getUTCMonth() + 1;
  let year = timeToStamp.getUTCFullYear();
  let hour = timeToStamp.getUTCHours() + 1;
  let minutes = timeToStamp.getUTCMinutes() + 1;
  let timestamp = month + "/" + day + "/" + year + " @ " + hour + ":" + minutes;

  return timestamp;
};
