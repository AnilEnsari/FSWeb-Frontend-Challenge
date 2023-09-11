import JavascriptLogo from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import NodeLogo from "../assets/node.png";
import VsCodeLogo from "../assets/vsCode.png";
import FigmaLogo from "../assets/figma.png";
import ProjectPicture1 from "../assets/ProjectPictures1.png";
import ProjectPicture2 from "../assets/Journey.png";
import ReduxLogo from "../assets/redux1.png";

const data = {
  tr: {
    header: {
      name: "Anıl",
      title: "Ben Bir Fullstack",
      titleSecond: "Developerım...",
      description:
        "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
      to: "TO",
      languageSwitch: "ENGLISH",
    },
    skills: {
      skils: "Yetenekler",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
    },
    profile: {
      profile: "Profil Bilgilerim",
      title: "Genel Bilgilerim",
      birthday: "Doğum Tarihi",
      city: "İkamet Şehri",
      graduatedFrom: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      response: {
        birthday: "26.11.1990",
        city: "İzmir",
        graduatedFrom: "EGE Üni. Makine Mühendisliği Lisans, 2014",
        role: "Fullstack Developer",
      },
      aboutMe: "Hakkımda",
      aboutMeFirstP:
        "TÜRKÇE LOREM ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
      aboutMeSecondP:
        "TÜRKÇE Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
    },
    projects: {
      title: "Projelerim",
      visit: "Siteyi Görüntüle",
      projectsArray: [
        {
          title: "Workintech",
          img: ProjectPicture1,
          description:
            "TÜRKÇE A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          programs: ["Redux", "React", "Vercel"],
        },
        {
          title: "Journey",
          img: ProjectPicture2,
          description:
            "TÜRKÇE A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          programs: ["React", "Redux", "Vercel"],
        },
      ],
    },
    footer: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin...",
      mail: "anilensari@gmail.com",
    },
  },

  en: {
    header: {
      name: "Anıl",
      title: "I am a Frontend",
      titleSecond: "Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      to: "TÜRKÇE",
      languageSwitch: "'YE GEÇ",
    },
    skills: {
      skils: "Skills",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
    },
    profile: {
      profile: "Profile",
      title: "Basic Information",
      birthday: "Birthday",
      city: "City",
      graduatedFrom: "Educational Background",
      role: "Preferred Role",
      response: {
        birthday: "26.11.1990",
        city: "İzmir",
        graduatedFrom: "EGE Uni. Mechanical Engineering, 2014",
        role: "Fullstack Developer",
      },
      aboutMe: "About Me",
      aboutMeFirstP:
        "ENG Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
      aboutMeSecondP:
        "ENG Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
    },
    projects: {
      title: "Projects",
      visit: "View Site",
      projectsArray: [
        {
          title: "Workintech",
          img: ProjectPicture1,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          programs: ["Redux", "React", "Vercel"],
        },
        {
          title: "Journey",
          img: ProjectPicture2,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          programs: ["React", "Redux", "Vercel"],
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      mail: "anilensari@gmail.com",
    },
  },
};

export default data;
