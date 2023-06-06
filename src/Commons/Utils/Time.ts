export function timeToSeconds(time: string): number {
    const [hour = '0', minute = '0', second = '0'] = time.split(':')

    return parseInt(hour, 10) * 3600 +
        parseInt(minute, 10) * 60 +
        parseInt(second, 10)
}


export function secondsToTime(time: number): string[] {
    let hours: number = Math.floor(time / 3600)
    let minutes: number = Math.floor((time % 3600) / 60)
    let seconds: number = (time % 3600 % 60)

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
    ]
}
