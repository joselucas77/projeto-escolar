export type SexType = "masculino" | "feminino";
export type Status = "aprovado" | "reprovado" | "pendente";

export interface Person {
  id: number;
  profile: string;
  name: string;
  surname: string;
  age: string;
  sex: SexType;
  status: Status;
}

export const Persons: Person[] = [
  {
    id: 1,
    profile: "string",
    name: "José",
    surname: "Lucas",
    age: "21",
    sex: "masculino",
    status: "aprovado",
  },
  {
    id: 2,
    profile: "string",
    name: "Ana",
    surname: "Silva",
    age: "25",
    sex: "feminino",
    status: "aprovado",
  },
  {
    id: 3,
    profile: "string",
    name: "Carlos",
    surname: "Pereira",
    age: "30",
    sex: "masculino",
    status: "pendente",
  },
  {
    id: 4,
    profile: "string",
    name: "Mariana",
    surname: "Ferreira",
    age: "28",
    sex: "feminino",
    status: "reprovado",
  },
  {
    id: 5,
    profile: "string",
    name: "Felipe",
    surname: "Oliveira",
    age: "24",
    sex: "masculino",
    status: "aprovado",
  },
  {
    id: 6,
    profile: "string",
    name: "Juliana",
    surname: "Santos",
    age: "27",
    sex: "feminino",
    status: "pendente",
  },
  {
    id: 7,
    profile: "string",
    name: "Ricardo",
    surname: "Cunha",
    age: "32",
    sex: "masculino",
    status: "reprovado",
  },
  {
    id: 8,
    profile: "string",
    name: "Camila",
    surname: "Lima",
    age: "23",
    sex: "feminino",
    status: "aprovado",
  },
  {
    id: 9,
    profile: "string",
    name: "Vinícius",
    surname: "Martins",
    age: "29",
    sex: "masculino",
    status: "pendente",
  },
  {
    id: 10,
    profile: "string",
    name: "Aline",
    surname: "Almeida",
    age: "26",
    sex: "feminino",
    status: "reprovado",
  },
  {
    id: 11,
    profile: "string",
    name: "Lucas",
    surname: "Rodrigues",
    age: "31",
    sex: "masculino",
    status: "aprovado",
  },
  {
    id: 12,
    profile: "string",
    name: "Fernanda",
    surname: "Nunes",
    age: "22",
    sex: "feminino",
    status: "pendente",
  },
  {
    id: 13,
    profile: "string",
    name: "Gustavo",
    surname: "Gomes",
    age: "27",
    sex: "masculino",
    status: "reprovado",
  },
  {
    id: 14,
    profile: "string",
    name: "Natália",
    surname: "Costa",
    age: "25",
    sex: "feminino",
    status: "aprovado",
  },
  {
    id: 15,
    profile: "string",
    name: "Pedro",
    surname: "Sousa",
    age: "28",
    sex: "masculino",
    status: "pendente",
  },
  {
    id: 16,
    profile: "string",
    name: "Larissa",
    surname: "Mendes",
    age: "24",
    sex: "feminino",
    status: "reprovado",
  },
  {
    id: 17,
    profile: "string",
    name: "Rafael",
    surname: "Oliveira",
    age: "29",
    sex: "masculino",
    status: "aprovado",
  },
  {
    id: 18,
    profile: "string",
    name: "Isabela",
    surname: "Santana",
    age: "26",
    sex: "feminino",
    status: "pendente",
  },
  {
    id: 19,
    profile: "string",
    name: "Thiago",
    surname: "Lopes",
    age: "30",
    sex: "masculino",
    status: "reprovado",
  },
  {
    id: 20,
    profile: "string",
    name: "Gabriela",
    surname: "Pereira",
    age: "23",
    sex: "feminino",
    status: "aprovado",
  },
];

export function getStudentById(id: number): Person | undefined {
  return Persons.find((student) => student.id === id);
}
