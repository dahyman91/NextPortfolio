import Chat from "assets/widget/chat.svg";
import Community from "assets/widget/community.svg";
import Github from "assets/widget/github.svg";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: "Community",
      title: "Email Me",
      description: "dahyman91@gmail.com",
    },
    {
      id: 2,
      iconSrc: Community,
      altText: "Chat",
      title: "Call Me",
      description: "917.828.5927",
    },
    {
      id: 3,
      iconSrc: Github,
      altText: "Github",
      title: "Connect With Me",
      description: "https://www.linkedin.com/in/dan-hyman-dev/",
    },
  ],
  menuItem: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/",
      label: "Adversite",
    },
    {
      path: "/",
      label: "Supports",
    },
    {
      path: "/",
      label: "Marketing",
    },
    {
      path: "/",
      label: "Contact",
    },
  ],
};
