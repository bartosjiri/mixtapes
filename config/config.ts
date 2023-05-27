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
			'Sub Focus',
			'Kanine',
			'S.P.Y',
			'Netsky',
			'K Motionz',
			'Dimension',
			'Hybrid Minds',
			'Chase & Status',
			'1991',
			'Culture Shock'
		]
	},
	{
		id: '68TJszBgng5YP9WX2Q4b6F',
		image: 'cover_drive-by.jpg',
		genre: 'Rap & Hip-hop',
		artists: [
			'21 Savage',
			'Drake',
			'Kendrick Lamar',
			'Metro Boomin',
			'A$AP Rocky',
			'Night Lovell',
			'Kanye West',
			'Travis Scott',
			'Future'
		]
	},
	{
		id: '3ir9q6YFLiZsiviC112TUa',
		image: 'cover_walkman-and-rollerblades.jpg',
		genre: "80's Pop",
		artists: [
			'Alphaville',
			'Blondie',
			'Roxette',
			'Michael Jackson',
			'TOTO',
			'a-ha',
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
			'Meteor'
		]
	},
	{
		id: '3uWiCnd0AUr3oYvTDJXkuI',
		image: 'cover_mtv-generation.jpg',
		genre: "2000's Pop",
		artists: [
			'Britney Spears',
			'Madonna',
			'Eminem',
			'Shakira',
			'Christina Aguilera',
			'Kylie Minogue',
			'Nelly Furtado',
			'Justin Timberlake',
			'Gwen Stefani'
		]
	},
	{
		id: '1Xs4mQitJAjYDUaJX3Cphu',
		image: 'cover_nahodne-seskupeni-rostlin.jpg',
		genre: 'Czech indie',
		artists: [
			'něco něco',
			'Bert and Friends',
			'Ille',
			'Fallgrapp',
			'Neřvi mi do ucha',
			'Tolstoys',
			'Bad Karma Boy'
		]
	}
];
