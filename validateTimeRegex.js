function validateTime(time) {
    res =  /(0?[0-9]|1[0-2]):[0-5][0-9]/.test(time) 
    return res
  }

  /^(0?[1-9]|1[0-2]):[0-5][0-9]$/

  console.log(validateTime('13:10'));
  console.log(validateTime('34:00'));
  console.log(validateTime('12: 60'));