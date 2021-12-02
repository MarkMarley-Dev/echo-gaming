const forumRouter = require("express").Router();

const getTopic = require("../../controllers/forum/GETTopic");
const getTopicList = require("../../controllers/forum/GETTopicList");
const getComments = require("../../controllers/forum/GETComments");
const postComment = require("../../controllers/forum/POSTComment");
// const addTopic = require("../../controllers/forum/POSTTopic");
// const addComment = require("../../controllers/forum/POSTComment");
// const deleteTopic = require("../../controllers/forum/DELETETopic");
// const deleteComment = require("../../controllers/forum/DELETEComment");

forumRouter.route("/topic").get(getTopicList);
forumRouter.route("/topic/:topicId").get(getTopic);
forumRouter.route("/comments/:topicId").get(getComments);

//endgame
// forumRouter.route("/topic").get(getTopicList).post(addTopic);

// forumRouter.route("/topic/:topicId").delete(deleteTopic).get(getTopic);

forumRouter.route("/topic/:topicId/comment").post(postComment);
//   .delete(deleteComment);

module.exports = forumRouter;
