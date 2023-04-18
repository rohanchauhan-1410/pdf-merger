const pdfmerger = require("pdf-merger-js");
var merger = new pdfmerger();
async function merge(p1, p2) {
  await merger.add(p1);
  await merger.add(p2);
  await merger.save("public/merged.pdf");
}

module.exports = { merge };
