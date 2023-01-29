import { CompaniesAddress } from "./companyAddress.entity"
import { CompaniesContact } from "./companyContact.entity"

export class Company {
    name: string
    contact: CompaniesContact
    address: CompaniesAddress
    is_active?: boolean
}
