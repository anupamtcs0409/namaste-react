/*

*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("ul", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
    React.createElement("h3", {}, "I am h3 tag"),
  ]),
  React.createElement("ul", { id: "child2" }, [
    React.createElement("h1", {}, "I am 1tag"),
    React.createElement("h2", {}, "I am 22 tag"),
    React.createElement("h3", {}, "I am 3 tag"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
