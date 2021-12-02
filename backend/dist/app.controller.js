"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const contact_dto_1 = require("./dto/contact.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getContactList() {
        return this.appService.getContactList();
    }
    search(firstName) {
        return this.appService.searchContact(firstName);
    }
    createContact(createContact) {
        return this.appService.createContact(createContact);
    }
    update(firstName, updateContact) {
        return this.appService.updateContact(firstName, updateContact);
    }
    deleteContact(firstName) {
        return this.appService.deleteContact(firstName);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get List of Contacts' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getContactList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search contact by First Name' }),
    (0, common_1.Get)(':firstName'),
    __param(0, (0, common_1.Param)('firstName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create New Contact' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.ContactDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createContact", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update existing Contact using first name' }),
    (0, common_1.Patch)(':firstName'),
    __param(0, (0, common_1.Param)('firstName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contact_dto_1.ContactDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Existing Contact using first name' }),
    (0, common_1.Delete)(':firstName'),
    __param(0, (0, common_1.Param)('firstName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteContact", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('Contacts'),
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map