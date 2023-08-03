var emloyed = Boolean;

var vacation = Boolean;

function setAlarm(employed, vacation) {
  if (emloyed && !vacation) {
    return true;
  } else {
    return false;
  }
}
