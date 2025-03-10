/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((ogNum: number): number => ogNum * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let intList = numbers.map((possibleInt: string): number =>
        parseInt(possibleInt)
    );
    intList = intList.map((mostInts: number): number =>
        isNaN(mostInts) ? 0 : mostInts
    );
    return intList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarsRemoved = amounts.map((values: string): string =>
        values[0] === "$" ? values.substring(1) : values
    );
    let dollarsToInt = dollarsRemoved.map((possibleInt: string): number =>
        parseInt(possibleInt)
    );
    dollarsToInt = dollarsToInt.map((mostInts: number): number =>
        isNaN(mostInts) ? 0 : mostInts
    );
    return dollarsToInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQue = messages.filter(
        (strings: string): boolean => strings[strings.length - 1] !== "?"
    );
    const anyExcl = noQue.map((strings: string): string =>
        strings[strings.length - 1] === "!" ? strings.toUpperCase() : strings
    );
    return anyExcl;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const onlyShort = words.filter(
        (strings: string): boolean => strings.length < 4
    );
    return onlyShort.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const initCount = colors.length;
    const onlyRGB = colors.filter(
        (strings: string): boolean =>
            strings === "red" || strings === "blue" || strings === "green"
    );
    return initCount === onlyRGB.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const bigString = addends.reduce(
        (currentString: string, num: number) => currentString + num + "+",
        ""
    );
    return sum + "=" + bigString.substring(0, bigString.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.some((numbers: number): boolean => numbers < 0) === false) {
        // no negative numbers
        const sumAtEnd = [
            ...values,
            values.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            )
        ];
        return sumAtEnd;
    }
    // there are negative numbers
    const firstIndex = values.findIndex((value: number): boolean => value < 0);
    const listTilNeg = values.slice(0, firstIndex);
    const sum = listTilNeg.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const newList = [...values];
    newList.splice(firstIndex + 1, 0, sum);
    return newList;
}
