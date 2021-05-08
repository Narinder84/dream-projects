/** @format */

const sgMail = require('@sendgrid/mail');
export const sendMail = () => {
	sgMail.setApiKey(
		'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',
	);

	const msg = {
		to: 'getdev84@gmail.com', // Change to your recipient
		from: 'reacts414@gmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	sgMail
		.send(msg)
		.then((response) => {
			console.log(response[0].statusCode);
			console.log(response[0].headers);
		})
		.catch((error) => {
			console.error(error);
		});
};
