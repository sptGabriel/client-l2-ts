import l2 from "./login";
import L2Creature from "l2js-client/entities/L2Creature";
import { EStartMoving } from "l2js-client/events/EventTypes";

l2.on("StartMoving", (e: EStartMoving) => {
  if (e.data.creature.Name === "Adm") {
    l2.moveTo(e.data.creature.Dx, e.data.creature.Dy, e.data.creature.Dz);
  }
});
