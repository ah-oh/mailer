import { createTransport, Transporter } from 'nodemailer';

import {
  MailerOptions,
  TransportType,
} from './interfaces/mailer-options.interface';
import { MailerTransportFactory as IMailerTransportFactory } from './interfaces/mailer-transport-factory.interface';
import { Inject } from '@nestjs/common';
import { MAILER_OPTIONS } from './constants/mailer.constant';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class MailerTransportFactory implements IMailerTransportFactory {
  constructor(
    @Inject(MAILER_OPTIONS)
    private readonly options: MailerOptions,
  ) {}

  public createTransport(
    opts?: TransportType,
  ): Transporter<SMTPTransport.SentMessageInfo> {
    return createTransport(
      opts || this.options.transport,
      this.options.defaults,
    );
  }
}
