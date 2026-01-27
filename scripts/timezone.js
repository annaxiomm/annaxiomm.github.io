const tz = "Pacific/Auckland";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: tz,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const el = document.getElementById("my-time");

function updateTime() {
  const now = new Date();
  el.innerText = formatter.format(now);
}

updateTime(); // initial call

// update exactly at the start of the next second
const msToNextSecond = 1000 - (Date.now() % 1000);

setTimeout(() => {
  updateTime();
  setInterval(updateTime, 1000);
}, msToNextSecond);


function getOffset(timeZone) {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset"
  });

  const parts = formatter.formatToParts(now);
  const offset = parts.find(p => p.type === "timeZoneName").value;

  return offset;
}

document.getElementById("my-offset").innerText = getOffset('Pacific/Auckland');

