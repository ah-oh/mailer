import { TransportType } from './mailer-options.interface';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface MailerTransportFactory {
  createTransport(
    opts?: TransportType,
  ): Transporter<SMTPTransport.SentMessageInfo>;
}
