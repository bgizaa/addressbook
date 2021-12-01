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
    contact.emailAddress = contactRepository.lastName;

    return this.contactRepository.save(contact);
  }

  async getContactList(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async searchContact(phoneNumber: string): Promise<Contact> {
    return this.contactRepository.findOne(phoneNumber);
  }


  async deleteContact(phoneNumber: string): Promise<void> {
    await this.contactRepository.delete(phoneNumber);
  }
}
