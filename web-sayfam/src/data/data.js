import JavascriptLogo from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import ReduxLogo from "../assets/redux1.png";
import NodeLogo from "../assets/node.png";
import VsCodeLogo from "../assets/vsCode.png";
import FigmaLogo from "../assets/figma.png";
import JavascriptDark from "../assets/jsDark.png";
import ReactDark from "../assets/reactDark.png";
import ReduxDark from "../assets/reduxDark.png";
import nodeDark from "../assets/nodeDark.png";
import vsDark from "../assets/vsCodeDark.png";
import figmaDark from "../assets/figmaDark.png";
import pizza from "../assets/pizza360.jpg";
import todo from "../assets/todo360.jpg";

const data = {
  tr: {
    header: {
      name: "ANIL",
      title: "Ben Bir Full-stack",
      titleSecond: "Developer'ım...",
      description:
        "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
      to: "TO",
      languageSwitch: "ENGLISH",
    },
    skills: {
      skils: "Yetenekler",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
    },
    profile: {
      profile: "Profil Bilgilerim",
      title: "Özgeçmişim",
      birthday: "Doğum Tarihi",
      city: "İkamet Şehri",
      graduatedFrom: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      response: {
        birthday: "26.11.1990",
        city: "İzmir",
        graduatedFrom: "EGE Üni. Makine Mühendisliği, 2014",
        role: "Full-stack Developer",
      },
      aboutMe: "Hakkımda",
      aboutMeFirstP:
        "Hayatımdaki aradığım mesleğin ne olduğunu buldum ve bunu radikal bir kararla uygulamaya geçirdim. ",
      aboutMeSecondP:
        "Araştırmayı ve öğrenmeyi seven, yazılım konusuna ise işten daha çok zevk aldığım bir konuda kendimi geliştirmek için vakit harcayacağım bir eğlence olarak başlamış birisiyim. ",
    },
    projects: {
      title: "Projelerim",
      visit: "Siteyi Görüntüle",
      projectsArray: [
        {
          title: "Pizza Sipariş Sayfası",
          img: pizza,
          description:
            "React uygulamasıyla yapılmış bir Pizza Sipariş Sitesi Projesi. Ana sayfa , Sipariş Sayfası ve Sipariş Tamamlandı Sayfası SPA kullanılarak oluşturulmuştur.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s7-challenge-pizza",
          url: "https://mypizzasite.vercel.app/",
        },
        {
          title: "Yapılacaklar Listesi",
          img: todo,
          description:
            "Hem işiniz hem de günlük yaşantınız için kullanabileceğiniz hayatınızı kolaylaştıracak bir ajanda uygulaması.",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
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
      name: "ANIL",
      title: "I am a Full-stack",
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
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
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
        "I found out what my life's calling was and I took a radical decision to implement it",
      aboutMeSecondP:
        "I'm a person who loves research and learning, and started software as a pastime to spend time to improve myself in something I enjoy more than work.",
    },
    projects: {
      title: "Projects",
      visit: "View Site",
      projectsArray: [
        {
          title: "Pizza Challenge",
          img: pizza,
          description:
            "A Pizza Ordering Site Project made with React application. Home page, Order Page and Order Completed Page were created using SPA.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s7-challenge-pizza",
          url: "https://mypizzasite.vercel.app/",
        },
        {
          title: "To Do List",
          img: todo,
          description:
            "An organizer application that you can use for both your work and daily life to make your life easier",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
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
