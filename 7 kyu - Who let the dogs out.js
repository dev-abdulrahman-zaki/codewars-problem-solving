var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark){
  bark = bark ?? true;
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark){
  bark = bark ?? false;
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark){
  dont_bark = dont_bark ?? true;
  return !dont_bark ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark){
  dont_bark = dont_bark ?? false;
  return !dont_bark ? BARK : SLEEP;
}