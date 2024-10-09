import Image1 from "../../assets/Bidbay.png";
import Image2 from "../../assets/Ecomstore.png";
import Image3 from "../../assets/Holidaze.png";

const sites = [
  {
    title: "BidBay",
    description:
      "An auction platform enabling users to list items for bidding and place bids on items listed by others. New users receive 1,000 credits upon registration, which can be earned through sales and used for purchases. Non-registered users can browse listings, while only registered users have bidding privileges.",
    image: Image1,
    demoLink: "https://bidbay.netlify.app",
    githubLink: "https://github.com/absim29/semester-project-2",
    tags: ["React", "JavaScript", "CSS", "API"],
  },
  {
    title: "eCOMstore",
    description:
      "Responsive eCommerce site with Noroff API integration, featuring product listings, cart, checkout, and a contact form. Includes search, item count in cart, discount display, and order confirmation. Built with React Router and styled-components for a clean, functional design.",
    image: Image2,
    demoLink: "https://ecomstore-react.netlify.app",
    githubLink: "https://github.com/absim29/js-frameworks-ca",
    tags: ["React", "JavaScript", "CSS", "API"],
  },
  {
    title: "Holidaze",
    description:
      "A modern front end for Holidaze, a new accommodation booking site, using their API. The project includes a customer-facing interface for booking stays and an admin side for venue registration and management of bookings. The design and UX are crafted to offer seamless interactions for both customers and venue administrators.",
    image: Image3,
    demoLink: "https://holidaze-explore.netlify.app",
    githubLink: "https://github.com/absim29/project-exam-2",
    tags: ["React", "Bootstrap", "MUI", "API", "CSS", "JavaScript"],
  },
];

export default sites;
