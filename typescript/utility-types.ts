/* keyof */
interface Person {
  name: string;
  age: number;
  nationalId: number;
}
type personKeys = keyof Person; // -> 'name' | 'age' | 'nationalId'

/* typeof */
let firstName = "Ali";
let myName: typeof firstName;

/* union type */
let id: number | string;

/* intersection type */
interface Player {
  id: string;
  name: string;
}
interface BadmintonPlayer {
  skill: string;
}
let badmintonPlayer: Player & BadmintonPlayer;

/* conditional types */
interface StringId {
  id: string;
}
interface NumberId {
  id: number;
}
type Id<T> = T extends string ? StringId : NumberId;
let idOne: Id<string>; // {id: string}

/* Extract & Exclude */
type status = "pending" | "completed" | { error: string };
type noError = Extract<status, string>; //"pending" | "completed"
type noString = Exclude<status, string>; //"pending" | "completed"

/* Record */
let map: Record<string, string> = {
  age: "12",
  height: "180",
};
