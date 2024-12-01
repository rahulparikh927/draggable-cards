import { http, HttpResponse } from "msw";
import { CardType } from "../types";

const initialData: CardType[] = [
  {
    type: "bank-draft",
    title: "Bank Draft",
    position: 0,
    image: "images/cats/1.png",
  },
  {
    type: "bill-of-lading",
    title: "Bill of Lading",
    position: 1,
    image: "images/cats/2.png",
  },
  {
    type: "invoice",
    title: "Invoice",
    position: 2,
    image: "images/cats/3.png",
  },
  {
    type: "bank-draft-2",
    title: "Bank Draft 2",
    position: 3,
    image: "images/cats/4.png",
  },
  {
    type: "bill-of-lading-2",
    title: "Bill of Lading 2",
    position: 4,
    image: "images/cats/5.png",
  },
];

export const handlers = [
  http.get("/api/cards", () => {
    return HttpResponse.json(initialData);
  }),
];
