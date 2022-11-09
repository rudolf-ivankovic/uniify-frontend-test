export type StepDetail = {
  module: string;
  stepNumber: number;
  texts: {
    heading: string;
    step: string;
    subHeading: string;
  };
};

export type MainConfig = {
  steps: StepDetail[];
  team: string;
  theme: {
    css: string;
    favicon: string;
    headerColor: string;
    logo: string;
  };
};
