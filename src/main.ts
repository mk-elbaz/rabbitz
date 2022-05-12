import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const sgMail = require('@sendgrid/mail')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'darkshadow61944@hotmail.com', // Change to your recipient
    from: 'mk.elbaz9248@gmail.com', // Change to your verified sender
    subject: 'bgarrab',
    text: 'and easy to do anywhere, even with Node.js blablabla',
    html: '<strong>and easy to do anywhere, even with Node.js blaaaaaaaa</strong>',
  }

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })

}
bootstrap();
