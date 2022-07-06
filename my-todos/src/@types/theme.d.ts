import "styled-components";
import { AppColors } from "../styles/theme/contract";

declare module "styled-components" {
  export interface DefaultTheme extends AppColors {}
}
