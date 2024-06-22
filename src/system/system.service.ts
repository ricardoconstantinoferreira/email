import { Injectable } from '@nestjs/common';
import { CreateSystemDto } from './dto/create-system.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { System } from './schemas/system.schema';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SystemService {

  constructor(
    @InjectModel(System.name) private readonly systemModel: Model<System>
  ) {}

  async create(createSystemDto: CreateSystemDto): Promise<System> {
    const system = await this.systemModel.create(createSystemDto);
    this.sendEmail(createSystemDto);

    return system;
  }

  sendEmail(createSystemDto: CreateSystemDto) {
    const { name, project, email, message } = createSystemDto;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      }
    });

    const mailOptions = {
      from: 'sender@email.com.br',
      to: email,
      suject: project,
      html: `<h1>${message}</h1>
      <p>${name}</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Follow errors: ");
        console.log(err);
      } else {
        console.log("Follow infos: ");
        console.log(info);
      }
    });
  }

}
