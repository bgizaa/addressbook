import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './entity/contact.entity';

@ApiTags('Contacts')
@Controller('contacts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Get List of Contacts' })
  @Get()
  getContactList() : Promise<Contact[]>{
    return this.appService.getContactList();
  }

  @ApiOperation({ summary: 'Search contact by First Name' })
  @Get(':firstName')
  search(@Param('firstName') firstName: string) : Promise<Contact>  {
    return this.appService.searchContact(firstName);
  }

  @ApiOperation({ summary: 'Create New Contact' })
  @Post()
  createContact(@Body() createContact: ContactDto): Promise<Contact> {
    return this.appService.createContact(createContact);
  }

  @ApiOperation({ summary: 'Update existing Contact using first name' })
  @Patch(':firstName')
  update(@Param('firstName') firstName: string, @Body() updateContact: ContactDto) {
    return this.appService.updateContact(firstName, updateContact);
  }

  @ApiOperation({ summary: 'Delete Existing Contact using first name' })
  @Delete(':firstName')
  deleteContact(@Param('firstName') firstName: string) {
    return this.appService.deleteContact(firstName);
  }

  @Delete()
  deleteAllContact(){
    return this.appService.deleteAllContact();
  }
}
