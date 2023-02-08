export interface ToDo {
    id: string;
    name: string;
    description: string;
    duration: string;
    isDone: boolean;
}

export enum Duration {
    ONCE = 'once',
    DAILY = 'everyday',
    // BIDAILY = '1 in 2 days',
    // TRIDAILY = '1 in 3 days',
    // WEEKLY = 'once per week'
}

export interface HistoricalData {
    date: string,
    count: number
}
