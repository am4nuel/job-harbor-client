module.exports = (sequelize, dataTypes) => {
  const Users = sequelize.define("Users", {
    firstName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};
