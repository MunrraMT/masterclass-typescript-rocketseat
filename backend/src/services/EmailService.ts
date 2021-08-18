interface IMailTo {
  name: string;
  lastName: string;
  email: string;
}

interface IMAilMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

class EmailService {
  sendMail(to: IMailTo, message: IMAilMessage) {
    console.log(
      `Email enviado para ${to.name} ${to.lastName}: ${message.subject}`,
    );
  }
}

export default EmailService;
