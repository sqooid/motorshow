export type Model = {
	id: string;
	name: string;
	mainImage: string;
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
				mainImage:
					'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/15EX300B_44SLIMDRS2CG_C.png',
				horsepower: 39,
				cc: 296,
				topSpeed: 180,
				msrp: 6399
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
