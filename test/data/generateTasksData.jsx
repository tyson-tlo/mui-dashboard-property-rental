import { random, range, sample, uniqueId } from "lodash";
import { faker } from "@faker-js/faker";
import { BeachAccess, Image, Work } from "@mui/icons-material";

function RandomImage() {
  const icons = [<Image />, <Work />, <BeachAccess />];

  return sample(icons);
}

// list of tasks with a uuid, name, description, assignedTo, dueDate as a string, priority, and status
function generateTask() {
  return {
    id: uniqueId(),
    icon: <RandomImage />,
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    assignedTo: `${faker.name.firstName()} ${faker.name.lastName()}`,
    dueDate: faker.date.future().toDateString(),
    priority: random(1, 5),
    status: sample(["New", "In Progress", "Completed", "On Hold", "Cancelled"]),
    images: range(5).map(() => "https://picsum.photos/200/300"), // generate 5 images
    property: {
      id: uniqueId(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      manager: {
        id: uniqueId(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        phone: faker.phone.number(),
      },
    },
  };
}

export default function generateTasksData(numOfItems = 10) {
  return range(numOfItems).map(generateTask);
}
