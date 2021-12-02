import { ContactDto } from './dto/contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entity/contact.entity';
export declare class AppService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<Contact>);
    createContact(contactRepository: ContactDto): Promise<Contact>;
    getContactList(): Promise<Contact[]>;
    searchContact(firstName: string): Promise<Contact>;
    updateContact(firstName: string, updateDto: ContactDto): Promise<import("typeorm").UpdateResult>;
    deleteContact(firstName: string): Promise<void>;
}
