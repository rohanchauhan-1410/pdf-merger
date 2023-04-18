var express = require("express");
var app = express();
const path = require("path");
const port = 7000;
const multer = require("multer");
const { merge } = require("./testpdf");
const upload = multer({ dest: "uploads/" });
const { mergepdfs } = require("./testpdf");
app.use("/static", express.static("public"));
// console.log(path.extname("./index.html"));
app.get("/", async (req, res) => {
  await res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  await merge(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect("http://localhost:7000/static/merged.pdf");
  // res.send("hello");
});
