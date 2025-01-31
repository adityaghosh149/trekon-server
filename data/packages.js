const packages = [
	{
		id: 1, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass Trek",
		description:
			"A thrilling trek that takes you through lush green valleys, alpine forests, and rocky terrains, leading you to the breathtaking Hampta Pass.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Manali, Himachal Pradesh",
		isSponsored: true,
		price: "8000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/hampta-pass.jpg",
		trekDays: [
			{
				title: "Day 1-2: Arrival in Manali and Drive to Jobra, Trek to Chika",
				description:
					"Arrive in Manali, take a scenic drive to Jobra, and start the trek to Chika, with stunning views of the surrounding mountains.",
				icon: "bus",
			},
			{
				title: "Day 3-4: Trek to Balu ka Ghera",
				description:
					"Trek to Balu ka Ghera, crossing streams and walking through lush meadows. The views of snow-capped peaks are incredible along the way.",
				icon: "hiking",
			},
			{
				title: "Day 5: Summit Hampta Pass and Trek to Shea Goru",
				description:
					"Summit the Hampta Pass, and descend towards Shea Goru, with spectacular panoramic views of the valleys and snow-capped peaks.",
				icon: "summit",
			},
			{
				title: "Day 6-7: Trek to Chandratal and Drive to Manali",
				description:
					"Trek towards Chandratal, a high-altitude lake, and then drive back to Manali, concluding the trek.",
				icon: "lake",
			},
		],
		sherpa: {
			name: "Karma Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of guiding treks in Himachal Pradesh",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 2, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers Trek",
		description:
			"Explore the colorful meadows and lush landscapes of the Valley of Flowers, a UNESCO World Heritage Site.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "12",
		difficulty: "Easy",
		startingPoint: "Haridwar, Uttarakhand",
		isSponsored: false,
		price: "7000",
		availableSlots: "5",
		bookingDeadline: "2025-02-01",
		coverImage: "https://example.com/valley-of-flowers.jpg",
		trekDays: [
			{
				title: "Day 1-2: Haridwar to Govindghat, Trek to Ghangaria",
				description:
					"Arrive in Haridwar and drive to Govindghat, then start your trek towards Ghangaria, the base for Valley of Flowers.",
				icon: "bus",
			},
			{
				title: "Day 3: Trek to Valley of Flowers",
				description:
					"Explore the Valley of Flowers, surrounded by vibrant wildflowers, alpine meadows, and pristine streams.",
				icon: "flowers",
			},
			{
				title: "Day 4: Return Trek to Ghangaria",
				description:
					"Return to Ghangaria after a day of exploring, reliving the stunning views of the valley.",
				icon: "hiking",
			},
			{
				title: "Day 5-6: Ghangaria to Govindghat and Drive Back to Haridwar",
				description:
					"Trek back to Govindghat and then drive back to Haridwar, concluding the beautiful journey.",
				icon: "bus",
			},
		],
		sherpa: {
			name: "Nawang Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "6 years of guiding in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 3, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar Trek",
		description:
			"A scenic trek leading you to the beautiful alpine lakes of Tarsar and Marsar in Kashmir.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "10000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/tarsar-marsar.jpg",
		trekDays: [
			{
				title: "Day 1-2: Arrival at Aru Valley, Trek to Lidderwat",
				description:
					"Arrive at Aru Valley and start your trek to Lidderwat, passing through lush meadows and streams.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Tarsar Lake",
				description:
					"Continue your trek to Tarsar Lake, a picturesque alpine lake surrounded by snow-capped peaks.",
				icon: "lake",
			},
			{
				title: "Day 5-6: Trek to Marsar Lake",
				description:
					"Trek to Marsar Lake, another stunning alpine lake nestled in the Kashmir Valley.",
				icon: "mountain",
			},
			{
				title: "Day 7-8: Return Trek to Aru Valley and Departure",
				description:
					"Trek back to Aru Valley, with a final descent through lush meadows, and depart for home.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Sherab Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "7 years of guiding treks in Kashmir",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 4, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass Trek",
		description:
			"Experience one of the most beautiful and challenging treks in the Himalayas, crossing the Rupin Pass.",
		duration: "9",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "High",
		startingPoint: "Dhanaulti, Uttarakhand",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/rupin-pass.jpg",
		trekDays: [
			{
				title: "Day 1-2: Dhanaulti to Sewa, Trek to Jhaka",
				description:
					"Arrive at Dhanaulti and trek to Sewa. Continue to Jhaka, passing through beautiful alpine forests.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Rupin Pass Base Camp",
				description:
					"Trek towards Rupin Pass base camp, with incredible views of the surrounding peaks and valleys.",
				icon: "mountain",
			},
			{
				title: "Day 5-6: Summit Rupin Pass and Trek to Upper Waterfall",
				description:
					"Summit Rupin Pass and descend towards Upper Waterfall, with stunning views of snow-covered peaks.",
				icon: "summit",
			},
			{
				title: "Day 7-9: Trek to Sangla and Drive to Shimla",
				description:
					"Descend to Sangla, then drive to Shimla, completing the challenging trek.",
				icon: "bus",
			},
		],
		sherpa: {
			name: "Pasang Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of guiding in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 5, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha Trek",
		description:
			"A popular winter trek in the Garhwal Himalayas, known for its snow-covered trails and stunning summit views.",
		duration: "6",
		groupSizeMin: "4",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "6000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/kedarkantha.jpg",
		trekDays: [
			{
				title: "Day 1-2: Arrival at Sankri, Trek to Juda Ka Talab",
				description:
					"Arrive in Sankri and begin the trek to Juda Ka Talab, a serene lake surrounded by forest.",
				icon: "trek",
			},
			{
				title: "Day 3: Trek to Kedarkantha Base Camp",
				description:
					"Trek to the base camp of Kedarkantha, where you'll enjoy views of the peaks around.",
				icon: "mountain",
			},
			{
				title: "Day 4: Summit Kedarkantha Peak",
				description:
					"Summit Kedarkantha Peak and enjoy panoramic views of the Garhwal Himalayas.",
				icon: "summit",
			},
			{
				title: "Day 5-6: Descend to Sankri and Departure",
				description:
					"Descend back to Sankri and depart for your onward journey.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Lama Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "5 years of guiding in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 6, // Sandakphu
		locationId: 6,
		title: "Sandakphu Trek",
		description:
			"The trek to Sandakphu, the highest point in West Bengal, offers breathtaking views of the Kanchenjunga range and Mount Everest.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: false,
		price: "11000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/sandakphu.jpg",
		trekDays: [
			{
				title: "Day 1-2: Manebhanjan to Tumling, Trek to Kalapokhri",
				description:
					"Arrive at Manebhanjan, start the trek to Tumling, and continue on to Kalapokhri, passing through picturesque villages.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Sandakphu Summit",
				description:
					"Trek to Sandakphu Summit, with unparalleled views of the Himalayas, including Everest, Kanchenjunga, and Makalu.",
				icon: "summit",
			},
			{
				title: "Day 5-6: Trek to Phalut",
				description:
					"Descend from Sandakphu to Phalut, one of the most scenic points of the trek, surrounded by stunning mountain views.",
				icon: "mountain",
			},
			{
				title: "Day 7-8: Trek to Gorkhey and Return to Manebhanjan",
				description:
					"Trek through the beautiful Gorkhey valley, before returning to Manebhanjan, concluding the trek.",
				icon: "trek",
			},
		],
		sherpa: {
			name: "Ravi Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding in Darjeeling and Sikkim",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 7, // Bali Pass
		locationId: 7,
		title: "Bali Pass Trek",
		description:
			"Bali Pass is a thrilling trek that takes you through dense forests, alpine meadows, and offers amazing views of the peaks in Uttarakhand.",
		duration: "8",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Janki Chatti, Uttarakhand",
		isSponsored: false,
		price: "13000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/bali-pass.jpg",
		trekDays: [
			{
				title: "Day 1-2: Janki Chatti to Yamunotri, Trek to Phoolchatti",
				description:
					"Start from Janki Chatti and trek to Yamunotri, followed by a trek to Phoolchatti, passing through dense forests.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Bali Pass Base Camp",
				description:
					"Ascend towards the Bali Pass base camp, passing through alpine meadows and streams.",
				icon: "mountain",
			},
			{
				title: "Day 5: Summit Bali Pass",
				description:
					"Summit Bali Pass, the highest point of the trek, and enjoy spectacular views of the surrounding peaks.",
				icon: "summit",
			},
			{
				title: "Day 6-8: Descend to Osla and Return to Janki Chatti",
				description:
					"Descend towards Osla, passing through lush meadows, and return to Janki Chatti, concluding the trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Jigme Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of guiding treks in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 8, // Roopkund
		locationId: 8,
		title: "Roopkund Trek",
		description:
			"The famous Roopkund trek takes you through forests, alpine meadows, and a mysterious lake filled with human skeletons.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Debat, Uttarakhand",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/roopkund.jpg",
		trekDays: [
			{
				title: "Day 1-2: Debat to Lohajung, Trek to Didna",
				description:
					"Arrive at Debat, trek to Lohajung, and continue to Didna, passing through beautiful oak forests.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Ali Bugyal",
				description:
					"Continue the trek to Ali Bugyal, a stunning alpine meadow with amazing views of the snow-capped peaks.",
				icon: "mountain",
			},
			{
				title: "Day 5: Trek to Roopkund Lake",
				description:
					"Trek to the Roopkund Lake, famous for the human skeletons found there, surrounded by towering peaks.",
				icon: "lake",
			},
			{
				title: "Day 6-8: Return Trek to Lohajung and Departure",
				description:
					"Trek back to Lohajung, and return to Debat, concluding the trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Nima Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of guiding in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 9, // Tungnath Chandrashila
		locationId: 9,
		title: "Tungnath Chandrashila Trek",
		description:
			"This short but scenic trek offers the chance to visit the highest Shiva temple at Tungnath and climb the Chandrashila summit for panoramic views.",
		duration: "5",
		groupSizeMin: "3",
		groupSizeMax: "8",
		difficulty: "Easy",
		startingPoint: "Rishikesh, Uttarakhand",
		isSponsored: true,
		price: "5000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/tungnath-chandrashila.jpg",
		trekDays: [
			{
				title: "Day 1-2: Rishikesh to Chopta, Trek to Tungnath",
				description:
					"Arrive at Rishikesh and travel to Chopta. Begin the trek to Tungnath, the highest temple of Lord Shiva.",
				icon: "bus",
			},
			{
				title: "Day 3: Summit Chandrashila Peak",
				description:
					"Trek to the summit of Chandrashila, enjoying spectacular 360-degree views of the Garhwal Himalayas.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Descend to Chopta and Drive to Rishikesh",
				description:
					"Descend back to Chopta and drive back to Rishikesh, completing the short yet rewarding trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Sonam Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "5 years of guiding in Uttarakhand",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 10, // Goechala
		locationId: 10,
		title: "Goechala Trek",
		description:
			"One of the most famous treks in Sikkim, Goechala offers views of Kangchenjunga, the third-highest mountain in the world.",
		duration: "10",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: false,
		price: "15000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/goechala.jpg",
		trekDays: [
			{
				title: "Day 1-2: Yuksom to Tsokha, Trek to Bakkhim",
				description:
					"Start your trek from Yuksom to Tsokha, and continue to Bakkhim, passing through lush forests.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Dzongri",
				description:
					"Trek to Dzongri, an amazing viewpoint for Kangchenjunga and surrounding peaks.",
				icon: "mountain",
			},
			{
				title: "Day 5-6: Trek to Goechala Pass",
				description:
					"Ascend to the Goechala Pass, the highest point of the trek, with breathtaking views of Kangchenjunga and the entire range.",
				icon: "summit",
			},
			{
				title: "Day 7-10: Return Trek to Yuksom and Departure",
				description:
					"Return from Goechala to Yuksom, concluding the unforgettable trekking experience.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Dawa Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of guiding treks in Sikkim",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 11, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass Trek - Classic Route",
		description:
			"A classic trek to Hampta Pass that offers stunning views of the Himalayas, picturesque valleys, and scenic campsites.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Jobri, Himachal Pradesh",
		isSponsored: false,
		price: "10000",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/hampta-classic.jpg",
		trekDays: [
			{
				title: "Day 1-2: Jobri to Chikka, Trek to Jwara",
				description:
					"Arrive at Jobri, trek to Chikka, and continue the ascent to Jwara, surrounded by alpine meadows.",
				icon: "trek",
			},
			{
				title: "Day 3: Trek to Hampta Pass",
				description:
					"Ascend to Hampta Pass and enjoy panoramic views of the peaks and valleys.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Trek to Balu Ka Ghera",
				description:
					"Descend to Balu Ka Ghera, a stunning campsite nestled amidst beautiful landscapes.",
				icon: "mountain",
			},
			{
				title: "Day 6-7: Trek to Solang Valley and Departure",
				description:
					"Conclude the trek by trekking towards Solang Valley, from where you will be driven to Manali.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Ravi Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding treks in Himachal Pradesh",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 12, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass - Monsoon Special",
		description:
			"Experience the beauty of Hampta Pass during the monsoon, with lush green meadows and mist-covered peaks.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Jobri, Himachal Pradesh",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/hampta-monsoon.jpg",
		trekDays: [
			{
				title: "Day 1-2: Jobri to Chikka, Trek to Jwara",
				description:
					"Trek through lush forests to reach Chikka, then continue the trek to Jwara, a beautiful campsite in the monsoon.",
				icon: "trek",
			},
			{
				title: "Day 3: Trek to Hampta Pass",
				description:
					"Trek through mist-covered forests and meadows to reach Hampta Pass, offering stunning views of the Himalayas.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Trek to Balu Ka Ghera",
				description:
					"Descend to Balu Ka Ghera, which becomes a beautiful sight during the monsoon, surrounded by vibrant greenery.",
				icon: "mountain",
			},
			{
				title: "Day 6-8: Trek to Solang Valley and Departure",
				description:
					"Conclude the trek by heading to Solang Valley, known for its lush beauty during the monsoon season.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Anil Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of guiding in the Hampta region",
			certifications: ["Certified Trekking Guide", "First Aid Certified"],
		},
	},
	{
		id: 13, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass - Winter Wonderland",
		description:
			"Embark on a thrilling winter trek to Hampta Pass, with snow-covered landscapes and a serene environment.",
		duration: "9",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "High",
		startingPoint: "Jobri, Himachal Pradesh",
		isSponsored: false,
		price: "15000",
		availableSlots: "5",
		bookingDeadline: "2025-02-30",
		coverImage: "https://example.com/hampta-winter.jpg",
		trekDays: [
			{
				title: "Day 1-2: Jobri to Chikka, Trek to Jwara",
				description:
					"Start the trek in winter conditions, trekking through snow-covered forests to reach Chikka and Jwara.",
				icon: "trek",
			},
			{
				title: "Day 3: Trek to Hampta Pass",
				description:
					"Summit Hampta Pass in winter, surrounded by pristine white snow and panoramic mountain views.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Trek to Balu Ka Ghera",
				description:
					"Descend into Balu Ka Ghera, where the snow-covered campsite offers a magical winter experience.",
				icon: "mountain",
			},
			{
				title: "Day 6-9: Return to Solang Valley and Departure",
				description:
					"Trek back towards Solang Valley, experiencing the snow-capped peaks before your departure.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Tashi Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of winter trekking experience",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Expert",
			],
		},
	},
	{
		id: 14, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass and Chandratal Lake Trek",
		description:
			"This combined trek will take you to the stunning Hampta Pass and the breathtaking Chandratal Lake.",
		duration: "10",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Manali, Himachal Pradesh",
		isSponsored: false,
		price: "18000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/hampta-chandratal.jpg",
		trekDays: [
			{
				title: "Day 1-2: Manali to Jobri, Trek to Chikka",
				description:
					"Travel from Manali to Jobri and start the trek to Chikka, passing through lush forests.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Trek to Hampta Pass",
				description:
					"Ascend to Hampta Pass, crossing alpine meadows and enjoying views of snow-capped peaks.",
				icon: "summit",
			},
			{
				title: "Day 5-7: Trek to Chandratal Lake",
				description:
					"Descend towards Chandratal Lake, known for its unique shape and amazing surrounding views.",
				icon: "lake",
			},
			{
				title: "Day 8-10: Trek to Kibber Village and Departure",
				description:
					"Trek to Kibber Village, concluding the trek with a scenic descent and drive back to Manali.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Lama Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of guiding in the Spiti Valley region",
			certifications: [
				"Certified Trekking Guide",
				"Chandratal Specialist",
			],
		},
	},
	{
		id: 15, // Hampta Pass
		locationId: 1,
		title: "Hampta Pass - Adventure Trail",
		description:
			"A perfect trek for those looking for adventure, with challenging terrains, river crossings, and the thrill of Hampta Pass.",
		duration: "6",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Manali, Himachal Pradesh",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-01",
		coverImage: "https://example.com/hampta-adventure.jpg",
		trekDays: [
			{
				title: "Day 1-2: Manali to Jobri, Trek to Chikka",
				description:
					"Start from Manali, trek to Jobri, and continue towards Chikka, passing through scenic routes and small rivers.",
				icon: "trek",
			},
			{
				title: "Day 3: Trek to Hampta Pass",
				description:
					"Reach the Hampta Pass summit and enjoy panoramic views of the entire range.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Balu Ka Ghera",
				description:
					"Descend to Balu Ka Ghera, a perfect camping spot for a night surrounded by serene mountains.",
				icon: "mountain",
			},
			{
				title: "Day 5-6: Trek to Solang Valley and Departure",
				description:
					"Conclude the trek with a descent to Solang Valley and head back to Manali.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Sonam Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "7 years of guiding adventure treks",
			certifications: [
				"Certified Trekking Guide",
				"Adventure Trekking Expert",
			],
		},
	},
	{
		id: 16, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers - Classic Trek",
		description:
			"A scenic trek that takes you through lush meadows, alpine forests, and the magical Valley of Flowers, a UNESCO World Heritage site.",
		duration: "7",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "Easy to Medium",
		startingPoint: "Govindghat, Uttarakhand",
		isSponsored: true,
		price: "8000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/valley-classic.jpg",
		trekDays: [
			{
				title: "Day 1: Govindghat to Ghangaria",
				description:
					"Arrive at Govindghat, and trek towards Ghangaria, the base for Valley of Flowers.",
				icon: "trek",
			},
			{
				title: "Day 2: Trek to Valley of Flowers",
				description:
					"Trek to the Valley of Flowers, exploring the diverse flora and breathtaking landscapes.",
				icon: "flower",
			},
			{
				title: "Day 3: Explore Valley of Flowers",
				description:
					"Spend the day exploring the valley, capturing the beauty of blooming flowers in every direction.",
				icon: "explore",
			},
			{
				title: "Day 4: Return to Ghangaria",
				description:
					"Descend back to Ghangaria and relax in the peaceful surroundings.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Ravindra Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of guiding in Uttarakhand",
			certifications: [
				"Certified Trekking Guide",
				"Valley of Flowers Specialist",
			],
		},
	},
	{
		id: 17, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers + Hemkund Sahib",
		description:
			"A spiritual and scenic trek combining the serene Valley of Flowers and the sacred Hemkund Sahib.",
		duration: "9",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "Medium to High",
		startingPoint: "Govindghat, Uttarakhand",
		isSponsored: false,
		price: "11000",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/valley-hemkund.jpg",
		trekDays: [
			{
				title: "Day 1: Govindghat to Ghangaria",
				description:
					"Start from Govindghat, trekking through dense forests to reach Ghangaria.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Trek to Valley of Flowers",
				description:
					"Trek to the Valley of Flowers, enjoy the scenic beauty of this lush landscape.",
				icon: "flower",
			},
			{
				title: "Day 4: Visit Hemkund Sahib",
				description:
					"Make your way to the sacred Hemkund Sahib Gurudwara, situated at a high altitude, offering an unforgettable spiritual experience.",
				icon: "temple",
			},
			{
				title: "Day 5-9: Return to Govindghat",
				description:
					"Descend back to Govindghat after completing the sacred trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Ajeet Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of guiding trekkers to Valley of Flowers",
			certifications: [
				"Certified Trekking Guide",
				"Spiritual Trekking Expert",
			],
		},
	},
	{
		id: 18, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers - Monsoon Special",
		description:
			"Explore the vibrant Valley of Flowers during the monsoon, when the flowers are in full bloom and the surroundings are lush and green.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Govindghat, Uttarakhand",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/valley-monsoon.jpg",
		trekDays: [
			{
				title: "Day 1: Govindghat to Ghangaria",
				description:
					"Start your trek to Ghangaria, passing through forests with lush green vegetation.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Trek to Valley of Flowers",
				description:
					"Reach the Valley of Flowers and witness the vibrant colors of blooming flowers.",
				icon: "flower",
			},
			{
				title: "Day 4-5: Explore Valley of Flowers",
				description:
					"Spend two days wandering through the valley, taking in the beauty of the meadows, waterfalls, and rare flora.",
				icon: "explore",
			},
			{
				title: "Day 6-8: Return to Govindghat",
				description:
					"Descend back to Govindghat, relishing the memories of the picturesque trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Suraj Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of trekking in the Valley of Flowers region",
			certifications: [
				"Certified Trekking Guide",
				"Monsoon Trekking Specialist",
			],
		},
	},
	{
		id: 19, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers - Adventure Trail",
		description:
			"A thrilling trek through challenging terrains, steep ascents, and the magical Valley of Flowers, offering a perfect blend of adventure and beauty.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "High",
		startingPoint: "Govindghat, Uttarakhand",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/valley-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Govindghat to Ghangaria",
				description:
					"A challenging but scenic trek from Govindghat to Ghangaria, passing through thick forest and river crossings.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Trek to Valley of Flowers",
				description:
					"Reach the Valley of Flowers, with an exhilarating ascent and stunning views of the valley.",
				icon: "flower",
			},
			{
				title: "Day 4: Adventure Exploration of Valley",
				description:
					"Explore the less-trodden paths of the valley and experience the wilderness firsthand.",
				icon: "explore",
			},
			{
				title: "Day 5-6: Return to Govindghat",
				description:
					"Conclude your adventurous trek by descending back to Govindghat.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Kiran Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding adventure treks",
			certifications: [
				"Certified Trekking Guide",
				"Adventure Trekking Expert",
			],
		},
	},
	{
		id: 20, // Valley of Flowers
		locationId: 2,
		title: "Valley of Flowers - Photography Special",
		description:
			"A trek designed for photography enthusiasts, offering the best viewpoints and angles to capture the stunning beauty of the Valley of Flowers.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Govindghat, Uttarakhand",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/valley-photography.jpg",
		trekDays: [
			{
				title: "Day 1: Govindghat to Ghangaria",
				description:
					"Trek to Ghangaria, a peaceful base camp for photography enthusiasts.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Trek to Valley of Flowers",
				description:
					"Capture the essence of the valley’s vibrant flowers, cascading waterfalls, and sweeping meadows.",
				icon: "camera",
			},
			{
				title: "Day 4-5: Explore Valley of Flowers",
				description:
					"Spend two full days exploring and photographing various landscapes and rare flora in the valley.",
				icon: "explore",
			},
			{
				title: "Day 6-7: Return to Govindghat",
				description:
					"Capture final shots on your descent back to Govindghat, concluding the photography journey.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Nima Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "7 years of guiding photography-focused treks",
			certifications: [
				"Certified Trekking Guide",
				"Photography Enthusiast",
			],
		},
	},
	{
		id: 21, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar - Classic Trek",
		description:
			"A serene trek that combines the beauty of Tarsar and Marsar lakes, offering mesmerizing views and a peaceful experience in the heart of the Kashmir Valley.",
		duration: "7",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/tarsar-classic.jpg",
		trekDays: [
			{
				title: "Day 1: Aru Valley to Lidderwat",
				description:
					"Arrive at Aru Valley and start your trek to Lidderwat, a beautiful campsite surrounded by tall pine trees.",
				icon: "trek",
			},
			{
				title: "Day 2: Lidderwat to Tarsar Lake",
				description:
					"Trek to the stunning Tarsar Lake, nestled between snow-capped peaks and lush meadows.",
				icon: "lake",
			},
			{
				title: "Day 3: Explore Tarsar Lake",
				description:
					"Spend the day exploring the pristine Tarsar Lake and its surroundings, capturing the serene beauty.",
				icon: "explore",
			},
			{
				title: "Day 4: Tarsar to Marsar Lake",
				description:
					"Trek towards Marsar Lake, a hidden gem located amidst alpine meadows.",
				icon: "lake",
			},
		],
		sherpa: {
			name: "Jameel Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of guiding in the Kashmir Valley",
			certifications: [
				"Certified Trekking Guide",
				"Tarsar Marsar Specialist",
			],
		},
	},
	{
		id: 22, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar - Adventure Trek",
		description:
			"A thrilling trek for those who seek adventure, combining rugged terrains and stunning lakeside views. This trek offers both challenge and beauty.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "High",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "11000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/tarsar-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Aru Valley to Lidderwat",
				description:
					"Start your adventure trek from Aru Valley and head to Lidderwat, a picturesque campsite along the river.",
				icon: "trek",
			},
			{
				title: "Day 2: Lidderwat to Tarsar Lake",
				description:
					"Trek to Tarsar Lake, with scenic viewpoints and challenging ascents.",
				icon: "lake",
			},
			{
				title: "Day 3: Explore Tarsar Lake",
				description:
					"Take a day to explore Tarsar Lake's beauty and photograph the dramatic landscapes.",
				icon: "explore",
			},
			{
				title: "Day 4-5: Trek to Marsar Lake and Return",
				description:
					"Continue your journey to Marsar Lake, experiencing both high-altitude trekking and serene lake views.",
				icon: "trek",
			},
		],
		sherpa: {
			name: "Ravinder Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of adventure trekking in the Kashmir region",
			certifications: [
				"Certified Trekking Guide",
				"Adventure Trekking Specialist",
			],
		},
	},
	{
		id: 23, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar - Monsoon Trek",
		description:
			"A special monsoon trek that takes you through lush green meadows, alpine lakes, and mist-covered mountains. Ideal for nature lovers and photographers.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "9800",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/tarsar-monsoon.jpg",
		trekDays: [
			{
				title: "Day 1: Aru Valley to Lidderwat",
				description:
					"Begin your trek to Lidderwat, passing through lush forests and pristine streams.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Trek to Tarsar Lake",
				description:
					"Enjoy a scenic journey to Tarsar Lake, surrounded by green hills and misty weather.",
				icon: "lake",
			},
			{
				title: "Day 4-5: Explore Tarsar Lake",
				description:
					"Spend two days at Tarsar Lake, enjoying the calm waters and the beauty of the surrounding environment.",
				icon: "explore",
			},
			{
				title: "Day 6-8: Return to Aru Valley",
				description:
					"Descend back to Aru Valley after completing the trek, relishing the monsoon landscape.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Salim Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "7 years of monsoon trekking in the Kashmir region",
			certifications: [
				"Certified Trekking Guide",
				"Monsoon Trekking Expert",
			],
		},
	},
	{
		id: 24, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar - Photography Trek",
		description:
			"A trek designed for photography enthusiasts, offering stunning vistas of lakes, valleys, and snow-capped peaks. Ideal for capturing the natural beauty of Kashmir.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/tarsar-photography.jpg",
		trekDays: [
			{
				title: "Day 1: Aru Valley to Lidderwat",
				description:
					"Arrive in Aru Valley and start the trek towards Lidderwat, a perfect place for early morning photography.",
				icon: "camera",
			},
			{
				title: "Day 2: Lidderwat to Tarsar Lake",
				description:
					"Reach Tarsar Lake, where you will capture the stunning reflections of the mountains in the serene waters.",
				icon: "camera",
			},
			{
				title: "Day 3-4: Explore Tarsar Lake",
				description:
					"Spend two days capturing the lake’s beauty, surrounding landscapes, and unique wildlife.",
				icon: "camera",
			},
			{
				title: "Day 5-7: Trek to Marsar Lake and Return",
				description:
					"Trek to Marsar Lake, photograph the contrasting landscapes, and return to Aru Valley.",
				icon: "camera",
			},
		],
		sherpa: {
			name: "Firoz Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "6 years of guiding photography treks in Kashmir",
			certifications: ["Certified Trekking Guide", "Photography Expert"],
		},
	},
	{
		id: 25, // Tarsar Marsar
		locationId: 3,
		title: "Tarsar Marsar - Family Trek",
		description:
			"A family-friendly trek that offers the opportunity to explore the stunning Tarsar and Marsar lakes, with activities for children and relaxed walks.",
		duration: "6",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Easy",
		startingPoint: "Aru Valley, Kashmir",
		isSponsored: false,
		price: "8800",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/tarsar-family.jpg",
		trekDays: [
			{
				title: "Day 1: Aru Valley to Lidderwat",
				description:
					"A gentle trek from Aru Valley to Lidderwat, with plenty of breaks to enjoy the scenery.",
				icon: "family",
			},
			{
				title: "Day 2: Lidderwat to Tarsar Lake",
				description:
					"Trek to Tarsar Lake, a peaceful spot surrounded by meadows and snowy peaks.",
				icon: "family",
			},
			{
				title: "Day 3: Explore Tarsar Lake",
				description:
					"Take it easy and explore Tarsar Lake, ideal for families with children to enjoy the beautiful surroundings.",
				icon: "family",
			},
			{
				title: "Day 4-6: Trek to Marsar Lake and Return",
				description:
					"Head to Marsar Lake, enjoy some easy walks, and return to Aru Valley.",
				icon: "family",
			},
		],
		sherpa: {
			name: "Ahsan Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of family-friendly trekking",
			certifications: [
				"Certified Trekking Guide",
				"Family Trekking Specialist",
			],
		},
	},
	{
		id: 26, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass - Classic Trek",
		description:
			"A classic high-altitude trek that takes you through stunning mountain scenery, river valleys, and alpine meadows. This trek is perfect for adventure enthusiasts seeking a challenge.",
		duration: "8",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Uttarkashi, Uttarakhand",
		isSponsored: true,
		price: "12500",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/rupin-classic.jpg",
		trekDays: [
			{
				title: "Day 1: Uttarkashi to Jhaka",
				description:
					"Begin your trek from Uttarkashi, traveling to Jhaka, a picturesque village.",
				icon: "trek",
			},
			{
				title: "Day 2: Jhaka to Rupin Pass Base Camp",
				description:
					"Trek through forests and meadows, heading toward the Rupin Pass base camp.",
				icon: "trek",
			},
			{
				title: "Day 3: Base Camp to Rupin Pass",
				description:
					"Trek to the summit of Rupin Pass, enjoying breathtaking views of snow-capped peaks.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Sangla Valley",
				description:
					"Descend into the beautiful Sangla Valley, capturing stunning landscapes along the way.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Arun Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of guiding in the Himalayas",
			certifications: [
				"Certified Trekking Guide",
				"Rupin Pass Specialist",
			],
		},
	},
	{
		id: 27, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass - Adventure Trek",
		description:
			"A thrilling trek for experienced trekkers looking for a challenge. The Rupin Pass adventure includes steep ascents, challenging terrains, and stunning Himalayan vistas.",
		duration: "9",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "High",
		startingPoint: "Uttarkashi, Uttarakhand",
		isSponsored: false,
		price: "13500",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/rupin-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Uttarkashi to Jhaka",
				description:
					"Travel to Jhaka from Uttarkashi and start your trek to a beautiful campsite.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Jhaka to Base Camp",
				description:
					"Trek through forests, alpine meadows, and cross a few streams to reach the Rupin Pass base camp.",
				icon: "trek",
			},
			{
				title: "Day 4-5: Trek to Rupin Pass Summit",
				description:
					"Challenge yourself with a steep ascent to the Rupin Pass summit. The view from the top is truly rewarding.",
				icon: "summit",
			},
			{
				title: "Day 6-9: Descend to Sangla Valley and Return",
				description:
					"Descend to the Sangla Valley through picturesque villages and streams, completing the challenging yet rewarding trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Pawan Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of high-altitude trekking",
			certifications: [
				"Certified Trekking Guide",
				"Rupin Pass Adventure Specialist",
			],
		},
	},
	{
		id: 28, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass - Winter Trek",
		description:
			"A winter trekking experience through the snow-covered landscapes of Rupin Pass. Ideal for those looking to enjoy snow and winter trekking in the Himalayas.",
		duration: "9",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "High",
		startingPoint: "Uttarkashi, Uttarakhand",
		isSponsored: false,
		price: "14500",
		availableSlots: "5",
		bookingDeadline: "2025-02-01",
		coverImage: "https://example.com/rupin-winter.jpg",
		trekDays: [
			{
				title: "Day 1: Uttarkashi to Jhaka",
				description:
					"Start the trek from Uttarkashi, traveling to Jhaka, where snow covers the landscape during winters.",
				icon: "snow",
			},
			{
				title: "Day 2-3: Jhaka to Base Camp",
				description:
					"Trek through snow-covered meadows and dense forests, heading towards the base camp.",
				icon: "snow",
			},
			{
				title: "Day 4-6: Trek to Rupin Pass Summit",
				description:
					"Ascend to the summit of Rupin Pass through deep snow, experiencing the challenges and rewards of winter trekking.",
				icon: "summit",
			},
			{
				title: "Day 7-9: Descend to Sangla Valley and Return",
				description:
					"Return through snow-filled terrains, descending into the Sangla Valley and completing your winter adventure.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Nashit Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of winter trekking in the Himalayas",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 29, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass - Photography Trek",
		description:
			"A trek for photography enthusiasts who want to capture the majestic landscapes, vibrant meadows, and snowy peaks of Rupin Pass.",
		duration: "8",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Uttarkashi, Uttarakhand",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/rupin-photography.jpg",
		trekDays: [
			{
				title: "Day 1: Uttarkashi to Jhaka",
				description:
					"Start the trek from Uttarkashi and trek to Jhaka, ideal for capturing the initial landscapes of the trek.",
				icon: "camera",
			},
			{
				title: "Day 2-3: Jhaka to Base Camp",
				description:
					"Trek through alpine meadows, capture the scenic views, and settle in the Rupin Pass base camp.",
				icon: "camera",
			},
			{
				title: "Day 4-5: Summit Rupin Pass and Photography",
				description:
					"Reach the summit of Rupin Pass and spend the day capturing the panoramic views of the Himalayan ranges.",
				icon: "camera",
			},
			{
				title: "Day 6-8: Descend and Return",
				description:
					"Trek down through the forests and villages of Sangla Valley while taking photos of the scenic landscapes.",
				icon: "camera",
			},
		],
		sherpa: {
			name: "Rakesh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "5 years of leading photography treks",
			certifications: [
				"Certified Trekking Guide",
				"Photography Trekking Specialist",
			],
		},
	},
	{
		id: 30, // Rupin Pass
		locationId: 4,
		title: "Rupin Pass - Family Trek",
		description:
			"A family-friendly trek that offers easy-to-medium trekking experiences for families with children. It allows families to enjoy the majestic views of Rupin Pass together.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Easy to Medium",
		startingPoint: "Uttarkashi, Uttarakhand",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/rupin-family.jpg",
		trekDays: [
			{
				title: "Day 1: Uttarkashi to Jhaka",
				description:
					"Start your family trek to Jhaka, passing through beautiful trails and lush green landscapes.",
				icon: "family",
			},
			{
				title: "Day 2-3: Jhaka to Base Camp",
				description:
					"Reach the base camp, surrounded by scenic beauty and ideal for family photos and relaxing.",
				icon: "family",
			},
			{
				title: "Day 4-5: Summit Rupin Pass",
				description:
					"Take the whole family to the summit of Rupin Pass for stunning views of the snow-capped peaks.",
				icon: "family",
			},
			{
				title: "Day 6-7: Descend to Sangla Valley and Return",
				description:
					"Relaxed descent into Sangla Valley and complete the trek, ideal for families looking to enjoy the Himalayan beauty.",
				icon: "family",
			},
		],
		sherpa: {
			name: "Manoj Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of leading family-friendly treks",
			certifications: [
				"Certified Trekking Guide",
				"Family Trekking Specialist",
			],
		},
	},
	{
		id: 31, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha - Classic Winter Trek",
		description:
			"The classic winter trek to Kedarkantha is known for its snow-covered landscapes, majestic Himalayan views, and beautiful campsite. Ideal for those looking for a snow trek.",
		duration: "6",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "9000",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/kedarkantha-classic.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Start the trek from Sankri to Juda Ka Talab, a beautiful frozen lake surrounded by tall pine trees.",
				icon: "snow",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through dense forests and alpine meadows to reach Kedarkantha Base Camp, the starting point for the summit.",
				icon: "trek",
			},
			{
				title: "Day 3: Kedarkantha Summit",
				description:
					"Reach the summit of Kedarkantha and witness panoramic views of the surrounding peaks.",
				icon: "summit",
			},
			{
				title: "Day 4: Base Camp to Sankri",
				description:
					"Descend back to Sankri, passing through the scenic beauty of forests and meadows.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Rajesh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding winter treks",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 32, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha - Family Adventure Trek",
		description:
			"A family-friendly trek suitable for trekkers of all ages, with arate difficulty level. Enjoy snow-covered landscapes, beautiful campsites, and easy ascents.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/kedarkantha-family.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Begin your family trek to Juda Ka Talab, a beautiful spot with frozen lakes and tall pine trees.",
				icon: "family",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through snow-covered meadows to the Kedarkantha Base Camp.",
				icon: "family",
			},
			{
				title: "Day 3: Kedarkantha Summit",
				description:
					"Reach the summit of Kedarkantha, a perfect spot to enjoy panoramic views of the surrounding Himalayan peaks.",
				icon: "family",
			},
			{
				title: "Day 4-7: Return to Sankri and Depart",
				description:
					"Descend back to Sankri, exploring the scenic trails and capturing family photos along the way.",
				icon: "family",
			},
		],
		sherpa: {
			name: "Anil Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of leading family treks",
			certifications: [
				"Certified Trekking Guide",
				"Family Trekking Specialist",
			],
		},
	},
	{
		id: 33, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha - Winter Photography Trek",
		description:
			"A photography-centric trek where you can capture the pristine snow-covered landscapes of Kedarkantha. Ideal for photographers and winter lovers.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "6",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "11000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/kedarkantha-photography.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Capture the frozen beauty of Juda Ka Talab as the trek begins.",
				icon: "camera",
			},
			{
				title: "Day 2-3: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Take photos of the snow-covered forests and the picturesque Kedarkantha Base Camp.",
				icon: "camera",
			},
			{
				title: "Day 4-5: Summit Kedarkantha and Photography",
				description:
					"Reach the summit of Kedarkantha and take stunning photographs of the panoramic views of the snow-clad peaks.",
				icon: "camera",
			},
			{
				title: "Day 6-7: Descend and Capture the Landscape",
				description:
					"Descend back to Sankri, capturing the winter landscapes as you go.",
				icon: "camera",
			},
		],
		sherpa: {
			name: "Mukesh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "5 years of leading photography treks",
			certifications: [
				"Certified Trekking Guide",
				"Photography Trekking Specialist",
			],
		},
	},
	{
		id: 34, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha - Snow Adventure Trek",
		description:
			"A thrilling trek that takes you through deep snow, dense forests, and alpine meadows. This trek is for those who want to experience the challenge of winter trekking in the Himalayas.",
		duration: "6",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-01",
		coverImage: "https://example.com/kedarkantha-snow.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Trek through forests and meadows to reach the frozen Juda Ka Talab lake.",
				icon: "snow",
			},
			{
				title: "Day 2-3: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through snow-covered meadows and forests to reach Kedarkantha Base Camp.",
				icon: "snow",
			},
			{
				title: "Day 4: Kedarkantha Summit",
				description:
					"Reach the Kedarkantha summit and enjoy the breathtaking views of the snow-covered peaks.",
				icon: "summit",
			},
			{
				title: "Day 5-6: Descend and Return",
				description:
					"Descend back to Sankri, capturing beautiful snowy landscapes along the way.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Narayan Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of high-altitude trekking",
			certifications: [
				"Certified Trekking Guide",
				"Snow Trekking Specialist",
			],
		},
	},
	{
		id: 35, // Kedarkantha
		locationId: 5,
		title: "Kedarkantha - Solo Trek",
		description:
			"A perfect trek for solo travelers looking to explore Kedarkantha at their own pace. Experience the Himalayas, challenge yourself, and enjoy the tranquility of nature.",
		duration: "5",
		groupSizeMin: "4",
		groupSizeMax: "7",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "8000",
		availableSlots: "5",
		bookingDeadline: "2025-02-30",
		coverImage: "https://example.com/kedarkantha-solo.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Start your solo trek to Juda Ka Talab, where you will enjoy the peace of the snow-covered lake.",
				icon: "solotrek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Travel solo through snowy meadows and forests to the Kedarkantha Base Camp.",
				icon: "solotrek",
			},
			{
				title: "Day 3: Kedarkantha Summit",
				description:
					"Summit Kedarkantha and enjoy the breathtaking views on your solo trek.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Return to Sankri",
				description:
					"Descend back to Sankri, completing your solo trek through stunning landscapes.",
				icon: "solotrek",
			},
		],
		sherpa: {
			name: "Suraj Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "7 years of solo trekking experience",
			certifications: [
				"Certified Trekking Guide",
				"Solo Trekking Specialist",
			],
		},
	},
	{
		id: 36, // Sandakphu
		locationId: 6,
		title: "Sandakphu - The Trek to Singalila Ridge",
		description:
			"This is a classic trek along the Singalila Ridge offering mesmerizing views of the Kanchenjunga range. A perfect mix of adventure and breathtaking natural beauty.",
		duration: "6",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "Medium",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: true,
		price: "8500",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/sandakphu-singalila.jpg",
		trekDays: [
			{
				title: "Day 1: Manebhanjan to Chitre",
				description:
					"Start the trek from Manebhanjan and trek to Chitre, passing through dense forests of rhododendron and oak.",
				icon: "trek",
			},
			{
				title: "Day 2: Chitre to Sandakphu",
				description:
					"Trek through lush green landscapes and reach the famous Sandakphu peak.",
				icon: "trek",
			},
			{
				title: "Day 3: Sandakphu to Phalut",
				description:
					"Enjoy panoramic views of Kanchenjunga, Everest, and Makalu while trekking from Sandakphu to Phalut.",
				icon: "summit",
			},
			{
				title: "Day 4: Phalut to Gorkhey",
				description:
					"Descend from Phalut to Gorkhey, a beautiful village with stunning views of the mountains.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Rohit Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Himalayan Trekking Specialist",
			],
		},
	},
	{
		id: 37, // Sandakphu
		locationId: 6,
		title: "Sandakphu - The Kanchenjunga View Trek",
		description:
			"A trek to the highest point in West Bengal, Sandakphu, offers magnificent views of the Kanchenjunga range, perfect for those who want to experience the grandeur of the Himalayas.",
		duration: "5",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "Medium",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: false,
		price: "7800",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/sandakphu-kanchenjunga.jpg",
		trekDays: [
			{
				title: "Day 1: Manebhanjan to Chitre",
				description:
					"Start from Manebhanjan and trek to Chitre, crossing beautiful rhododendron forests.",
				icon: "trek",
			},
			{
				title: "Day 2: Chitre to Sandakphu",
				description:
					"Trek to Sandakphu, the highest point in the region, offering an incredible view of Kanchenjunga.",
				icon: "summit",
			},
			{
				title: "Day 3: Sandakphu to Phalut",
				description:
					"Trek to Phalut, the second-highest point in the region, with magnificent views of the entire Himalayan range.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Phalut to Gorkhey and Return to Manebhanjan",
				description:
					"Descend through picturesque villages and return to Manebhanjan.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Dinesh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of guiding treks in West Bengal",
			certifications: [
				"Certified Trekking Guide",
				"Kanchenjunga Trek Specialist",
			],
		},
	},
	{
		id: 38, // Sandakphu
		locationId: 6,
		title: "Sandakphu - The Adventure Trek",
		description:
			"This adventurous trek offers the best of nature and challenge. Experience the thrilling climbs and rewarding views of the snow-capped peaks of the Himalayas.",
		duration: "7",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "High",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/sandakphu-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Manebhanjan to Chitre",
				description:
					"Trek from Manebhanjan to Chitre, passing through dense forests and charming villages.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Chitre to Sandakphu",
				description:
					"Climb through thick forests and meadows, reaching Sandakphu, with stunning views of Kanchenjunga and other peaks.",
				icon: "summit",
			},
			{
				title: "Day 4-5: Sandakphu to Phalut",
				description:
					"Trek to Phalut, a higher point with more breathtaking views of the Himalayan range.",
				icon: "summit",
			},
			{
				title: "Day 6-7: Phalut to Gorkhey and Return to Manebhanjan",
				description:
					"Descend through scenic routes, passing through villages and forests back to Manebhanjan.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Suresh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of leading challenging treks",
			certifications: [
				"Certified Trekking Guide",
				"Adventure Trekking Specialist",
			],
		},
	},
	{
		id: 39, // Sandakphu
		locationId: 6,
		title: "Sandakphu - The Sunrise Trek",
		description:
			"This trek is famous for its incredible sunrise views over the Himalayas. Witness the first rays of the sun lighting up the peaks of Kanchenjunga and Everest.",
		duration: "5",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: false,
		price: "7000",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/sandakphu-sunrise.jpg",
		trekDays: [
			{
				title: "Day 1: Manebhanjan to Chitre",
				description:
					"Begin the trek from Manebhanjan and hike through lush green forests to reach Chitre.",
				icon: "trek",
			},
			{
				title: "Day 2: Chitre to Sandakphu",
				description:
					"Trek through charming villages and dense rhododendron forests to reach Sandakphu.",
				icon: "summit",
			},
			{
				title: "Day 3: Sunrise at Sandakphu",
				description:
					"Experience the awe-inspiring sunrise over Kanchenjunga and other mighty Himalayan peaks.",
				icon: "sunrise",
			},
			{
				title: "Day 4-5: Sandakphu to Phalut and Return",
				description:
					"Trek from Sandakphu to Phalut, enjoy the spectacular views, and return to Manebhanjan.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Amit Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of leading sunrise treks",
			certifications: [
				"Certified Trekking Guide",
				"Sunrise Trekking Specialist",
			],
		},
	},
	{
		id: 40, // Sandakphu
		locationId: 6,
		title: "Sandakphu - The Winter Trek",
		description:
			"Experience the thrill of trekking in the snow-covered landscapes of Sandakphu. The trek takes you to the highest point in West Bengal with panoramic views of the surrounding peaks.",
		duration: "7",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "High",
		startingPoint: "Manebhanjan, West Bengal",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/sandakphu-winter.jpg",
		trekDays: [
			{
				title: "Day 1: Manebhanjan to Chitre",
				description:
					"Start your trek from Manebhanjan and head towards Chitre, trekking through dense forests.",
				icon: "snow",
			},
			{
				title: "Day 2-3: Chitre to Sandakphu",
				description:
					"Trek through snow-covered meadows and forests, reaching the summit of Sandakphu.",
				icon: "snow",
			},
			{
				title: "Day 4-5: Sandakphu to Phalut",
				description:
					"Continue the trek through snowy trails and reach Phalut, another stunning point.",
				icon: "snow",
			},
			{
				title: "Day 6-7: Phalut to Gorkhey and Return to Manebhanjan",
				description:
					"Descend to Gorkhey and complete the trek back to Manebhanjan.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Hari Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of guiding winter treks",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 41, // Bali Pass
		locationId: 7,
		title: "Bali Pass - The Ultimate Adventure",
		description:
			"A challenging trek through the pristine valleys of the Garhwal Himalayas, Bali Pass offers an adventure for experienced trekkers. The trek crosses the Bali Pass, connecting the Har Ki Dun and Yamunotri valleys.",
		duration: "8",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "12000",
		availableSlots: "5",
		bookingDeadline: "2025-02-01",
		coverImage: "https://example.com/bali-pass-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Taluka",
				description:
					"The trek begins with a drive to Taluka, a scenic village. From here, you will start the trek to the base camp.",
				icon: "trek",
			},
			{
				title: "Day 2-3: Taluka to Osla",
				description:
					"Trek through beautiful forests, crossing the scenic villages of Taluka and Osla.",
				icon: "trek",
			},
			{
				title: "Day 4-5: Osla to Bali Pass",
				description:
					"Trek to the Bali Pass base camp and then continue to the pass, witnessing stunning views of the mountains.",
				icon: "summit",
			},
			{
				title: "Day 6-8: Bali Pass to Yamunotri and Return",
				description:
					"Descend to Yamunotri and complete the trek through the majestic valleys and stunning landscapes.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Tenzing Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of guiding Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Bali Pass Trek Specialist",
			],
		},
	},
	{
		id: 42, // Bali Pass
		locationId: 7,
		title: "Bali Pass - The High Altitude Trek",
		description:
			"Trekking to Bali Pass offers an opportunity to experience the rugged terrain and the grandeur of the Garhwal Himalayas. A great trek for those who love high-altitude challenges.",
		duration: "7",
		groupSizeMin: "5",
		groupSizeMax: "9",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "11000",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/bali-pass-high-altitude.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Taluka",
				description:
					"Drive to Taluka and begin the trek to the base camp.",
				icon: "trek",
			},
			{
				title: "Day 2: Taluka to Osla",
				description:
					"Pass through the scenic village of Osla, trek through dense forests and meadows.",
				icon: "trek",
			},
			{
				title: "Day 3-4: Osla to Bali Pass",
				description:
					"Reach the Bali Pass, enjoying breathtaking views of the surrounding peaks.",
				icon: "summit",
			},
			{
				title: "Day 5-7: Bali Pass to Yamunotri and Return",
				description:
					"Descend to Yamunotri and enjoy the surrounding beauty as you return to Sankri.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Rohit Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of guiding high-altitude treks",
			certifications: [
				"Certified Trekking Guide",
				"High Altitude Trekking Specialist",
			],
		},
	},
	{
		id: 43, // Bali Pass
		locationId: 7,
		title: "Bali Pass - The Ultimate Challenge",
		description:
			"For the seasoned trekkers, this trek pushes your limits. Bali Pass trek is one of the most challenging in the Garhwal region, but the reward is worth it.",
		duration: "9",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "13000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/bali-pass-challenge.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Taluka",
				description:
					"Begin your journey from Sankri and trek to the beautiful village of Taluka.",
				icon: "trek",
			},
			{
				title: "Day 2-4: Taluka to Osla",
				description:
					"Trek through scenic villages and lush forests, reaching Osla after a few days of trekking.",
				icon: "trek",
			},
			{
				title: "Day 5-7: Osla to Bali Pass",
				description:
					"The most challenging part of the trek, crossing high-altitude terrains to reach Bali Pass.",
				icon: "summit",
			},
			{
				title: "Day 8-9: Bali Pass to Yamunotri and Return",
				description:
					"Descend through the serene landscapes of Yamunotri and return to Sankri.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Suresh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "16 years of leading high-altitude treks",
			certifications: [
				"Certified Trekking Guide",
				"Advanced Trekking Specialist",
			],
		},
	},
	{
		id: 44, // Bali Pass
		locationId: 7,
		title: "Bali Pass - Winter Expedition",
		description:
			"A winter trek through the snow-clad mountains of the Garhwal region, Bali Pass offers an exhilarating adventure amidst icy trails and alpine meadows.",
		duration: "10",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "14000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/bali-pass-winter.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Taluka",
				description:
					"Drive to Taluka and begin your trek through the winter landscape.",
				icon: "snow",
			},
			{
				title: "Day 2-4: Taluka to Osla",
				description:
					"Trek through snow-covered villages and frozen meadows to reach Osla.",
				icon: "snow",
			},
			{
				title: "Day 5-7: Osla to Bali Pass",
				description:
					"Cross the snow-covered slopes and high-altitude ridges to reach the summit of Bali Pass.",
				icon: "snow",
			},
			{
				title: "Day 8-10: Bali Pass to Yamunotri and Return",
				description:
					"Descend through snow-clad forests and alpine meadows, completing the trek at Yamunotri and return to Sankri.",
				icon: "snow",
			},
		],
		sherpa: {
			name: "Tenzing Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "18 years of guiding winter treks",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 45, // Bali Pass
		locationId: 7,
		title: "Bali Pass - The Himalayan Traverse",
		description:
			"Traverse the heart of the Garhwal Himalayas with Bali Pass trek. Known for its breathtaking views and challenging terrain, it is a trek for those seeking adventure and solitude.",
		duration: "9",
		groupSizeMin: "5",
		groupSizeMax: "9",
		difficulty: "High",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: true,
		price: "12500",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/bali-pass-himalayan.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Taluka",
				description:
					"Drive to Taluka and start the trek to Osla through picturesque landscapes.",
				icon: "trek",
			},
			{
				title: "Day 2-4: Taluka to Osla",
				description:
					"Enjoy the beauty of dense forests and scenic meadows as you trek to Osla.",
				icon: "trek",
			},
			{
				title: "Day 5-7: Osla to Bali Pass",
				description:
					"Conquer the steep and challenging trail to reach Bali Pass, surrounded by pristine Himalayan peaks.",
				icon: "summit",
			},
			{
				title: "Day 8-9: Bali Pass to Yamunotri and Return",
				description:
					"Complete the descent through the majestic Yamunotri valley and head back to Sankri.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Rohit Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "14 years of leading Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Himalayan Trekking Specialist",
			],
		},
	},
	{
		id: 46, // Kedarkantha
		locationId: 9,
		title: "Kedarkantha - Winter Wonderland",
		description:
			"Embark on a mesmerizing winter trek to Kedarkantha, known for its snow-covered trails and breathtaking panoramic views. This trek is perfect for beginners and intermediate trekkers looking to explore the winter magic of the Himalayas.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "9500",
		availableSlots: "5",
		bookingDeadline: "2025-02-05",
		coverImage: "https://example.com/kedarkantha-winter.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"The trek starts with a drive to Sankri, followed by a short trek to Juda Ka Talab, a serene lake surrounded by thick oak forests.",
				icon: "trek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through snow-covered forests to reach Kedarkantha base camp, with views of the majestic Kedarkantha peak.",
				icon: "trek",
			},
			{
				title: "Day 3: Summit Day - Kedarkantha Peak",
				description:
					"Climb to the summit of Kedarkantha at 12,500 feet, where you can enjoy panoramic views of the snow-capped peaks.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Hargaon",
				description:
					"After reaching the summit, descend through beautiful meadows and forests to reach Hargaon campsite.",
				icon: "descent",
			},
			{
				title: "Day 5: Hargaon to Sankri",
				description:
					"Descend further through scenic landscapes back to Sankri, completing your adventure.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Ramesh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding winter treks",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 47, // Kedarkantha
		locationId: 9,
		title: "Kedarkantha - The Summit Expedition",
		description:
			"Take on the famous Kedarkantha Summit Trek, known for its stunning views of the Himalayan range and serene forest trails. This trek is suitable for beginners and intermediate trekkers.",
		duration: "7",
		groupSizeMin: "6",
		groupSizeMax: "9",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "10500",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/kedarkantha-summit.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Drive to Sankri and start the trek to Juda Ka Talab, an alpine lake surrounded by pine and oak forests.",
				icon: "trek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through snow-covered paths to reach the base camp, where you'll set up your tents with a spectacular view of the peaks.",
				icon: "trek",
			},
			{
				title: "Day 3: Summit Day - Kedarkantha Peak",
				description:
					"Climb to the summit of Kedarkantha and witness a 360-degree view of the Himalayan peaks, including Swargarohini, Black Peak, and more.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Hargaon",
				description:
					"Descend from the summit to Hargaon, soaking in the beauty of the surrounding meadows.",
				icon: "descent",
			},
			{
				title: "Day 5: Hargaon to Sankri",
				description:
					"Descend further to Sankri, completing the memorable trek to Kedarkantha.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Suresh Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of guiding Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Kedarkantha Specialist",
			],
		},
	},
	{
		id: 48, // Kedarkantha
		locationId: 9,
		title: "Kedarkantha - Himalayan Escape",
		description:
			"Escape into the wild with a trek to Kedarkantha, where you will experience pristine beauty and tranquility while trekking through alpine forests, crossing snowfields, and reaching the peak at 12,500 feet.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "9900",
		availableSlots: "5",
		bookingDeadline: "2025-02-15",
		coverImage: "https://example.com/kedarkantha-escape.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Begin your journey with a short trek to Juda Ka Talab, nestled in a forest.",
				icon: "trek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Continue the trek to Kedarkantha base camp, traversing snow-clad forests.",
				icon: "trek",
			},
			{
				title: "Day 3: Summit Day - Kedarkantha Peak",
				description:
					"Summit Kedarkantha Peak, enjoying mesmerizing views of snow-capped mountains and valleys.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Hargaon",
				description:
					"Descend to Hargaon, a peaceful campsite surrounded by lush green meadows.",
				icon: "descent",
			},
			{
				title: "Day 5: Hargaon to Sankri",
				description: "Descend back to Sankri, completing your trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Tenzing Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "14 years of leading trekking expeditions",
			certifications: [
				"Certified Trekking Guide",
				"Alpine Trekking Specialist",
			],
		},
	},
	{
		id: 49, // Kedarkantha
		locationId: 9,
		title: "Kedarkantha - The Classic Trek",
		description:
			"The Kedarkantha trek is a classic Himalayan winter trek, offering spectacular views of the surrounding peaks and forests. This is a must-do trek for all nature lovers and adventure seekers.",
		duration: "5",
		groupSizeMin: "4",
		groupSizeMax: "8",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "9000",
		availableSlots: "5",
		bookingDeadline: "2025-02-10",
		coverImage: "https://example.com/kedarkantha-classic.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Drive to Sankri and start the trek to Juda Ka Talab, an alpine lake surrounded by dense oak forests.",
				icon: "trek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek to the Kedarkantha base camp, passing through snow-covered meadows and forests.",
				icon: "trek",
			},
			{
				title: "Day 3: Summit Day - Kedarkantha Peak",
				description:
					"Climb to the summit and enjoy stunning views of Swargarohini, Black Peak, and other majestic peaks.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Hargaon",
				description:
					"Descend to Hargaon campsite, where you can relax and enjoy the natural beauty.",
				icon: "descent",
			},
			{
				title: "Day 5: Hargaon to Sankri",
				description:
					"Complete the descent to Sankri, concluding the classic Kedarkantha trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Bikash Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "8 years of guiding Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Winter Trekking Specialist",
			],
		},
	},
	{
		id: 50, // Kedarkantha
		locationId: 9,
		title: "Kedarkantha - Adventure Seekers Trek",
		description:
			"Designed for adventure seekers, this Kedarkantha trek offers a thrilling experience through snow-covered forests, alpine meadows, and a summit that promises spectacular views.",
		duration: "6",
		groupSizeMin: "5",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Sankri, Uttarakhand",
		isSponsored: false,
		price: "10000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/kedarkantha-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Sankri to Juda Ka Talab",
				description:
					"Arrive at Sankri and trek to Juda Ka Talab, known for its tranquil surroundings and beautiful lake.",
				icon: "trek",
			},
			{
				title: "Day 2: Juda Ka Talab to Kedarkantha Base Camp",
				description:
					"Trek through beautiful snow-covered paths to reach Kedarkantha base camp.",
				icon: "trek",
			},
			{
				title: "Day 3: Summit Day - Kedarkantha Peak",
				description:
					"Summit Kedarkantha, a peak offering panoramic views of snow-covered peaks and valleys.",
				icon: "summit",
			},
			{
				title: "Day 4: Descend to Hargaon",
				description:
					"After summiting, descend to Hargaon for a relaxing overnight stay.",
				icon: "descent",
			},
			{
				title: "Day 5: Hargaon to Sankri",
				description: "Descend further to Sankri, completing the trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Pradeep Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "9 years of trekking experience",
			certifications: [
				"Certified Trekking Guide",
				"Adventure Trekking Specialist",
			],
		},
	},
	{
		id: 51, // Roopkund
		locationId: 8,
		title: "Roopkund - The Mystery Lake Trek",
		description:
			"Embark on a thrilling adventure to Roopkund, famously known as the 'Mystery Lake' due to its skeletal remains. This trek will take you through dense forests, alpine meadows, and the stunning Roopkund lake.",
		duration: "8",
		groupSizeMin: "5",
		groupSizeMax: "10",
		difficulty: "Challenging",
		startingPoint: "Debra, Uttarakhand",
		isSponsored: true,
		price: "14500",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/roopkund-mystery.jpg",
		trekDays: [
			{
				title: "Day 1: Debra to Lohajung",
				description:
					"Start your journey with a scenic drive to Lohajung, where the trek begins. Spend the night at Lohajung.",
				icon: "trek",
			},
			{
				title: "Day 2: Lohajung to Didina",
				description:
					"Trek through dense forests to Didina, a small village with breathtaking views of the surrounding mountains.",
				icon: "trek",
			},
			{
				title: "Day 3: Didina to Ali Bugyal",
				description:
					"Trek through beautiful alpine meadows to reach Ali Bugyal, a popular campsite with stunning views.",
				icon: "trek",
			},
			{
				title: "Day 4: Ali Bugyal to Bedni Bugyal",
				description:
					"Continue your trek through lush meadows and reach Bedni Bugyal, a picturesque campsite.",
				icon: "trek",
			},
			{
				title: "Day 5: Bedni Bugyal to Roopkund",
				description:
					"Trek to the famous Roopkund lake, where you'll witness the mystery of the skeletal remains.",
				icon: "summit",
			},
			{
				title: "Day 6: Roopkund to Bedni Bugyal",
				description:
					"Descend back to Bedni Bugyal for a relaxing overnight stay.",
				icon: "descent",
			},
			{
				title: "Day 7: Bedni Bugyal to Lohajung",
				description:
					"Descend further to Lohajung, completing your trek.",
				icon: "descent",
			},
			{
				title: "Day 8: Lohajung to Debra",
				description:
					"Drive back to Debra, concluding the Roopkund Mystery Lake trek.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Sandeep Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of guiding high-altitude treks",
			certifications: [
				"Certified Trekking Guide",
				"High-altitude Trekking Specialist",
			],
		},
	},
	{
		id: 52, // Roopkund
		locationId: 8,
		title: "Roopkund - Himalayan Challenge",
		description:
			"A challenging trek to Roopkund, where you will hike through snowfields, alpine meadows, and rugged terrains. A trek for adventure seekers.",
		duration: "9",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "Difficult",
		startingPoint: "Debra, Uttarakhand",
		isSponsored: false,
		price: "16000",
		availableSlots: "5",
		bookingDeadline: "2025-02-20",
		coverImage: "https://example.com/roopkund-challenge.jpg",
		trekDays: [
			{
				title: "Day 1: Debra to Lohajung",
				description:
					"Arrive at Lohajung and prepare for the trek with a scenic view of the surrounding mountains.",
				icon: "trek",
			},
			{
				title: "Day 2: Lohajung to Didina",
				description:
					"Trek to Didina village through dense forests and small streams.",
				icon: "trek",
			},
			{
				title: "Day 3: Didina to Ali Bugyal",
				description:
					"Ascend to Ali Bugyal, a beautiful campsite surrounded by green meadows and stunning views of the mountains.",
				icon: "trek",
			},
			{
				title: "Day 4: Ali Bugyal to Bedni Bugyal",
				description:
					"Trek further to Bedni Bugyal, a place known for its sprawling meadows and breathtaking views.",
				icon: "trek",
			},
			{
				title: "Day 5: Bedni Bugyal to Roopkund",
				description:
					"Reach Roopkund Lake and witness the mystery of the skeletons that lie at the bottom of the lake.",
				icon: "summit",
			},
			{
				title: "Day 6: Roopkund to Bedni Bugyal",
				description:
					"Descend back to Bedni Bugyal for a well-earned rest.",
				icon: "descent",
			},
			{
				title: "Day 7: Bedni Bugyal to Lohajung",
				description:
					"Trek down to Lohajung through meadows and forests.",
				icon: "descent",
			},
			{
				title: "Day 8: Lohajung to Debra",
				description:
					"Drive back to Debra, concluding the Roopkund trek.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Vikram Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "18 years of guiding Himalayan treks",
			certifications: [
				"Certified Trekking Guide",
				"Snow Trekking Expert",
			],
		},
	},
	{
		id: 53, // Roopkund
		locationId: 8,
		title: "Roopkund - The Legend of Skeletons",
		description:
			"Join the trek to Roopkund, one of the most famous trekking destinations in India, known for its eerie lake and the skeletons that lie within. This trek takes you through scenic landscapes and stunning views.",
		duration: "7",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "Challenging",
		startingPoint: "Debra, Uttarakhand",
		isSponsored: false,
		price: "13500",
		availableSlots: "5",
		bookingDeadline: "2025-02-18",
		coverImage: "https://example.com/roopkund-legend.jpg",
		trekDays: [
			{
				title: "Day 1: Debra to Lohajung",
				description:
					"Arrive at Lohajung, where your trek begins. Spend the night at this quaint village.",
				icon: "trek",
			},
			{
				title: "Day 2: Lohajung to Didina",
				description:
					"Trek to Didina, a village surrounded by lush green hills and forests.",
				icon: "trek",
			},
			{
				title: "Day 3: Didina to Ali Bugyal",
				description:
					"Continue through dense forests and meadows to reach Ali Bugyal, one of the highest meadows in Asia.",
				icon: "trek",
			},
			{
				title: "Day 4: Ali Bugyal to Bedni Bugyal",
				description:
					"Trek through thick alpine vegetation to reach Bedni Bugyal.",
				icon: "trek",
			},
			{
				title: "Day 5: Bedni Bugyal to Roopkund",
				description:
					"Trek to the infamous Roopkund Lake and explore the mystery of the skeletal remains.",
				icon: "summit",
			},
			{
				title: "Day 6: Roopkund to Bedni Bugyal",
				description:
					"Descend back to Bedni Bugyal, taking in the majestic views along the way.",
				icon: "descent",
			},
			{
				title: "Day 7: Bedni Bugyal to Lohajung",
				description:
					"Complete the descent to Lohajung, concluding your trek.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Raj Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "10 years of guiding treks to high-altitude lakes",
			certifications: [
				"Certified Trekking Guide",
				"Snow Trekking Expert",
			],
		},
	},
	{
		id: 54, // Roopkund
		locationId: 8,
		title: "Roopkund - The Ultimate Adventure",
		description:
			"This challenging trek to Roopkund takes you through unexplored terrains and offers an adrenaline-filled adventure. Conquer high-altitude passes, cross glaciers, and discover the mystery of Roopkund Lake.",
		duration: "10",
		groupSizeMin: "6",
		groupSizeMax: "10",
		difficulty: "Difficult",
		startingPoint: "Debra, Uttarakhand",
		isSponsored: false,
		price: "17000",
		availableSlots: "5",
		bookingDeadline: "2025-02-30",
		coverImage: "https://example.com/roopkund-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Debra to Lohajung",
				description:
					"Drive to Lohajung, where the trek starts. Prepare for your Himalayan adventure.",
				icon: "trek",
			},
			{
				title: "Day 2: Lohajung to Didina",
				description:
					"Trek to Didina, a beautiful village with mesmerizing views of the surrounding peaks.",
				icon: "trek",
			},
			{
				title: "Day 3: Didina to Ali Bugyal",
				description:
					"Continue your journey to Ali Bugyal, one of the largest alpine meadows in Asia.",
				icon: "trek",
			},
			{
				title: "Day 4: Ali Bugyal to Bedni Bugyal",
				description:
					"Trek through lush forests and arrive at Bedni Bugyal.",
				icon: "trek",
			},
			{
				title: "Day 5: Bedni Bugyal to Roopkund",
				description:
					"Reach Roopkund Lake, the site of the famous skeletal remains, and marvel at the surrounding scenery.",
				icon: "summit",
			},
			{
				title: "Day 6: Roopkund to Bedni Bugyal",
				description:
					"Descend back to Bedni Bugyal, taking in the breathtaking views along the way.",
				icon: "descent",
			},
			{
				title: "Day 7: Bedni Bugyal to Lohajung",
				description: "Complete the descent back to Lohajung.",
				icon: "descent",
			},
			{
				title: "Day 8: Lohajung to Debra",
				description:
					"Drive back to Debra, concluding your trekking journey.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Deepak Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "12 years of high-altitude trekking experience",
			certifications: ["Certified Trekking Guide", "Himalayan Expert"],
		},
	},
	{
		id: 55, // Goechala
		locationId: 10,
		title: "Goechala - The Himalayan View Trek",
		description:
			"Trek to Goechala, one of the most beautiful treks in Sikkim, offering mesmerizing views of Kanchenjunga, the third-highest peak in the world.",
		duration: "9",
		groupSizeMin: "5",
		groupSizeMax: "10",
		difficulty: "Medium",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: false,
		price: "18000",
		availableSlots: "5",
		bookingDeadline: "2025-02-25",
		coverImage: "https://example.com/goechala-view.jpg",
		trekDays: [
			{
				title: "Day 1: Yuksom to Sachey",
				description:
					"Begin your trek from Yuksom and head towards the beautiful village of Sachey.",
				icon: "trek",
			},
			{
				title: "Day 2: Sachey to Bhakim",
				description:
					"Trek through dense forests, crossing streams and small waterfalls, to reach Bhakim.",
				icon: "trek",
			},
			{
				title: "Day 3: Bhakim to Phedang",
				description:
					"Continue trekking through alpine forests and reach the lush meadows of Phedang.",
				icon: "trek",
			},
			{
				title: "Day 4: Phedang to Dzongri",
				description:
					"Trek through picturesque landscapes to reach Dzongri, a popular campsite with panoramic views.",
				icon: "trek",
			},
			{
				title: "Day 5: Dzongri to Goechala Viewpoint",
				description:
					"Trek to the Goechala viewpoint, offering breathtaking views of the Kanchenjunga range.",
				icon: "summit",
			},
			{
				title: "Day 6: Goechala Viewpoint to Dzongri",
				description: "Descend back to Dzongri for an overnight stay.",
				icon: "descent",
			},
			{
				title: "Day 7: Dzongri to Phedang",
				description:
					"Return to Phedang, taking in the stunning views along the way.",
				icon: "descent",
			},
			{
				title: "Day 8: Phedang to Bhakim",
				description: "Descend further to Bhakim.",
				icon: "descent",
			},
			{
				title: "Day 9: Bhakim to Yuksom",
				description:
					"Complete your descent back to Yuksom, concluding your trek.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Tenzing Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "20 years of guiding in the Sikkim region",
			certifications: [
				"Certified Trekking Guide",
				"High-altitude Specialist",
			],
		},
	},
	{
		id: 56, // Goechala
		locationId: 10,
		title: "Goechala - Kanchenjunga Base Camp Trek",
		description:
			"Embark on an adventurous trek to Goechala and Kanchenjunga Base Camp, where you will get the closest view of the mighty Kanchenjunga peak.",
		duration: "12",
		groupSizeMin: "5",
		groupSizeMax: "10",
		difficulty: "Challenging",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: false,
		price: "22000",
		availableSlots: "5",
		bookingDeadline: "2025-02-28",
		coverImage: "https://example.com/goechala-kanchenjunga.jpg",
		trekDays: [
			{
				title: "Day 1: Yuksom to Sachen",
				description:
					"Start your trek to Sachen through dense forests and scenic views.",
				icon: "trek",
			},
			{
				title: "Day 2: Sachen to Bhakim",
				description:
					"Trek through thick forests to reach Bhakim, a serene campsite.",
				icon: "trek",
			},
			{
				title: "Day 3: Bhakim to Phedang",
				description:
					"Continue the journey towards Phedang, a beautiful meadow.",
				icon: "trek",
			},
			{
				title: "Day 4: Phedang to Dzongri",
				description:
					"Trek to Dzongri, a popular spot known for its breathtaking mountain views.",
				icon: "trek",
			},
			{
				title: "Day 5: Dzongri to Goechala",
				description:
					"Trek to the Goechala viewpoint, where you will experience panoramic views of Kanchenjunga and other peaks.",
				icon: "summit",
			},
			{
				title: "Day 6: Goechala to Dzongri",
				description: "Return to Dzongri for a well-earned rest.",
				icon: "descent",
			},
			{
				title: "Day 7: Dzongri to Phedang",
				description: "Descend to Phedang through picturesque meadows.",
				icon: "descent",
			},
			{
				title: "Day 8: Phedang to Bhakim",
				description:
					"Return to Bhakim, soaking in the majestic mountain views.",
				icon: "descent",
			},
			{
				title: "Day 9: Bhakim to Sachen",
				description: "Descend further to Sachen.",
				icon: "descent",
			},
			{
				title: "Day 10: Sachen to Yuksom",
				description: "Complete your trek by descending back to Yuksom.",
				icon: "descent",
			},
		],
		sherpa: {
			name: "Ang Dorjee Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "15 years of high-altitude guiding",
			certifications: ["Certified Trekking Guide", "Kanchenjunga Expert"],
		},
	},
	{
		id: 57, // Goechala
		locationId: 10,
		title: "Goechala - The Great Himalayan Adventure",
		description:
			"This thrilling trek will take you to Goechala, passing through lush forests, alpine meadows, and offering panoramic views of the Kanchenjunga range.",
		duration: "10",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "Medium",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: true,
		price: "21000",
		availableSlots: "5",
		bookingDeadline: "2025-02-30",
		coverImage: "https://example.com/goechala-himalayan.jpg",
		trekDays: [
			{
				title: "Day 1: Yuksom to Sachen",
				description:
					"Begin your journey to Sachen, passing through small villages and lush greenery.",
				icon: "trek",
			},
			{
				title: "Day 2: Sachen to Bhakim",
				description:
					"Trek further to Bhakim through dense forested trails.",
				icon: "trek",
			},
			{
				title: "Day 3: Bhakim to Phedang",
				description:
					"Continue your trek to Phedang, a meadow offering stunning views.",
				icon: "trek",
			},
			{
				title: "Day 4: Phedang to Dzongri",
				description:
					"Ascend to Dzongri, a place famous for its beautiful mountain views.",
				icon: "trek",
			},
			{
				title: "Day 5: Dzongri to Goechala Viewpoint",
				description:
					"Trek to the Goechala viewpoint for panoramic views of Kanchenjunga and surrounding peaks.",
				icon: "summit",
			},
			{
				title: "Day 6: Goechala to Dzongri",
				description: "Descend back to Dzongri.",
				icon: "descent",
			},
			{
				title: "Day 7: Dzongri to Phedang",
				description: "Continue your descent to Phedang.",
				icon: "descent",
			},
			{
				title: "Day 8: Phedang to Bhakim",
				description: "Descend to Bhakim for an overnight stay.",
				icon: "descent",
			},
			{
				title: "Day 9: Bhakim to Sachen",
				description:
					"Trek down to Sachen, taking in the scenic beauty around you.",
				icon: "descent",
			},
			{
				title: "Day 10: Sachen to Yuksom",
				description: "Return to Yuksom, completing your adventure.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Sergio Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "17 years of Himalayan trekking",
			certifications: [
				"Certified Trekking Guide",
				"Alpine Trekking Expert",
			],
		},
	},
	{
		id: 58, // Goechala
		locationId: 10,
		title: "Goechala - Kanchenjunga Base Camp & Beyond",
		description:
			"A majestic trek leading to Goechala and Kanchenjunga Base Camp, taking you through dense forests, alpine meadows, and rugged terrains.",
		duration: "11",
		groupSizeMin: "5",
		groupSizeMax: "8",
		difficulty: "Difficult",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: false,
		price: "24000",
		availableSlots: "5",
		bookingDeadline: "2025-02-22",
		coverImage: "https://example.com/goechala-kanchenjunga-beyond.jpg",
		trekDays: [
			{
				title: "Day 1: Yuksom to Sachen",
				description:
					"Start your trek from Yuksom to Sachen, passing through charming villages.",
				icon: "trek",
			},
			{
				title: "Day 2: Sachen to Bhakim",
				description: "Trek through dense forests to Bhakim.",
				icon: "trek",
			},
			{
				title: "Day 3: Bhakim to Phedang",
				description:
					"Continue trekking to Phedang, known for its expansive views.",
				icon: "trek",
			},
			{
				title: "Day 4: Phedang to Dzongri",
				description:
					"Trek to Dzongri, enjoying spectacular mountain views along the way.",
				icon: "trek",
			},
			{
				title: "Day 5: Dzongri to Goechala",
				description:
					"Reach the stunning Goechala viewpoint, with magnificent views of the Kanchenjunga range.",
				icon: "summit",
			},
			{
				title: "Day 6: Goechala to Dzongri",
				description: "Return to Dzongri for an overnight stay.",
				icon: "descent",
			},
			{
				title: "Day 7: Dzongri to Phedang",
				description: "Descend back to Phedang.",
				icon: "descent",
			},
			{
				title: "Day 8: Phedang to Bhakim",
				description: "Trek to Bhakim.",
				icon: "descent",
			},
			{
				title: "Day 9: Bhakim to Sachen",
				description: "Return to Sachen.",
				icon: "descent",
			},
			{
				title: "Day 10: Sachen to Yuksom",
				description: "Conclude your trek by descending back to Yuksom.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Karma Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "25 years of guiding in Sikkim",
			certifications: ["Certified Trekking Guide", "Kanchenjunga Expert"],
		},
	},
	{
		id: 59, // Goechala
		locationId: 10,
		title: "Goechala - Kanchenjunga Adventure Trek",
		description:
			"A challenging adventure trek to Goechala and Kanchenjunga Base Camp, with high-altitude trails, alpine meadows, and unparalleled mountain vistas.",
		duration: "14",
		groupSizeMin: "6",
		groupSizeMax: "12",
		difficulty: "Difficult",
		startingPoint: "Yuksom, Sikkim",
		isSponsored: false,
		price: "28000",
		availableSlots: "5",
		bookingDeadline: "2025-02-31",
		coverImage: "https://example.com/goechala-adventure.jpg",
		trekDays: [
			{
				title: "Day 1: Yuksom to Sachen",
				description:
					"Embark on your journey from Yuksom to Sachen through beautiful forests and villages.",
				icon: "trek",
			},
			{
				title: "Day 2: Sachen to Bhakim",
				description:
					"Trek to Bhakim, crossing streams and dense forests.",
				icon: "trek",
			},
			{
				title: "Day 3: Bhakim to Phedang",
				description:
					"Reach the meadow of Phedang, taking in expansive views of the mountains.",
				icon: "trek",
			},
			{
				title: "Day 4: Phedang to Dzongri",
				description:
					"Continue to Dzongri, a place renowned for its 360-degree mountain vistas.",
				icon: "trek",
			},
			{
				title: "Day 5: Dzongri to Goechala",
				description:
					"Reach the Goechala viewpoint for an unforgettable view of Kanchenjunga.",
				icon: "summit",
			},
			{
				title: "Day 6: Goechala to Dzongri",
				description: "Descend back to Dzongri.",
				icon: "descent",
			},
			{
				title: "Day 7: Dzongri to Phedang",
				description: "Trek to Phedang.",
				icon: "descent",
			},
			{
				title: "Day 8: Phedang to Bhakim",
				description: "Descend to Bhakim.",
				icon: "descent",
			},
			{
				title: "Day 9: Bhakim to Sachen",
				description: "Return to Sachen.",
				icon: "descent",
			},
			{
				title: "Day 10: Sachen to Yuksom",
				description: "Complete your trek by heading back to Yuksom.",
				icon: "return",
			},
		],
		sherpa: {
			name: "Lakpa Sherpa",
			avatar: "https://example.com/sherpa-avatar.jpg",
			experience: "22 years of high-altitude guiding",
			certifications: [
				"Certified Trekking Guide",
				"Alpine Trekking Expert",
			],
		},
	},
];

export default packages;
