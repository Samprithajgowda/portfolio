export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Machine Learning",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const skillCategories = [
	{
		title: "Core Programming",
		skills: [
			{
				name: "Python",
				icon: "/tech/python.svg",
			},
		],
	},
	{
		title: "AI / ML",
		skills: [
			{
				name: "Machine Learning",
				icon: "/tech/scikitlearn.svg",
			},
			{
				name: "TensorFlow",
				icon: "/tech/tensorflow.svg",
			},
			{
				name: "Natural Language Processing",
				icon: "/tech/huggingface.svg",
			},
			{
				name: "Pandas",
				icon: "/tech/pandas.svg",
			},
			{
				name: "NumPy",
				icon: "/tech/numpy.svg",
			},
		],
	},
	{
		title: "Development",
		skills: [
			{
				name: "React",
				icon: "/tech/reactjs.webp",
			},
			{
				name: "HTML/CSS",
				icon: "/tech/html.webp",
			},
		],
	},
];


const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a professional networking platform that helps you connect with industry peers, showcase your skills, and explore career opportunities.",
		name: "LinkedIn",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/sampritha-j-gowda/",
	},
	{
		id: 2,
		testimonial:
			"GitHub is a powerful platform for hosting and sharing code, collaborating on projects, and showcasing your open-source contributions.",
		name: "GitHub",
		image: "/tech/github.webp",
		link: "https://github.com/Samprithajgowda",
	},
	{
		id: 3,
		testimonial:
			"LeetCode is a popular platform for practicing coding problems, improving problem-solving skills, and preparing for technical interviews.",
		name: "LeetCode",
		image: "/creator.webp",
		link: "https://leetcode.com/u/Sampritha_J_Gowda/",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Gesture Control Using Jetson Nano",
		description:
			"A real-time gesture recognition system built using NVIDIA Jetson Nano that detects and interprets hand gestures to control devices without physical touch, using computer vision and deep learning.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "OpenCV",
				color: "green-text-gradient",
			},
			{
				name: "Jetson Nano",
				color: "pink-text-gradient",
			},
			{
				name: "Deep Learning",
				color: "orange-text-gradient",
			},
			{
				name: "Computer Vision",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/Samprithajgowda",
		platform: "Web",
		deploy_link: "https://github.com/Samprithajgowda",
	},
	{
		name: "Facial Emotion Recognition System",
		description:
			"A deep learning-based system that detects and classifies human facial emotions in real-time using image processing and neural networks, capable of identifying emotions like happy, sad, angry, surprised, and more.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "TensorFlow",
				color: "orange-text-gradient",
			},
			{
				name: "OpenCV",
				color: "green-text-gradient",
			},
			{
				name: "Deep Learning",
				color: "pink-text-gradient",
			},
			{
				name: "CNN",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		source_code_link: "https://github.com/Samprithajgowda/facial-emotion-recognition-system.git",
		platform: "Web",
		deploy_link: "https://github.com/Samprithajgowda/facial-emotion-recognition-system.git",
	},
	{
		name: "AI Study Planner",
		description:
			"An AI-powered study planner that helps students organize their study schedules, set goals, and get personalized study recommendations based on their learning patterns and deadlines.",
		tags: [
			{
				name: "AI",
				color: "blue-text-gradient",
			},
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "Node.js",
				color: "pink-text-gradient",
			},
			{
				name: "JavaScript",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/Akshay-Kzi/study-planner.git",
		platform: "Web",
		deploy_link: "https://github.com/Akshay-Kzi/study-planner.git",
	},
	{
		name: "Scribble Clone",
		description:
			"A fun multiplayer online drawing and guessing game inspired by Skribbl.io, where players take turns drawing a word while others guess it in real-time using WebSockets.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Node.js",
				color: "green-text-gradient",
			},
			{
				name: "Socket.io",
				color: "pink-text-gradient",
			},
			{
				name: "JavaScript",
				color: "orange-text-gradient",
			},
			{
				name: "CSS",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/Samprithajgowda/Skribble-clone.git",
		platform: "Web",
		deploy_link: "https://github.com/Samprithajgowda/Skribble-clone.git",
	},
];

export { services, skillCategories, testimonials, projects };
