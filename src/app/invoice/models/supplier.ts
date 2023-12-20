import { Client } from "./client";
import { Invoice } from "./invoice";

export class Supplier extends Client {
    accountNumber: string;
    invoiceList: Invoice[];
    constructor(bankAccountNumber: string) {
        super();
        this.accountNumber=bankAccountNumber;
        this.invoiceList = new Array<Invoice>();
    }
}
