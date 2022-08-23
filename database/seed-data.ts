
interface SeedData {
    entries :SeedEntry [];
}

interface SeedEntry{
    description:string;
    status:string;
    createAt:number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "hola",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description: "hola",
      status: "in-progres",
      createAt: Date.now() - 100000,
    },
    {
      description: "hola",
      status: "finished",
      createAt: Date.now() - 10000000,
    },
  ],
};
