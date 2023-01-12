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
      },
      {
        id: 'ninja-650',
        name: 'Ninja 650',
        smallImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/12035/98efeea6-ae2b-4aa6-8c70-d2f2ea2b4122.jpg',
        largeImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/12035/98efeea6-ae2b-4aa6-8c70-d2f2ea2b4122.jpg',
        horsepower: 49,
        cc: 399,
        topSpeed: 160,
        msrp: 8300
      },
      {
        id: 'z400',
        name: 'Z400',
        smallImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/11990/53e562f9-ac91-4026-845a-05e96b73048c.png',
        largeImage:
          'https://content2.kawasaki.com/ContentStorage/KMA/Products/11990/53e562f9-ac91-4026-845a-05e96b73048c.png',
        horsepower: 49,
        cc: 399,
        topSpeed: 160,
        msrp: 8300
      },
      {
        id: 'z650',
        name: 'Z650',
        smallImage:
          'https://content2.kawasaki.com/contentstorage/KMA/Enhanced360/45/GY1/l_size/0_15.jpg',
        largeImage:
          'https://content2.kawasaki.com/contentstorage/KMA/Enhanced360/45/GY1/l_size/0_15.jpg',
        horsepower: 49,
        cc: 399,
        topSpeed: 160,
        msrp: 8300
      }
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    models: [
      {
        id: 'gsx-s125',
        name: 'GSX-S125',
        smallImage:
          'https://www.suzukimotorcycles.com.au/wp-content/uploads/2021/06/GSX-S125XAM1_YVU_Right-915x612.jpg',
        largeImage:
          'https://www.suzukimotorcycles.com.au/wp-content/uploads/2022/07/GSX-S125XAM1_RunOut_Offer.jpg',
        horsepower: 0,
        cc: 125,
        topSpeed: 0,
        msrp: 5440
      },
      {
        id: 'sv650',
        name: 'SV650',
        smallImage:
          'https://www.suzukimotorcycles.com.au/wp-content/uploads/2022/12/SV650AM3_BTH_Right.jpg',
        largeImage:
          'https://www.suzukimotorcycles.com.au/wp-content/uploads/2022/12/SV650AM3_BTH_Right.jpg',
        horsepower: 0,
        cc: 125,
        topSpeed: 0,
        msrp: 5440
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
