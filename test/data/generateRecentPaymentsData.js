import { faker } from "@faker-js/faker";
import { range, sample, uniqueId } from "lodash";

export function generateRecentPayment() {
  return {
    id: uniqueId(),
    amount: faker.finance.amount(800, 3500, 2),
    payment_method: sample(["card", "cash"]),
    payment_status: sample(["paid"]),
    tenantName: faker.name.fullName(),
  };
}

function generateRecentPaymentsData(numOfItems = 10) {
  return range(numOfItems).map(generateRecentPayment);
}

export default generateRecentPaymentsData;
