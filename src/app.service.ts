import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) { }

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'Hello BAZ',
        },
      ],
    });
    return 'It worked!';
  }

  async getHello2() {
    await this.producerService.produce({
      topic: 'ble3',
      messages: [
        {
          value: 'Hello abdo',
        },
      ],
    });
    return 'It worked!';
  }

  
}
