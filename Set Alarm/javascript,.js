var employed = Boolean;

var vacation = Boolean;

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}
