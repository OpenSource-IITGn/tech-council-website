const SECRETARIES = [
	{
		id: 0,
		name: "DIGIS",
		members: {
			id: 0,
			name: "Dhyey Thummar",
			email: "dhyeykumar.thummar@iitgn.ac.in",
			image: "/assets/images/team/Dhyey_Thummar.jpg",
		},
	},
	{
		id: 1,
		name: "MEAN MECHANICS",
		members: [
			{
				id: 0,
				name: "Tejendra Patel",
				email: "tejendra.p@iitgn.ac.in",
				image: "/assets/images/team/Tejendra_Patel.jpg",
			},
			{
				id: 1,
				name: "Harsh Mandalia",
				email: "harsh.mv@iitgn.ac.in",
				image: "/assets/images/team/Harsh_mandalia.jpg",
			},
		],
	},
	{
		id: 2,
		name: "METIS",
		members: [
			{
				id: 0,
				name: "Kamal Vaishnav",
				email: "kamal.vaishnav@iitgn.ac.in",
				image: "/assets/images/team/Kamal_Vaishnav.jpg",
			},
			{
				id: 1,
				name: "Kanishk Singhal",
				email: "kanishk.singhal@iitgn.ac.in",
				image: "/assets/images/team/Kanishk_Singhal.jpg",
			},
		],
	},
	{
		id: 3,
		name: "ODYSSEY",
		members: {
			id: 0,
			name: "Deep Thakkar",
			email: "deep.st@iitgn.ac.in ",
			image: "/assets/icons/icons8-person-64.png",
		},
	},
	{
		id: 4,
		name: "ANVESHANAM",
		members: {
			id: 0,
			name: "Rajdeep Devra",
			email: "devra_rajdeep@iitgn.ac.in",
			image: "/assets/images/team/Rajdeep_Devra.JPG",
		},
	},
	{
		id: 5,
		name: "GRASP",
		members: [
			{
				id: 0,
				name: "Manas Mulpuri",
				email: "mulpuri.m@iitgn.ac.in",
				image: "/assets/images/team/Manas_Mulpuri.jpg",
			},
			{
				id: 1,
				name: "Sanskar Sharma",
				email: "sanskar.sharma@iitgn.ac.in",
				image: "/assets/images/team/Sanskar_Sharma.jpg",
			},
		],
	},
	{
		id: 6,
		name: "ML HOBBY GROUP",
		members: {
			id: 0,
			name: "Dwip Dalal",
			email: "dwip.dalal@iitgn.ac.in",
			image: "/assets/images/team/Dwip_Dalal.jpg",
		},
	},
	{
		id: 7,
		name: "WEB3/BLOCKCHAIN HOBBY GROUP",
		members: [
			{
				id: 0,
				name: "Pushpendra Pratap Singh",
				email: "pushpendra.pratap@iitgn.ac.in",
				image: "/assets/images/team/Pushpendra_Pratap_Singh.png",
			},
			{
				id: 1,
				name: "Mumuksh Tayal",
				email: "mumuksh.tayal@iitgn.ac.in",
				image: "/assets/images/team/Mumuksh_Tayal.jpg",
			},
		],
	},
	{
		id: 8,
		name: "HARDWARE,IoT,VLSI GROUP",
		members: [
			{
				id: 0,
				name: "Aryan Gupta",
				email: "aryan.gupta@iitgn.ac.in",
				image: "/assets/images/team/Aryan_Gupta.jpg",
			},
			{
				id: 1,
				name: "Patel Vrajesh",
				email: "patel.vrajesh@iitgn.ac.in",
				image: "/assets/images/team/Vrajesh_Patel.PNG",
			},
		],
	},
	{
		id: 9,
		name: "ESPORTS WING",
		members: [
			{
				id: 0,
				name: "Jitender Kumar",
				email: "kumar.jitender@iitgn.ac.in",
				image: "/assets/images/team/Jitender_Kumar.jpg",
			},
			{
				id: 1,
				name: "Akshay Mishra",
				email: "",
				image: "/assets/images/team/Akshay_Mishra.jpg",
			},
		],
	},
	{
		id: 10,
		name: "TINKERER'S LAB",
		members: [
			{
				id: 0,
				name: "Videh Patel",
				email: "videh.p@iitgn.ac.in",
				image: "/assets/images/team/Videh.JPG",
			},
			{
				id: 1,
				name: "Pallav Jain",
				email: "pallav.j@iitgn.ac.in",
				image: "/assets/icons/icons8-person-64.png",
				// image: "/assets/images/team/Videh.JPG",
			},
		],
	},
];

const FACULTY = {
	name: "FACULTY IN CHARGE",
	members: {
		id: 0,
		name: "Prof. Jaichander Swaminathan",
		email: "jaichander.s@iitgn.ac.in",
		image: "/assets/images/team/Jaichander_Swaminathan.jpg",
	},
};

const TECH_SECY = {
	name: "TECHNICAL SECRETARY",
	members: {
		id: 0,
		name: "Aniket Rajnish",
		email: "aniket.r@iitgn.ac.in",
		image: "/assets/images/team/Aniket_Rajnish.jpg",
	},
};

const MANAGEMENT = [
	{
		id: 0,
		name: "Technical Coordinator",
		members: {
			name: "Progyan Das",
			email: "progyan.das@iitgn.ac.in",
			image: "/assets/images/team/Progyan_Das.jpg",
		},
	},
	{
		id: 1,
		name: "Management Coordinator",
		members: {
			name: "Shruhrid Banthia",
			email: "shruhrid.banthia@iitgn.ac.in",
			image: "/assets/images/team/Shruhrid_Banthia.jpg",
			// image: "/assets/icons/icons8-person-64.png",
		},
	},
	{
		id: 2,
		name: "App and Website Manager",
		members: {
			name: "Shivam Chaudhary",
			email: "shivamchaudhary@iitgn.ac.in",
			image: "/assets/images/team/Shivam_Chaudhary.jpg",
		},
	},
];

const TEAM = {
	secretaries: SECRETARIES,
	faculty: FACULTY,
	tech_secy: TECH_SECY,
	management: MANAGEMENT,
};

export default TEAM;
