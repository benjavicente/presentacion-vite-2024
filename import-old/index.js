// index.js
function updateCounter() {
  var count = parseInt(counter.textContent.split(" ")[1]);
  console.log(count);
  counter.textContent = `Count: ${count + 1}`;
}
