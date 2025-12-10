export const techEventsData = [
  {
    id: 1,
    name: "The Paper Dimension",
    type: "Technical",
    description: "Present your research papers and innovative ideas in this interdimensional conference.",
    fullDescription: "Step into the Paper Dimension where your research transcends reality. Present groundbreaking papers on cutting-edge technology, AI, Machine Learning, IoT, and more. This is your chance to showcase innovative solutions to real-world problems.",
    date: "Janaury 3, 2026",
    time: "9:00 AM - 10:30 AM",
    venue: "Conference Hall A",
    teamSize: "2-3 Members",
     firstPrize: "00",
     image: "/images/paper.jpg",
    //secondPrize: "10000",
    // thirdPrize: "5000",
    rules: [
      "Participants must be present at the respective venues on time",
      "Presentation time: 8 minutes + 2 minutes Q&A",
      "Papers must be original and not published elsewhere",
      "Plagiarism will lead to immediate disqualification",
      "Further details will be given on the whatsapp group"
    ],
    coordinator1: { name: "Dharun Vidyakar", phone: "+91 98765 43210" },
    coordinator2: { name: "Prof. John Doe", phone: "+91 87654 32109" }
  },
  {
    id: 2,
    name: "The Code of Cursed Dice",
    type: "Technical",
    description: "Break the curse with your coding skills in this intense programming challenge.",
    fullDescription: "Enter the realm where algorithms meet the supernatural. Solve complex coding challenges, debug cursed code, and compete in real-time programming battles. Languages supported: C, C++, Java, Python.",
    date: "January 3, 2026",
    time: "10:30 AM - 11:30 AM",
    venue: "Computer Lab 1",
    teamSize: "2 Members",
    image: "/images/code.jpg",
    // firstPrize: "20000",
    // secondPrize: "15000",
    // thirdPrize: "10000",
    rules: [
      
      "For coding any type of DSA question will be asked",
      "Only one round but both of the members will be involved in coding",
      "while one codes the other member will be performing tasks",
      "Internet access will be disabled during the contest",
      "Use of unfair means will result in disqualification",
      "Further details will be given on the whatsapp group"

    ],
    coordinator1: { name: "Alex Kumar", phone: "+91 99887 76655" },
    coordinator2: { name: "Rita Sharma", phone: "+91 88776 65544" }
  },
  {
    id: 3,
    name: "The Prompt Gateway",
    type: "Technical",
    description: "Design posters that open gateways between dimensions using AI and creativity.",
    fullDescription: "Combine artistic vision with technical prowess. Use AI tools, Photoshop, and your imagination to create stunning posters that tell stories from the upside down.",
    date: "January 3, 2026",
    time: "11:30 AM - 12:30 PM",
    venue: "Design Studio",
    image: "/images/poster.jpg",
    teamSize: "2 Members",
    // firstPrize: "10000",
    // secondPrize: "7000",
    // thirdPrize: "4000"
    rules: [
      
      "You will be given a brand",
      "You have to create a poster only using AI (prompt) ",
      "You have to pitch the poster you created",
      "Further details will be given on the whatsapp group"

    ],
    coordinator1: { name: "Alex Kumar", phone: "+91 99887 76655" },
    coordinator2: { name: "Rita Sharma", phone: "+91 88776 65544" }
  }
];

export const nonTechEventsData = [
  {
    id: 4,
    name: "Upside Down",
    type: "Non-Technical",
    description: "Navigate through mind-bending challenges in this fun-filled adventure event.",
    fullDescription: "Experience the thrill of the upside down through opposite talks ",
    date: "January 3, 2026",
    time: "1:30 PM - 2:30 PM",
    venue: "Central Campus",
    image: "/images/upside1.jpg",
    teamSize: "Individual Participation",
    // firstPrize: "12000",
    // secondPrize: "8000",
    // thirdPrize: "5000"
    rules: [
      
      "Participant must be present at the respective venues on time",
      "For upside down the players must answer irrelevant to the question asked ",
  "Further details will be given on the whatsapp group"      

    ],
    coordinator1: { name: "Alex Kumar", phone: "+91 99887 76655" },
    coordinator2: { name: "Rita Sharma", phone: "+91 88776 65544" }
  },
  {
    id: 5,
    name: "HPL Auction",
    type: "Non-Technical",
    description: "Build your supernatural team in this IPL-style auction game with a twist.",
    fullDescription: "Bid for players from different dimensions! Use strategy, resource management, and negotiation skills to build the ultimate supernatural cricket team.",
    date: "January 3, 2026",
    time: "1:30 PM - 2:45 PM",
    image: "/images/auction.jpg",
    venue: "Auditorium",
    teamSize: "2 Members",
    // firstPrize: "10000",
    // secondPrize: "6000",
    // thirdPrize: "4000"
    rules: [
      
      "Only first come first basis followed",
      "Only 9 teams are allowed to participate",
      "Teams will be given a purse and players will be auctioned best team wins",
      "Further details will be given on the whatsapp group"

    ],
    coordinator1: { name: "Alex Kumar", phone: "+91 99887 76655" },
    coordinator2: { name: "Rita Sharma", phone: "+91 88776 65544" }
  }
];

export const getAllEvents = () => [...techEventsData, ...nonTechEventsData];
