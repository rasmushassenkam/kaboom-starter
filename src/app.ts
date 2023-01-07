import kaboom from "kaboom";
import buildGrid from "./buildGrid";

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 400;

kaboom({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
buildGrid(SCREEN_WIDTH, SCREEN_HEIGHT);
