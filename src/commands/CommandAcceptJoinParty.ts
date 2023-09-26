import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestTargetCancel from "../network/clientpackets/RequestTargetCancel";
import RequestAnswerJoinParty from "../network/clientpackets/RequestAnswerJoinParty";

export default class CommandAcceptJoinParty extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestAnswerJoinParty(RequestAnswerJoinParty.ANSWER_ACCEPT));
  }
}
