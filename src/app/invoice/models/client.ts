export class Client {
    companyName: string = "";
    NIP: string= "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    apartmentNumber: string = "";
    postcode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true;
    
    constructor() {
    }

    action(){
        return this.companyName +" "+ this.city +" "+ this.street +" "+ this.houseNumber +" "+ this.postcode;
    }
}
