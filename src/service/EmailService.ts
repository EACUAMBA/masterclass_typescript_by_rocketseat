interface IMailTo {
  nome: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: String;
  attachment?: Array<string>;
}
class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.nome}: ${message.subject}`);
  }
}

export default EmailService;
