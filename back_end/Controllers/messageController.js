module.exports = {
  getMessages: (req, res, next) => {
    console.log(req.method, req.path)
    const db = req.app.get('db');

    db.get_messages()
      .then(message => res.status(200).send(message))
      .catch(() => res.status(500).send());
  },

  addMessage: (req, res, next) => {
    console.log(req.method, req.path)
    const db = req.app.get('db')
    const { message, message_date, user_id, channel_id } = req.body

    db.add_message([ message, message_date, user_id, channel_id ])
			.then(() => res.status(200).send('ok'))
			.catch((err) => res.status(500).send(err.message))
  }
}

