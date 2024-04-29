import image1 from "@/public/chat1.jpg";
import image2 from "@/public/chat2.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Message {
  profile?: string;
  myMessenger: boolean;
  text: string;
  img?: string | StaticImport;
  file?: string;
  time: string;
}

export const MessageItems: Message[] = [
  {
    profile: "AS",
    myMessenger: false,
    img: image1,
    text: "",
    time: "11:46",
  },
  {
    myMessenger: true,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id atque corporis quasi exercitationem ea, debitis corrupti voluptatum quis?",
    time: "11:46",
  },
  {
    profile: "As",
    myMessenger: false,
    file: "Flowbite Terms & Conditions",
    text: "Lorem ipsum dolor consectetur adipisicing elit.",
    time: "11:48",
  },
  {
    myMessenger: true,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id atque corporis quasi exercitationem ea, debitis corrupti voluptatum quis? Magnam dolore tempora temporibus ut perferendis. Iste soluta adipisci culpa ipsam?",
    time: "11:40",
  },
  {
    profile: "AS",
    myMessenger: false,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id atque corporis quasi exercitationem ea",
    time: "11:40",
  },
  {
    myMessenger: true,
    img: image2,
    text: "debitis corrupti voluptatum quis? Magnam dolore tempora temporibus ut perferendis. Iste soluta adipisci culpa ipsam?",
    time: "11:52",
  },
];
