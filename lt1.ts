interface PaymentMethod {
    methodName: string;
    pay(amout:number): void;

} 
class CreditCardPayment implements PaymentMethod{
    methodName: string;
    cardNumber: string;

    constructor(cardNumber: string){
        this.methodName = "ชำระเงิน";
        this.cardNumber = cardNumber;
    }

    pay(amout:number): void{
        console.log(`ชำระเงิน ${amout} บาท โดยใช้บัตรเครดิตหมายเลข ${this.cardNumber}`);

    }
}

const myCardPayment = new CreditCardPayment("1234-5678-9012-3456")
myCardPayment.pay(1500);