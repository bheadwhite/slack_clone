module.exports = {
  // user table:
  // first_name, last_name, phone_number, email, profile_img, role_id
  createUser: (req, res, next) => {
    const { given_name, family_name, picture, email } = req.body;
    const db = req.app.get("db");
    db.users
      .find({
        email: email
      })
      .then(resp => {
        if (resp.length > 0) {
          console.log("found user");
          return res.send(resp);
        } else {
          console.log("creating new user");
          db.users.save({
            first_name: given_name,
            last_name: family_name,
            profile_img: picture,
            email: email
          });
        }
        return res.send(resp);
      })
      .catch(e => console.log(e));
  }
};
