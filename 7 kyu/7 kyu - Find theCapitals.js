function capital(capitals){
    return capitals.map(obj => `The capital of ${obj.hasOwnProperty('state') ? obj.state : obj.country} is ${obj.capital}`)
}

// destructing
/*
function capital(capitals){
  return capitals.map(({country, state = country, capital}) => `The capital of ${state} is ${capital}`)
}
*/

// hasOwnProperty or ||
/*
function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  })
}
*/