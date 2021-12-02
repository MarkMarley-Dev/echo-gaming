const fs = require("fs");

// Function to GET topic list

function getTopicList(req, res) {
  try {
    const topicToFind = req.params.topicId;
    const commentData = JSON.parse(fs.readFileSync("./data/comments.json"));
    const topicComments = commentData.filter(
      (comment) => comment.topicId === topicToFind
    );

    if (!topicComments) {
      res.status(404).json({ message: "Comment list not found" });
    }
    return res.status(200).json(topicComments);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getTopicList;
