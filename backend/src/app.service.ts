import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entity/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async createContact(contactRepository: ContactDto): Promise<Contact> {
    const contact = new Contact();
    contact.phoneNumber = contactRepository.phoneNumber;
    contact.firstName = contactRepository.firstName;
    contact.lastName = contactRepository.lastName;
    contact.emailAddress = contactRepository.emailAddress;

    return this.contactRepository.save(contact);
  }

  async getContactList(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async searchContact(firstName: string): Promise<Contact> {
    return this.contactRepository.findOne(firstName);
  }


  async updateContact(firstName: string, updateDto: ContactDto){
    return this.contactRepository.update(firstName,updateDto);
  }



  async deleteContact(firstName: string): Promise<void> {
    await this.contactRepository.delete(firstName);
  }
}
