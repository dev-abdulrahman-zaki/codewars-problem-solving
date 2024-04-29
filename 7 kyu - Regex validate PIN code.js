function validatePIN(pin) {
    return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
    }


let x = validatePIN("125")
console.log(x);


/*
function validatePIN (pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}
*/