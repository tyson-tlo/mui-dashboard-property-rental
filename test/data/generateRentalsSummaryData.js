import { faker } from "@faker-js/faker";
import { random, range, sample, shuffle, uniqueId } from "lodash";

const americanCities = [
  { city: "New York", state: "NY" },
  { city: "Los Angeles", state: "CA" },
  { city: "Chicago", state: "IL" },
  { city: "Houston", state: "TX" },
  { city: "Philadelphia", state: "PA" },
  { city: "Phoenix", state: "AZ" },
  { city: "San Antonio", state: "TX" },
  { city: "San Diego", state: "CA" },
  { city: "Dallas", state: "TX" },
  { city: "San Jose", state: "CA" },
  { city: "Austin", state: "TX" },
  { city: "Jacksonville", state: "FL" },
  { city: "San Francisco", state: "CA" },
  { city: "Columbus", state: "OH" },
  { city: "Fort Worth", state: "TX" },
  { city: "Charlotte", state: "NC" },
  { city: "Detroit", state: "MI" },
  { city: "El Paso", state: "TX" },
  { city: "Memphis", state: "TN" },
  { city: "Seattle", state: "WA" },
  { city: "Denver", state: "CO" },
  { city: "Washington", state: "DC" },
  { city: "Boston", state: "MA" },
  { city: "Nashville", state: "TN" },
  { city: "Baltimore", state: "MD" },
  { city: "Oklahoma City", state: "OK" },
  { city: "Louisville", state: "KY" },
  { city: "Portland", state: "OR" },
  { city: "Las Vegas", state: "NV" },
  { city: "Milwaukee", state: "WI" },
  { city: "Albuquerque", state: "NM" },
  { city: "Tucson", state: "AZ" },
  { city: "Fresno", state: "CA" },
  { city: "Sacramento", state: "CA" },
  { city: "Long Beach", state: "CA" },
  { city: "Kansas City", state: "MO" },
  { city: "Mesa", state: "AZ" },
  { city: "Atlanta", state: "GA" },
  { city: "Virginia Beach", state: "VA" },
  { city: "Omaha", state: "NE" },
  { city: "Colorado Springs", state: "CO" },
  { city: "Raleigh", state: "NC" },
  { city: "Miami", state: "FL" },
  { city: "Oakland", state: "CA" },
  { city: "Minneapolis", state: "MN" },
  { city: "Tulsa", state: "OK" },
  { city: "Cleveland", state: "OH" },
  { city: "Wichita", state: "KS" },
  { city: "Arlington", state: "TX" },
  { city: "New Orleans", state: "LA" },
  { city: "Bakersfield", state: "CA" },
  { city: "Tampa", state: "FL" },
  { city: "Honolulu", state: "HI" },
  { city: "Aurora", state: "CO" },
  { city: "Anaheim", state: "CA" },
  { city: "Santa Ana", state: "CA" },
  { city: "St. Louis", state: "MO" },
  { city: "Riverside", state: "CA" },
  { city: "Corpus Christi", state: "TX" },
  { city: "Pittsburgh", state: "PA" },
  { city: "Anchorage", state: "AK" },
  { city: "Stockton", state: "CA" },
  { city: "Cincinnati", state: "OH" },
  { city: "St. Paul", state: "MN" },
  { city: "Toledo", state: "OH" },
  { city: "Greensboro", state: "NC" },
  { city: "Newark", state: "NJ" },
  { city: "Plano", state: "TX" },
  { city: "Henderson", state: "NV" },
  { city: "Lincoln", state: "NE" },
  { city: "Orlando", state: "FL" },
];

function setUnitNumber(unitNumber) {
  const floorNumber = Math.floor(unitNumber / 10) + 1;

  if (unitNumber % 10 === 0) {
    return `${floorNumber}01`;
  }

  if (unitNumber % 10 === 9) {
    return `${floorNumber}10`;
  }

  return `${floorNumber}0${(unitNumber % 10) + 1}`;
}

const maintenanceTasks = [
  "Replace lightbulb",
  "Replace faucet",
  "Replace toilet",
  "Replace showerhead",
  "Replace door handle",
  "Replace door lock",
  "Replace doorbell",
  "Replace smoke detector",
  "Replace thermostat",
  "Replace air filter",
  "Replace garbage disposal",
  "Replace kitchen faucet",
  "Replace kitchen sink",
  "Replace kitchen cabinet",
  "Replace kitchen countertop",
  "Replace kitchen backsplash",
  "Replace kitchen appliance",
  "Replace kitchen light fixture",
  "Replace kitchen faucet",
  "Replace bathroom faucet",
  "Replace bathroom sink",
  "Replace bathroom cabinet",
  "Replace bathroom countertop",
  "Replace bathroom backsplash",
  "Replace bathroom appliance",
  "Replace bathroom light fixture",
  "Replace bedroom light fixture",
  "Replace bedroom door",
  "Replace bedroom closet",
  "Replace bedroom window",
];

function generateUnitRequest(task) {
  return {
    id: uniqueId(),
    description: task,
    status: sample(["Pending", "In Progress", "Completed"]),
  };
}

function generateUnitData(unit, index) {
  return {
    id: uniqueId(),
    name: `Unit ${setUnitNumber(unit)}`,
    meta: faker.lorem.sentence(),
    bedrooms: sample([0, 1, 2, 3]),
    bathrooms: sample([1, 1.5, 2, 2.5]),
    appliances: sample([
      ["Refrigerator", "Stove", "Dishwasher", "Microwave"],
      ["Refrigerator", "Stove", "Dishwasher"],
      ["Refrigerator", "Stove", "Microwave"],
      ["Refrigerator", "Stove"],
    ]),
    rent: `$ ${random(500, 2000).toFixed(2)}`,
    status: sample(["Vacant", "Occupied"]),
    requests: shuffle(maintenanceTasks)
      .slice(0, random(0, 5))
      .map(generateUnitRequest),
  };
}

function generateApplicationData() {
  return {
    id: uniqueId(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    status: sample(["Pending", "Approved", "Rejected"]),
  };
}

function setBasicData(_, index) {
  return {
    id: index + 1,
    name: `The residences at ${americanCities[index].city}`,
    city: americanCities[index].city,
    state: americanCities[index].state,
    units: range(random(5, 100)).map(generateUnitData),
    applications: range(random(0, 15)).map(generateApplicationData),
    requests: random(0, 15),
    tasks: random(0, 15),
    image: `http://placeimg.com/640/640/city`,
  };
}

function setLocationAttribute(property) {
  const location = `${property.city} ${property.state}`;

  return { ...property, location };
}

export function generateRentalData() {
  return [setBasicData(null, random(0, americanCities.length - 1))].map(
    setLocationAttribute
  )[0];
}

export default function generateRentalsSummaryData(numOfItems = 10) {
  if (numOfItems > americanCities.length) {
    throw new Error(
      `number of items passed into 'generateRentalsSummaryData' must be less than ${americanCities.length}`
    );
  }

  return range(numOfItems).map(setBasicData).map(setLocationAttribute);
}
