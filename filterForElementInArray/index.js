const array = [
  { name: "Bob", location: "Arizona", job: "Sales" },
  { name: "Vince", location: "California", job: "Engineer" },
  { name: "Cathy", location: "California", job: "President" },
  { name: "Joe", location: "Nevada", job: "Sales" },
  { name: "Kevin", location: "Colorado", job: "Engineer" },
];

const jobChar = "E";

const filterJob = (string, char) => {
  const firstCharInString = string.split("")[0].toLowerCase();
  const lowerCaseChar = char.toLowerCase();

  if (firstCharInString === lowerCaseChar) return true;
  return false;
};

array.forEach((item) => {
  const filteredJob = filterJob(item.job, "E");

  if (filteredJob) console.log(item);
});