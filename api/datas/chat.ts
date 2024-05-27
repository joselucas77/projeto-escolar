export interface Chat {
  id: number;
  profile: string;
  name: string;
  email: string;
  mensage: string;
}

export const ChatItems: Chat[] = [
  {
    id: 1,
    profile: "AS",
    name: "Ana Silva",
    email: "ana_silva@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 2,
    profile: "CP",
    name: "Carlos Pereira",
    email: "carlos_pereira@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 3,
    profile: "MF",
    name: "Mariana Ferreira",
    email: "mariana_ferreira@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 4,
    profile: "FO",
    name: "Felipe Oliveira  ",
    email: "felipe_oliveira@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 5,
    profile: "JS",
    name: "Juliana Santos",
    email: "juliana_santos@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 6,
    profile: "RC",
    name: "Ricardo Cunha",
    email: "ricardo_cunha@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 7,
    profile: "CL",
    name: "Camila Lima",
    email: "camila_lima@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 8,
    profile: "VM",
    name: "Vinícius Martins",
    email: "vinicius_martins@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 9,
    profile: "AA",
    name: "Aline Almeida",
    email: "aline_almeida@sie.com",
    mensage: "Olá 🖐",
  },
  {
    id: 10,
    profile: "LR",
    name: "Lucas Rodrigues",
    email: "lucas_rodrigues@sie.com",
    mensage: "Olá 🖐",
  },
];

export const ProfileItems: Chat[] = [];

export function getChatById(id: number): Chat | undefined {
  return ChatItems.find((chat) => chat.id === id);
}
