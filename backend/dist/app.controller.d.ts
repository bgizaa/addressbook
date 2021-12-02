import { AppService } from './app.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './entity/contact.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getContactList(): Promise<Contact[]>;
    search(firstName: string): Promise<Contact>;
    createContact(createContact: ContactDto): Promise<Contact>;
    update(firstName: string, updateContact: ContactDto): Promise<import("typeorm").UpdateResult>;
    deleteContact(firstName: string): Promise<void>;
}
