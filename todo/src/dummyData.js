import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title:  "AM",
    tasks: [
      {
        id: uuidv4(),
        title: "programming",
      },
      {
        id: uuidv4(),
        title: "うんこ",
      },
      {
        id: uuidv4(),
        title: "dinner",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "PM",
    tasks: [
      {
        id: uuidv4(),
        title: "lunch",
      },
      {
        id: uuidv4(),
        title: "programming2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "END",
    tasks: [
      {
        id: uuidv4(),
        title: "programming3",
      },
    ],
  },
];

export default dummyData;