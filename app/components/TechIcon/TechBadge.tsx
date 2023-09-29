import styles from './TechBadge.module.css'
import type { Technology } from '@/lib/projects';
import type { IconType } from 'react-icons' 
import { SlCloudDownload as Cloudinary } from 'react-icons/sl'
import {
    SiCss3 as Css,
    SiExpress as Express,
    SiJavascript as Javascript,
    SiJsonwebtokens as Jwt,
    SiMongodb as Mongodb,
    SiMongoose as Mongoose,
    SiNetlify as Netlify,
    SiNextdotjs as Nextjs,
    SiNodedotjs as Node,
    SiOpenai as Openai,
    SiPostgresql as Postgresql,
    SiRailway as Railway,
    SiReact as React,
    SiTailwindcss as Tailwind,
    SiTypescript as Typescript,
    SiVercel as Vercel,
    SiVite as Vite
} from 'react-icons/si'

const TECH_ICONS: Record<Technology, IconType> = {
    cloudinary: Cloudinary,
    css: Css,
    express: Express,
    javascript: Javascript,
    jwt: Jwt,
    mongodb: Mongodb,
    mongoose: Mongoose,
    netlify: Netlify,
    nextjs: Nextjs,
    node: Node,
    openai: Openai,
    postgresql: Postgresql,
    railway: Railway,
    react: React,
    tailwind: Tailwind,
    typescript: Typescript,
    vercel: Vercel,
    vite: Vite
};

type TechIconProps = { tech: Technology}

export default function TechBadge({ tech }: TechIconProps){
    const IconComponent = TECH_ICONS[tech]
    const techClassName = styles[tech];
    return (
        <div className={`${styles.badge} ${techClassName}`}>
            <IconComponent />
            <span>{tech}</span>
        </div>
    ) 
}