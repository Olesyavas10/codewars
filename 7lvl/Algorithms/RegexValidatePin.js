function validatePIN (pin) {
  if ((pin.length===4 || pin.length===6) && /^\d+$/.test(pin)) return true
  return false
}