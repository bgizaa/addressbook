import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Contact } from './entity/contact.entity';
import { AppService } from './modules/contact/contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
