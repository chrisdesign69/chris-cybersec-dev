import nodemailer from 'nodemailer'

const contactAPI = async (req, res) => {

const { name, email } = req.body

//nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: process.env.nm_host,
    port: 465,
    secure: true,
    auth: {
        user: process.env.nm_user,
        pass: process.env.nm_pass
    },
    debug: true,
    logger: true
})

const options = {
    from: 'me@chris-cybersec.dev',
    to: 'me@chris-cybersec.dev',
    subject: 'Hey Chris - new Contact for you',
    text: `pls contact ${name} at ${email}.`,
    html: `User: ${name}`,
    html: `Email: ${email}`
}

try {
    const emailData = await transporter.sendMail(options)
    console.log(`Message sent with ${emailData.messageId}`);
} catch (error) {
    console.log(`error sending....${error}`)
}

}
export default contactAPI;
