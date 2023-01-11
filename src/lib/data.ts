export type BikeInfo = {
	name: string;
	mainImage: string;
	horsepower: number;
	cc: number;
	topSpeed: number;
	msrp: number;
};

export type BikeList = {
	[make: string]: {
		[model: string]: BikeInfo;
	};
};

export const bikeList: BikeList = {
	Kawasaki: {
		'ninja-300': {
			name: 'Ninja 300',
			mainImage:
				'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/15EX300B_44SLIMDRS2CG_C.png',
			horsepower: 39,
			cc: 296,
			topSpeed: 180,
			msrp: 6399
		}
	}
};
