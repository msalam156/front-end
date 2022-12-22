import { iCoach } from "./iCoach.js";

export class GolfCoach implements iCoach{
    getDailyWorkOut(): string {
        return "Hit 100 balls at the golf at a time"
    }
}