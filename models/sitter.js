module.exports = function(sequelize, DataTypes) {
  var Sitter = sequelize.define("Sitter", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: "Email address is already in use."
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
        isAlphanumeric: true
      }
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    knowsCPR: {
      type: DataTypes.BOOLEAN
    },
    petsOK: {
      type: DataTypes.BOOLEAN
    },
    hasReferences: {
      type: DataTypes.BOOLEAN
    },
    hasTransportation: {
      type: DataTypes.BOOLEAN
    },
    comments: {
      type: DataTypes.TEXT,
      len: [1]
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5, 5],
        inInt: true
      }
    },
    daySelected: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Sitter;
};
