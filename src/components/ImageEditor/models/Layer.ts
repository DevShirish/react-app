import Dimension from "./Dimension";
import Position from "./Position";

export default interface Layer {
  id?: string;
  tool: string;
  dimension: Dimension;
  position: Position;
}
