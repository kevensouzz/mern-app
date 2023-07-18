export type GetPartyDataType = [
  {
    title: string;
    author: string;
    budget: number;
    image: string;
    _id: string;
    services: [
      {
        name: string;
        price: number;
        _id: string;
      }
    ];
  }
];
