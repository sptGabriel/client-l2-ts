import { ServerStatus } from "../enums/ServerStatus";
import { ServerTypes } from "../enums/ServerTypes";
import { ServerAges } from "../enums/ServerAges";

export default class ServerData {
  private _id!: number;

  private _ip!: number;

  private _port!: number;

  private _ageLimit!: ServerAges;

  private _pvp!: number;

  private _currentPlayers!: number;

  private _maxPlayers!: number;

  private _status!: ServerStatus;

  private _serverType!: ServerTypes;

  private _brackets!: number;

  /**
   * Getter id
   * @return {number}
   */
  public get Id(): number {
    return this._id;
  }

  /**
   * Getter ip
   * @return {number}
   */
  public get Ip(): number {
    return this._ip;
  }

  /**
   * Getter port
   * @return {number}
   */
  public get Port(): number {
    return this._port;
  }

  /**
   * Getter ageLimit
   * @return {ServerAges}
   */
  public get AgeLimit(): ServerAges {
    return this._ageLimit;
  }

  /**
   * Getter pvp
   * @return {number}
   */
  public get Pvp(): number {
    return this._pvp;
  }

  /**
   * Getter currentPlayers
   * @return {number}
   */
  public get CurrentPlayers(): number {
    return this._currentPlayers;
  }

  /**
   * Getter maxPlayers
   * @return {number}
   */
  public get MaxPlayers(): number {
    return this._maxPlayers;
  }

  /**
   * Getter status
   * @return {ServerStatus}
   */
  public get Status(): ServerStatus {
    return this._status;
  }

  /**
   * Getter serverType
   * @return {ServerTypes}
   */
  public get ServerType(): ServerTypes {
    return this._serverType;
  }

  /**
   * Getter brackets
   * @return {number}
   */
  public get Brackets(): number {
    return this._brackets;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set Id(value: number) {
    this._id = value;
  }

  /**
   * Setter ip
   * @param {number} value
   */
  public set Ip(value: number) {
    this._ip = value;
  }

  /**
   * Setter port
   * @param {number} value
   */
  public set Port(value: number) {
    this._port = value;
  }

  /**
   * Setter ageLimit
   * @param {ServerAges} value
   */
  public set AgeLimit(value: ServerAges) {
    this._ageLimit = value;
  }

  /**
   * Setter pvp
   * @param {number} value
   */
  public set Pvp(value: number) {
    this._pvp = value;
  }

  /**
   * Setter currentPlayers
   * @param {number} value
   */
  public set CurrentPlayers(value: number) {
    this._currentPlayers = value;
  }

  /**
   * Setter maxPlayers
   * @param {number} value
   */
  public set MaxPlayers(value: number) {
    this._maxPlayers = value;
  }

  /**
   * Setter status
   * @param {ServerStatus} value
   */
  public set Status(value: ServerStatus) {
    this._status = value;
  }

  /**
   * Setter serverType
   * @param {ServerTypes} value
   */
  public set ServerType(value: ServerTypes) {
    this._serverType = value;
  }

  /**
   * Setter brackets
   * @param {number} value
   */
  public set Brackets(value: number) {
    this._brackets = value;
  }

  public Ipv4() {
    const p1 = this._ip & 255;
    const p2 = (this._ip >> 8) & 255;
    const p3 = (this._ip >> 16) & 255;
    const p4 = (this._ip >> 24) & 255;

    return `${p1}.${p2}.${p3}.${p4}`;
  }
}
