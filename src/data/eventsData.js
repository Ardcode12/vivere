export const techEventsData = [
  {
    id: 1,
    name: "The Paper Dimension",
    type: "Technical",
    description: "Present your research papers and innovative ideas in this interdimensional conference.",
    fullDescription: "Step into the Paper Dimension where your research transcends reality. Present groundbreaking papers on cutting-edge technology, AI, Machine Learning, IoT, and more. This is your chance to showcase innovative solutions to real-world problems.",
    date: "Janaury 3, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Conference Hall A",
    teamSize: "1-3 Members",
     firstPrize: "00",
     image: "/images/paper.jpg",
    //secondPrize: "10000",
    // thirdPrize: "5000",
    rules: [
      "Abstract submission deadline: March 10, 2024",
      "Presentation time: 10 minutes + 5 minutes Q&A",
      "Papers must be original and not published elsewhere",
      "IEEE format must be followed for paper submission",
      "Plagiarism will lead to immediate disqualification"
    ],
    coordinator1: { name: "Dr. Sarah Connor", phone: "+91 98765 43210" },
    coordinator2: { name: "Prof. John Doe", phone: "+91 87654 32109" }
  },
  {
    id: 2,
    name: "The Code of Cursed Dice",
    type: "Technical",
    description: "Break the curse with your coding skills in this intense programming challenge.",
    fullDescription: "Enter the realm where algorithms meet the supernatural. Solve complex coding challenges, debug cursed code, and compete in real-time programming battles. Languages supported: C, C++, Java, Python.",
    date: "January 3, 2026",
    time: "9:00 AM - 6:00 PM",
    venue: "Computer Lab 1",
    teamSize: "Individual",
    image: "/images/code.jpg",
    // firstPrize: "20000",
    // secondPrize: "15000",
    // thirdPrize: "10000",
    rules: [
      "Online preliminary round on March 10",
      "Top 50 participants qualify for finals",
      "Internet access will be disabled during the contest",
      "Use of unfair means will result in disqualification",
      "Bring your own laptops (recommended)"
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
    time: "11:00 AM - 3:00 PM",
    venue: "Design Studio",
    image: "/images/poster.jpg",
    teamSize: "1-2 Members",
    // firstPrize: "10000",
    // secondPrize: "7000",
    // thirdPrize: "4000"
  }
];

export const nonTechEventsData = [
  {
    id: 4,
    name: "Upside Down",
    type: "Non-Technical",
    description: "Navigate through mind-bending challenges in this fun-filled adventure event.",
    fullDescription: "Experience the thrill of the upside down through treasure hunts, escape rooms, and mystery solving. Test your wit, teamwork, and survival instincts.",
    date: "January 3, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Central Campus",
    image: "/images/upside1.jpg",
    teamSize: "1-3 Members",
    // firstPrize: "12000",
    // secondPrize: "8000",
    // thirdPrize: "5000"
  },
  {
    id: 5,
    name: "HPL Auction",
    type: "Non-Technical",
    description: "Build your supernatural team in this IPL-style auction game with a twist.",
    fullDescription: "Bid for players from different dimensions! Use strategy, resource management, and negotiation skills to build the ultimate supernatural cricket team.",
    date: "January 3, 2026",
    time: "3:00 PM - 6:00 PM",
    image: "/images/auction.jpg",
    venue: "Auditorium",
    teamSize: "1-3 Members",
    // firstPrize: "10000",
    // secondPrize: "6000",
    // thirdPrize: "4000"
  }
];

export const getAllEvents = () => [...techEventsData, ...nonTechEventsData];
