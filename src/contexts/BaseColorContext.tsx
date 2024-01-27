import { createContext } from "react";

import { Color } from "../lib/inputTypes";
import { BaseColors } from "@/lib";

const BaseColorContext = createContext<Color | undefined>(BaseColors.Blue);

export default BaseColorContext;
