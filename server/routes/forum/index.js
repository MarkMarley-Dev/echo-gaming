const forumRouter = require("express").Router();

const getTopic = require("../../controllers/inventory/GETTopic");
const getTopicList = require("../../controllers/inventory/GETTopicList");
const addTopic = require("../../controllers/inventory/POSTTopic");
const addComment = require("../../controllers/inventory/POSTComment");
const deleteTopic = require("../../controllers/inventory/DELETETopic");
const deleteComment = require("../../controllers/inventory/DELETEComment");

forumRouter.route("/topic").get(getTopicList).post(addTopic);

forumRouter.route("/topic/:topicId").delete(deleteTopic).get(getTopic);

forumRouter
  .route("/topic/:topicId/comment")
  .post(addComment)
  .delete(deleteComment);

module.exports = forumRouter;
