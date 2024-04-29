function checkVowel(s, n) {
  return n < 0 || n > s.length - 1 ? false : /[aeiou]/gi.test(s[n]);
}

/*
const checkVowel=(s,p)=>'aeiouAEIOU'.includes(s[p])
*/

