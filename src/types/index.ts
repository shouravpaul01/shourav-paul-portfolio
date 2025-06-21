import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TProjectLink ={
  linkSource: string;
  link: string;
}

export type TProjectData ={
  id: number;
  image: string;
  title: string;
  frontendTechnology: string;
  backendTechnology: string;
  liveClientLink: string;
  links: TProjectLink[];
  
}

