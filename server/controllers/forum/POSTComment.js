const fs = require("fs");

const readData = () => {
  const fileData = fs.readFileSync("./data/comments.json");
  return JSON.parse(fileData);
};

function postComment(req, res) {
  //   console.log("Post comment request", req.body);
  try {
    const { topicId, user, comment } = req.body;
    const commentsData = JSON.parse(fs.readFileSync("./data/comments.json"));

    const newComment = {
      topicId: topicId,
      user: user,
      comment: comment,
    };
    commentsData.push(newComment);
    fs.writeFileSync("./data/comments.json", JSON.stringify(commentsData));
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "No data found", error: err.message });
  }
}

module.exports = postComment;
