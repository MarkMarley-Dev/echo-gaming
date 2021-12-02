const fs = require("fs");

// Function to GET topic list

function getTopicList(req, res) {
  try {
    const topicData = JSON.parse(fs.readFileSync("./data/topics.json"));

    if (!topicData) {
      res.status(404).json({ message: "Topic list not found" });
    }
    return res.status(200).json(topicData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getTopicList;
