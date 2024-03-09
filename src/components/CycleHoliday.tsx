import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");
    const alphabeticalHolidayList: string[] = [
        "Christmas",
        "Easter",
        "Halloween",
        "St Paddys",
        "Thanksgiving"
    ];
    const chronoHolidayList: string[] = [
        "St Paddys",
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas"
    ];
    function changeAlphabetical(): void {
        const index = alphabeticalHolidayList.indexOf(holiday);
        let newIndex = index + 1;
        if (newIndex > 4) {
            newIndex = 0;
        }
        setHoliday(alphabeticalHolidayList[newIndex]);
    }
    function changeChrono(): void {
        const index = chronoHolidayList.indexOf(holiday);
        let newIndex = index + 1;
        if (newIndex > 4) {
            newIndex = 0;
        }
        setHoliday(chronoHolidayList[newIndex]);
    } // need comment
    const emojiList: string[] = ["🎅", "🐇", "🎃", "🍀", "🦃"];
    return (
        <div>
            <Button onClick={changeAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={changeChrono}>Advance by Year</Button>
            <br></br>
            {"Holiday: " + emojiList[alphabeticalHolidayList.indexOf(holiday)]}
        </div>
    );
}
