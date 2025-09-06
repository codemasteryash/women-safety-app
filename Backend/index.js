
const express = require("express");
const path = require("path");
const app = express();

const PORT = 5000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// SOS button (this can be linked from frontend as <a href="/sos">SOS</a>)
app.get("/sos", (req, res) => {
  res.render("confirm"); // show confirmation card
});

// Handle confirmation form
app.post("/send-sos", (req, res) => {
  const { latitude, longitude } = req.body;
  const time = new Date().toLocaleString();
  const id = Math.floor(Math.random() * 100000);

  res.render("alert", { id, time, latitude, longitude });
});

// Voice Help Route
app.get("/api/voice-help", (req, res) => {
  const { command } = req.query;
  console.log(`Voice command received: ${command}`);
  res.render("voicehelp", { command });
});


app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
