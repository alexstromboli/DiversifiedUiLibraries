export class City
{
	name: string;
	province: string;
	population: number;
};

export class List
{
	cities: City[];
}

const Data: City[] =
[
	{ name: 'Toronto', province: 'Ontario', population: 5429524 },
	{ name: 'Montreal', province: 'Quebec', population: 3519595 },
	{ name: 'Vancouver', province: 'British Columbia', population: 2264823 },
	{ name: 'Calgary', province: 'Alberta', population: 1237656 },
	{ name: 'Edmonton', province: 'Alberta', population: 1062643 }
];

export { Data };
