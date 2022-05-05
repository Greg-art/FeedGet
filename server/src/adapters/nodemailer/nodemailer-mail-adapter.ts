import nodemailer from 'nodemailer'
import { MailAdapter, SendMail } from '../mail-adapter'


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "45b99f8d97e38f",
    pass: "0d1c74319eb3d6"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMail) {
    
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Grégori Sabel <seriosabel57@gmail.com>',
    subject,
    html: body,
  })

  };
}