const { StatusCodes } = require('http-status-codes')
const sendMsg = require('@sendgrid/mail')
const Message = require('../model/messageModel')

const sendMessage = async (req, res) => {
  try {
    const { name, email, text } = req.body
    if (!name || !email || !text) {
      res.status(StatusCodes.BAD_REQUEST)
        .send(`<body style="background: #f8fafc;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #0f172a;">
    <div class="message-body" style="width: 80vw;
  max-width: 600px;
  background: #fff;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin: 6rem auto;">
      <div class="message-modal"><h3>Oops!! It seems you don't fill all fields. Please provide all credentials!</h3>
      <a href="/">Let's Go Back Home</a>
      </div>
    </div>
  </body>`)
    }

    await Message.create({ name: name, email: email, text: text })
    res.status(StatusCodes.CREATED).send(`<body style="background: #f8fafc;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #0f172a;">
    <div class="message-body" style="width: 80vw;
  max-width: 600px;
  background: #fff;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin: 6rem auto;">
      <div class="message-modal"><h3>Thanks a lot for taking your time to reach out to me. Please check your email for a quick update</h3>
      </div>
    </div>
  </body>`)
    sendMsg.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email, // Change to your recipient
      from: 'ayesiganobert@gmail.com', // Change to your verified sender
      subject: 'Thanks always',
      text: 'Thanks always!!! ',
      html: `<h4>Hey hello ${name} <br> I have received your email and I will get back to you soon. Thanks for taking your time to contact me</h4>`,
    }
    sendMsg
      .send(msg)
      .then(console.log('Email sent'))
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}
module.exports = sendMessage
