/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Button } from "theme-ui";

// import Particles from "react-tsparticles";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import BugTracker from "assets/bugTracker.png";
import Ecommerce from "assets/ecommerce.png";
import Stock from "assets/stock.png";
import Portfolio from "assets/portfolio.png";
import Falconi from "assets/falconi.png";

const data = [
  {
    id: 1,
    title: "Bug Tracker",
    description:
      "Fullstack project management tool for teams to organize their workflow. Deployed on Heroku, please be patient while it boots.",
    technologies: "React | Rails | Material UI | Chart-JS",
    image: BugTracker,
    link: "https://peaceful-meadow-98604.herokuapp.com/dashboard",
  },
  {
    id: 2,
    title: "Ecommerce",
    description:
      "Fullstack Ecommerce site with cart functionality and authenticaion. Deployed on Heroku, please be patient while it boots.",
    technologies: "React | Rails | Material UI",
    image: Ecommerce,
    link: "https://ecommerce-material-ui-project.herokuapp.com/log-in",
  },
  {
    id: 3,
    title: "Stock Tracker/Dashboard",
    description:
      "A tool to track stocks and manage a stock portfolio. Built with React, Semantic UI and ChartJS. Deployed on Netlify with JSON Server.",
    technologies: "React | Semantic UI | Chart-JS",
    image: Stock,
    link: "https://financial-dashboard-project.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio Site",
    description:
      "Fully responsive personal portfolio site built using Next.JS for SEO and perfomance optimization. Deployed to Hostgator.",
    technologies: "NextJS | Theme UI",
    image: Portfolio,
    link: "https://dan-hyman.com",
  },
  {
    id: 5,
    title: "Falconi Media Digital Agency Site",
    description:
      "My solo first project. A fully responsive marketing site built for a digital agency integrating the Vimeo api. Deployed to Github pages.",
    technologies: "Bootstrap | Vimeo",
    image: Falconi,
    link: "https://falconimedia.com",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Projects() {
  return (
    <div style={{ positoon: "relative" }}>
      <section
        className="projects"
        sx={{ height: "110vh", position: "relative" }}
      >
        <Container css={{ textAlign: "center" }}>
          <div sx={{ height: "100px" }} />
        </Container>
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <a
                target="blank"
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                  <Heading as="h3" sx={styles.title}>
                    {item.title}
                  </Heading>
                  <Image sx={styles.image} src={item.image}></Image>
                  <Text sx={styles.description}>{item.description}</Text>
                  <div className="card-footer">
                    <div>
                      <Heading as="h4" sx={styles.heading}>
                        Technologies:
                      </Heading>
                      <Text sx={styles.designation}>{item.technologies}</Text>
                    </div>
                  </div>
                </Box>
              </a>
            ))}
          </Carousel>
        </Box>
      </section>
    </div>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-80px",
    px: "15px",
    ".carousel-container": {
      width: "100vw",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.6, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.2,
  },
  links: {
    display: "flex",
  },
  image: {
    height: "30%",
  },
};
