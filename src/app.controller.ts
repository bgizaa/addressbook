import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './entity/contact.entity';

@Controller('contacts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getContactList() : Promise<Contact[]>{
    return this.appService.getContactList();
  }

  @Get(':phoneNumber')
  search(@Param('phoneNumber') phoneNumber: string) : Promise<Contact>  {
    return this.appService.searchContact(phoneNumber);
  }

  @Post()
  createContact(@Body() createContact: ContactDto): Promise<Contact> {
    return this.appService.createContact(createContact);
  }

  @Patch(':phoneNumber')
  update(@Param('phoneNumber') phoneNumber: string, @Body() updateContact: ContactDto) {
    return this.appService.updateContact(phoneNumber, updateContact);
  }

  @Delete(':phoneNumber')
  deleteContact(@Param('phoneNumber') phoneNumber: string) {
    return this.appService.deleteContact(phoneNumber);
  }
}
