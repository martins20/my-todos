import { themes } from "../../styles/theme";
import { GetThemeContract, ThemeType } from "./contract/get-theme";

export class GetTheme implements GetThemeContract {
  private constructor() {}

  static INSTANCE: GetTheme;

  static getInstace(): GetTheme {
    if (!this.INSTANCE) this.INSTANCE = new GetTheme();

    return this.INSTANCE;
  }

  getTheme(type: ThemeType) {
    return themes[type];
  }
}
