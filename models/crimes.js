// module.exports = function(sequelize, Sequelize) {
//   var Crime = sequelize.define("Crime", {
//     Crime_ID: {
//       type: Sequelize.STRING
//     },
//     Case_Number: {
//       type: Sequelize.STRING
//     },
//     Date: {
//       type: Sequelize.STRING
//     },
//     Block: {
//       type: Sequelize.STRING
//     },
//     IUCR: {
//       type: Sequelize.STRING
//     },
//     PrimaryType: {
//       type: Sequelize.STRING
//     },
//     Description: {
//       type: Sequelize.STRING
//     },
//     LocationDescription: {
//       type: Sequelize.STRING
//     },
//     Arrest: {
//       type: Sequelize.STRING
//     },
//     Domestic: {
//       type: Sequelize.STRING
//     },
//     Beat: {
//       type: Sequelize.INTEGER
//     },
//     District: {
//       type: Sequelize.INTEGER
//     },
//     Ward: {
//       type: Sequelize.INTEGER
//     },
//     CommunityArea: {
//       type: Sequelize.STRING
//     },
//     FBI_Code: {
//       type: Sequelize.STRING
//     },
//     X_Coordinate: {
//       type: Sequelize.STRING
//     },
//     Y_Coordinate: {
//       type: Sequelize.STRING
//     },
//     Year: {
//       type: Sequelize.INTEGER
//     },
//     Updated_On: {
//       type: Sequelize.STRING
//     },
//     Latitude: {
//       type: Sequelize.STRING
//     },
//     Longitude: {
//       type: Sequelize.STRING
//     },
//     Location: {
//       type: Sequelize.STRING
//     },
//     zipCode: {
//       type: Sequelize.INTEGER
//     },
//     createdAt: {
//       allowNull: true,
//       type: Sequelize.STRING
//     },
//     updatedAt: {
//       allowNull: true,
//       type: Sequelize.STRING
//     }
//   });
//   return Crime;
// };

module.exports = function(sequelize, Sequelize) {
  var Crime = sequelize.define("Crime", {
    Crime_ID: {
      type: Sequelize.STRING
    },
    Case_Number: {
      type: Sequelize.STRING
    },
    Date: {
      type: Sequelize.STRING
    },
    Block: {
      type: Sequelize.STRING
    },
    IUCR: {
      type: Sequelize.STRING
    },
    PrimaryType: {
      type: Sequelize.STRING
    },
    Description: {
      type: Sequelize.STRING
    },
    LocationDescription: {
      type: Sequelize.STRING
    },
    Arrest: {
      type: Sequelize.STRING
    },
    Domestic: {
      type: Sequelize.STRING
    },
    Beat: {
      type: Sequelize.INTEGER
    },
    District: {
      type: Sequelize.INTEGER
    },
    Ward: {
      type: Sequelize.INTEGER
    },
    CommunityArea: {
      type: Sequelize.STRING
    },
    FBI_Code: {
      type: Sequelize.STRING
    },
    X_Coordinate: {
      type: Sequelize.STRING
    },
    Y_Coordinate: {
      type: Sequelize.STRING
    },
    Year: {
      type: Sequelize.INTEGER
    },
    Updated_On: {
      type: Sequelize.STRING
    },
    Lattitude: {
      type: Sequelize.STRING
    },
    Longitude: {
      type: Sequelize.STRING
    },
    Location: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.STRING
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.STRING
    }
  });
  return Crime;
};
