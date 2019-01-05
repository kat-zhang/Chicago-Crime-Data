module.exports = function(sequelize, Sequelize) {
    var Comment = sequelize.define("Comment", {
      author: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      }
    });
    return Comment;
  };
  