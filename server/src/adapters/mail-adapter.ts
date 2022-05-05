export interface SendMail{
  subject: string;
  body: string
}

export interface MailAdapter {
  sendMail: (data: SendMail) => Promise<void>;
}