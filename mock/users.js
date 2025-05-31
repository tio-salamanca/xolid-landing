const users = [
  {
    id: 1,
    name: "Ana Pérez",
    xolid: 1500,
    actions: [
      { type: "course", title: "Blockchain Basics", date: "2023-05-15", xolid: 500 },
      { type: "donation", cause: "Reforestación", date: "2023-06-20", xolid: 1000 }
    ]
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    xolid: 800,
    actions: [
      { type: "quiz", title: "Cripto 101", date: "2023-07-10", xolid: 300 },
      { type: "volunteer", organization: "Banco de Alimentos", date: "2023-08-05", xolid: 500 }
    ]
  }
];

export default users;
