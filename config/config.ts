export type UserConfigT = {
	id: string;
};

export const userConfig: UserConfigT = {
	id: '21gi2l2todfet7ujsdtofnn5y'
};

export type PlaylistConfigT = {
	id: string;
	name?: string;
	image?: string;
	genre: string;
	artists: string[];
};

export const playlistsConfig: PlaylistConfigT[] = [
	{
		id: '4P7X2ikiccvt9TzkgFTJgw',
		image: 'cover_lelekovo-drum-and-bass.jpg',
		genre: 'Drum & Bass',
		artists: [
			'Dimension',
			'Wilkinson',
			'Sub Focus',
			'Netsky',
			'Culture Shock',
			'Cyantific',
			'The Prototypes',
			'S.P.Y',
			'Black Sun Empire',
			'Tantrum Desire'
		]
	},
	{
		id: '68TJszBgng5YP9WX2Q4b6F',
		image: 'cover_drive-by.jpg',
		genre: 'Rap & Hip-hop',
		artists: [
			'A$AP Rocky',
			'Future',
			'21 Savage',
			'Drake',
			'Night Lovell',
			'Lil Baby',
			'Travis Scott',
			'Migos',
			'Kendrick Lamar',
			'Post Malone'
		]
	},
	{
		id: '3ir9q6YFLiZsiviC112TUa',
		image: 'cover_walkman-and-rollerblades.jpg',
		genre: "80's Pop",
		artists: [
			'Roxette',
			'a-ha',
			'Blondie',
			'TOTO',
			'Michael Jackson',
			'Alphaville',
			'The buggles',
			'New Order',
			'Aneka',
			'Electric Light Orchestra'
		]
	},
	{
		id: '1OY4LppftzXqXF1pNqqEir',
		image: 'cover_vhs-dreams.jpg',
		genre: 'Retrowave',
		artists: [
			'Carpenter Brut',
			'Kavinsky',
			'Lazerhawk',
			'Mega Drive',
			'Power Glove',
			'Botnit',
			'Tokyo Rose',
			'Pertrubator',
			'Dance with the dead',
			'Meteor'
		]
	},
	{
		id: '3uWiCnd0AUr3oYvTDJXkuI',
		genre: "2000's Pop",
		artists: [
			'Atomic Kitten',
			'Madonna',
			'Kylie Minogue',
			'Rihanna',
			't.A.T.u.',
			'Eminem',
			'Sugababes',
			'Nelly Furtado',
			'TLC',
			'Shakira'
		]
	}
];
