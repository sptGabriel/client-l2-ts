import { time } from "console";
import Client from "./Client";
import { setInterval } from "timers";

const l2 = new Client();
l2.enter({
  /* required */ Username: "gbcxbau",
  /* required */ Password: "8f^4ag2@",
  /* required */ Ip: "server.l2killer.com",
  /* optional */ ServerId: 1, //Bartz 
  /* optional */ CharSlotIndex: 0,
})



l2.on("LoggedIn", () => {
    setInterval(() => {}, 20000)
    console.log('enter here');
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
    l2.say("Hello from " + l2.Me.Name);
});


l2.say("Hello from");

export default l2;

