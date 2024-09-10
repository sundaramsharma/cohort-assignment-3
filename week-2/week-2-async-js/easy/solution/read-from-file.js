const fs = require("fs");

fs.readFile("books.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("Error:File not found");
    } else {
      console.log("Error reading file:", err);
    }
    return;
  }
  console.log("File contents:", data);
});

const expensiveOperation = async () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  console.log("Expensive operation done");
};

expensiveOperation();
