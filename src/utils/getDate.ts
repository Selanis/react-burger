

export const getDate = (date: string): string => {
    let currentDate = new Date(date).toUTCString().slice(5, 16);
    let currentHours = new Date(date).getUTCHours();
    let currentMinutes = new Date(date).getUTCMinutes().toString();
    
    if (currentMinutes.length === 1) {
        currentMinutes = "0" + currentMinutes;
    }

    return (`${currentDate}, ${currentHours}.${currentMinutes}`)
}