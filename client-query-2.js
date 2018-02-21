// HTTP request

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
};

var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
var dice = 3;
var sides = 6;

xhr.send(JSON.stringify({
  query: query,
  variables: { dice: dice, sides: sides }
}));

/* GraphiQL query
{
  rollDice(numDice: 3, numSides: 6)
}
*/