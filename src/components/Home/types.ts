export interface Hero {
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  to: {
    name: string;
  };
  img: string;
}

export interface CardDTO {
  title: string;
  description: string;
  img: string;
}
