import {
  ConflictException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { _404 } from 'src/common/error.constants';
import { Contact } from 'src/entity/contact.entity';
import { ContactDto } from 'src/dto/contact.dto';

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
    let contact;

    /**
     * return a single occurence when identifier is a phone Number
     */
    if (identifier.match(/^[0-9]*$/)) {
      contact = await this.contactRepository.findOne(identifier);
    } else
    /**
     * return all occurences when identifier is the first Name
     */
      contact = await this.contactRepository
        .createQueryBuilder('contact')
        .where('contact.firstName =:firstName', { firstName: identifier })
        .getMany();

    if (contact.length === 0 || undefined)
      throw new NotFoundException(_404.CONTACT_NOT_FOUND);
    return contact;
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
