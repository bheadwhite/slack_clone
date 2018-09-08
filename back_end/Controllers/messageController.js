module.exports = {
  getMessages: (req, res, next) => {
    console.log(req.method, req.path)
    const db = req.app.get('db');

    db.get_messages()
      .then(message => res.status(200).send(message))
      .catch(() => res.status(500).send());
  }
}