const fs = require("fs");

const readData = () => {
  const fileData = fs.readFileSync("./data/topics.json");
  return JSON.parse(fileData);
};

function postComment(req, res) {
  console.log("Post comment request", req.body);
  try {
    const { user, comment } = req.body;
    const commentData = JSON.parse(fs.readFileSync("./data/topics.json"));

    const newComment = {
      user: user,
      comment: comment,
    };
    commentData.push(newComment);
    fs.writeFileSync("./data/topics.json", JSON.stringify(commentData));
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "No data found", error: err.message });
  }
}

module.exports = {
  postComment,
};
