import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPaypalPayment";
import PayPal from "./paypal/PayPal";

// const payment: IPayPalPayment = new PayPal()
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner())
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago)

payment.paypalPayment()
payment.paypalReceive()