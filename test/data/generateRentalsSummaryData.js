import { random, range, sample } from "lodash";

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

function setBasicData(_, index) {
  return {
    id: index + 1,
    name: `The residences at ${americanCities[index].city}`,
    city: americanCities[index].city,
    state: americanCities[index].state,
    units: random(10, 200),
    applications: random(0, 15),
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
