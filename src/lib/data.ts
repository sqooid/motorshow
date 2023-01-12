export type Model = {
  id: string;
  name: string;
  smallImage: string;
  largeImage: string;
  horsepower: number;
  cc: number;
  topSpeed: number;
  msrp: number;
};

export type Make = {
  id: string;
  name: string;
  models: Model[];
};

export const bikeList: Make[] = [
  {
    id: 'kawasaki',
    name: 'Kawasaki',
    models: [
      {
        id: 'ninja-300',
        name: 'Ninja 300',
        smallImage:
          'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/15EX300B_44SLIMDRS2CG_C.png',
        largeImage:
          'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/15EX300B_44SLIMDRS2CG_C.png',
        horsepower: 39,
        cc: 296,
        topSpeed: 180,
        msrp: 6399
      },
      {
        id: 'ninja-400',
        name: 'Ninja 400',
        smallImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/12000/00754628-840c-4f37-ba8b-65a6abf39433.png',
        largeImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/12000/00754628-840c-4f37-ba8b-65a6abf39433.png',
        horsepower: 49,
        cc: 399,
        topSpeed: 160,
        msrp: 8300
      }
    ]
  }
];

/**
 * Find model info of a bike given id of make and model
 * @param make Id of make
 * @param model Id of model
 * @returns Model info
 */
export const findByIds = (make: string, model: string): Model | null => {
  return bikeList.find((m) => m.id === make)?.models.find((m) => m.id === model) || null;
};
