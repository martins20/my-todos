import { themes } from "../../../styles/theme";
import { AppColors } from "../../../styles/theme/contract";

export type ThemeType = keyof typeof themes;

export interface GetThemeContract {
  getTheme: (type: ThemeType) => AppColors;
}
