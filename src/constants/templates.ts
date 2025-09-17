
import { bgColors } from "./bg-colors";
import Professional1Img from "../../public/asstes/resumes/professional/1_one.png";
import Professional1 from "../templates/professional/Professional1";
import Professional2 from "../templates/professional/Professional2";
import Professional3 from "../templates/professional/Professional3";
import Colorful1 from "../templates/colourFul/ColorFul1";
import Colorful2 from "../templates/colourFul/ColorFul2";
import Colorful3 from "../templates/colourFul/ColorFul3";
export const templates = {
    professional: [
        {
            id: 1,
            name: "Professional1",
            component: Professional1,
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 2,
            name: "Professional2",
            component: Professional2,
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random())],
        },
        {
            id: 3,
            name: "Professional3",
            component: Professional3,
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
    ],
    colorful: [
        {
            id: 4,
            name: "Colorful1",
            img: Professional1Img,
            component: Colorful1,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 5,
            name: "Colorful2",
            component: Colorful2,
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 6,
            name: "Colorful3",
            component: Colorful3,
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
    ],
    withImage: [
        {
            id: 7,
            name: "WithImage1",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 8,
            name: "WithImage2",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 9,
            name: "WithImage3",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
    ],
    modern: [
        {
            id: 10,
            name: "Modern1",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 11,
            name: "Modern2",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 12,
            name: "Modern3",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
    ],
    minimal: [
        {
            id: 13,
            name: "Minimal1",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 14,
            name: "Minimal2",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
        {
            id: 15,
            name: "Minimal3",
            img: Professional1Img,
            bg: bgColors[Math.floor(Math.random() * bgColors.length)],
        },
    ],
};