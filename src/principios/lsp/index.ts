import CreditCard from "./cards/CreditCard";
import DebitCard from "./cards/DebitCard";
import NubankRewards from "./cards/NubankReward";

const creditCard = new CreditCard()
const debitCard = new DebitCard()
const rewards = new NubankRewards()

// creditCard.validate()
// creditCard.collectPayment()

// debitCard.validate()
// debitCard.collectPayment()

rewards.validate()
rewards.collectPayment()