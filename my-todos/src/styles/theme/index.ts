import { AppColors } from "./contract";
import { darkColors } from "./dark-colors";
import { fixedColors } from "./fixed-colors";
import { lightColors } from "./light-colors";

export type Theme = {
  light: AppColors;
  dark: AppColors;
};

export const themes: Theme = {
  light: {
    fixed: fixedColors,
    dynamic: lightColors,
  },
  dark: {
    fixed: fixedColors,
    dynamic: darkColors,
  },
};
