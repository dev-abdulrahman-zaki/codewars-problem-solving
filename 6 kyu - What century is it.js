function whatCentury(year) {
  let century = Math.ceil(year / 100);
  let lastTwoDigits = century % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    century += "th";
  } else {
    let lastDigit = century % 10;

    switch (lastDigit) {
      case 1:
        century += "st";
        break;
      case 2:
        century += "nd";
        break;
      case 3:
        century += "rd";
        break;
      default:
        century += "th";
    }
  }

  return century;
}

/*
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}
*/

/*
function whatCentury(year) {
  var century = Math.ceil(year / 100);
  if (century > 10 && century < 20) return century + "th";
  switch (century % 10) {
    case 1: return century + "st";
    case 2: return century + "nd";
    case 3: return century + "rd";
    default: return century + "th";
  }
}
*/

// let x = whatCentury("1999"); //, "20th", "With input '1999' solution produced wrong output");
// let x = whatCentury("2011"); //, "21st", "With input '2011' solution produced wrong output");
// let x = whatCentury("2154"); //, "22nd", "With input '2154' solution produced wrong output");
// let x = whatCentury("2259"); //, "23rd", "With input '2259' solution produced wrong output");
// let x = whatCentury("1234"); //, "13th", "With input '1234' solution produced wrong output");
// let x = whatCentury("1023"); //, "11th", "With input '1023' solution produced wrong output");
let x = whatCentury("2000"); //, "20th", "With input '2000' solution produced wrong output");
console.log(x);

/*
If the last digit of the number is 1 and the tens digit is not 1, add "st."
Example: "21st," "31st," "41st," and so on.

If the last digit of the number is 2 and the tens digit is not 1, add "nd."
Example: "22nd," "32nd," "42nd," and so on.

If the last digit of the number is 3 and the tens digit is not 1, add "rd."
Example: "23rd," "33rd," "43rd," and so on.

For all other cases, add "th."
*/

/*
function whatCentury(year) {
  let century = String(Math.ceil(year / 100));
  if (century[0] != "1") {
    if (century[1] == "1") {
      century += "st";
    } else if (century[1] == "2") {
      century += "nd";
    } else if (century[1] == "3") {
      century += "rd";
    }
  } else {
    century += "th";
  }
  return century;
}
*/

/*
function whatCentury(year) {
  let century = Math.ceil(year / 100);
  let tensDigit = Number(String(century % 100)[0]);
  let lastDigit = century % 10;
  console.log(tensDigit, lastDigit);

  if (tensDigit !== 1) {
    if (lastDigit == 1) {
      century += "st";
    } else if (lastDigit == 2) {
      century += "nd";
    } else if (lastDigit == 3) {
      century += "rd";
    }
  } else {
    century += "th";
  }

  return century;
}
*/
