const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const sendMailToContacts = (user, message, subject) => {
	console.log('got here')
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: true,
		port: 25,
		auth: {
			user: 'otulouisakhigbe@gmail.com',
			pass: 'lou2talk22',
		},
		tls: {
			rejectUnauthorized: false,
		},
	});
	const mailOptions = {
		from: '"noreply"<otulouisakhigbe@gmail.com>',
		to: user,
		subject,
		text: message,
	};
	return transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error)
			return (false);
		}
			return (true);
	});
};


app.get('/', (req, res) => {
	sendMailToContacts('anyaetim@gmail.com', 'how are you doing', 'Test')
})
app.listen(3000, () => {
	console.log('app is running')
})