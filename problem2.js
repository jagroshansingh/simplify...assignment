// Problem:
// Your son took a vacation through Europe without telling you. When the kid returned from the vacation you asked him where did he go.
// The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// I used only train as transportation and these were the available tickets:
// Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
// You know that your kid started with Kiev
// Write a data structure and algorithm that will give you the route which your son was traveling.

let ticketsStr =
  "Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam";
let ticketsArr = ticketsStr.split(", ").map((city) => city.split("-"));
// console.log(ticketsArr);
let route = ["Kiev"];

let start = "Kiev";
for (let i = 0; i < ticketsArr.length; i++) {
  for (let j = 0; j < ticketsArr.length; j++) {
    if (ticketsArr[j][0] == start) {
      start = ticketsArr[j][1];
      route.push(start);
    }
  }
  if (start == "Kiev") break;
}
console.log(route.join("-"));
