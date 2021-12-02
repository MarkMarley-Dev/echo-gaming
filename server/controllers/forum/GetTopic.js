const fs = require("fs");

// Function to GET topic details dy id

function getTopic(req, res) {
  try {
    const topicToFind = req.params.topicId;

    const topicData = JSON.parse(fs.readFileSync("./data/topics.json"));
    const topic = topicData.find((topic) => topic.id === topicToFind);

    if (!topic) {
      res.status(404).json({ message: "Topic details not found" });
    }
    return res.status(200).json(topic);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getTopic;
