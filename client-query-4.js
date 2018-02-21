// HTTP request

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
};

var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
    content
    author
  }
}`;
var content = "Simple text message";
var author = "Taras";

xhr.send(JSON.stringify({
  query: query,
  variables: {
    input: {
      content: content,
      author: author
    }
  }
}));

/* GraphiQL query
mutation {
  createMessage(input: {
    content: "Simple text message",
    author: "Taras"
  }) {
    id
    content
    author
  }
}
*/