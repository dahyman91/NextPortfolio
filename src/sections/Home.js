/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";

import TypeWriter from "components/typewriter";
import Test from "sections/test";
export default function Home() {
  return (
    <section sx={styles.banner} className="" id="home">
      <Test />
    </section>
  );
}

const styles = {
  banner: {},
};
// zIndex: 10,
// pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
// pb: [2, null, 0, null, 2, 0, null, 5],
// position: "relative",
// zIndex: 2,
// "&::before": {
//   position: "absolute",
//   content: '""',
//   bottom: 6,
//   left: 0,
//   height: "100%",
//   width: "100%",
//   zIndex: -1,
//   backgroundImage: `url(${ShapeLeft})`,
//   backgroundRepeat: `no-repeat`,
//   backgroundPosition: "bottom left",
//   backgroundSize: "36%",
// },
// "&::after": {
//   position: "absolute",
//   content: '""',
//   bottom: "40px",
//   right: 0,
//   height: "100%",
//   width: "100%",
//   zIndex: -1,
//   backgroundImage: `url(${ShapeRight})`,
//   backgroundRepeat: `no-repeat`,
//   backgroundPosition: "bottom right",
//   backgroundSize: "32%",
// },
//     container: {
//       minHeight: "inherit",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//     },
//     contentBox: {
//       width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
//       height: "100vh",
//       mx: "auto",
//       textAlign: "center",
//       mb: ["40px", null, null, null, null, 7],
//     },
//     imageBox: {
//       justifyContent: "center",
//       textAlign: "center",
//       display: "inline-flex",
//       mb: [0, null, -6, null, null, "-40px", null, -3],
//       img: {
//         position: "relative",
//         height: [245, "auto"],
//       },
//     },
//   },
// };
