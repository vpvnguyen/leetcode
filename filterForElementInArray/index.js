const array = [
  { name: "Bob", location: "Arizona", job: "Sales" },
  { name: "Vince", location: "California", job: "Engineer" },
  { name: "Cathy", location: "California", job: "President" },
  { name: "Joe", location: "Nevada", job: "Sales" },
  { name: "Kevin", location: "Colorado", job: "Engineer" },
];

const jobChar = "E";

const getFirstCharOfString = (string) => string.split("")[0];

const setAllStringsToLowerCase = (stringArray) =>
  stringArray.map((string) => string.toLowerCase());

const filterByString = (string, filterChar) => {
  // get fist character of string
  const firstCharOfString = getFirstCharOfString(string);

  // lower case all string parameters
  const stringsToLowerCase = [firstCharOfString, filterChar];

  const lowerCasedStrings = setAllStringsToLowerCase(stringsToLowerCase);
  const [lowerCasedString, lowerCasedChar] = lowerCasedStrings;

  // check if strings matches
  if (lowerCasedString === lowerCasedChar) return true;
  return false;
};

// log all items that matches filter
array.forEach((item) => {
  const filteredJob = filterByString(item.job, "E");

  if (filteredJob) console.log(item);
});
