interface IMailTo {
  nome: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: String;
  attachment?: Array<string>;
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailSender{
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailSender {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.nome}: ${message.subject}`);
  }
}

export default EmailService;
