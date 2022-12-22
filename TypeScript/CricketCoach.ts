import { iCoach } from "./iCoach.js";

export class CricketCoach implements iCoach {
    getDailyWorkOut(): string {
        return "Practice your spin bowling technique";
    }
}