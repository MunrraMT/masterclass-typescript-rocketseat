type IMailTo = {
  name: string;
  lastName: string;
  email: string;
};

type IMAilMessage = {
  subject: string;
  body: string;
  attachment?: string[];
};

type IMessageDTO = {
  to: IMailTo;
  message: IMAilMessage;
};

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(
      `Email enviado para ${to.name} ${to.lastName}: ${message.subject}`,
    );
  }
}

export default EmailService;
