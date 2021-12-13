import {
  ConflictException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

    const contactInDb = await this.contactRepository.findOne(
      contact.phoneNumber,
    );

    if (contactInDb) throw new ConflictException('Contact already exists');

    return await this.contactRepository.save(contact);
  }

  async getContactList(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async searchContact(identifier: string): Promise<any> {
    if (identifier.match(/^[0-9]*$/))
      return this.contactRepository.findOne(identifier);

    return await this.contactRepository
      .createQueryBuilder('contact')
      .where('contact.firstName =:firstName', { firstName: identifier })
      .getMany();
  }

  async updateContact(firstName: string, updateDto: ContactDto) {
    await this.contactRepository.update(firstName, updateDto);
  }

  async deleteContact(firstName: string): Promise<void> {
    await this.contactRepository.delete(firstName);
  }

  async deleteAllContact(): Promise<void> {
    await this.contactRepository
      .createQueryBuilder()
      .delete()
      .from('contact')
      .execute();
  }
}
