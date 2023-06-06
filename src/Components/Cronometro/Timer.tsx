import {secondsToTime} from "../../Commons/Utils/Time";

type Props = {
    time: number | undefined
};

export default function Timer({time = 0}: Props) {

    const DEZENA = 0;
    const UNIDADE = 1;
    let [hour, minute, second] = secondsToTime(time)

    return (
        <div className="m-auto my-5 text-4xl sm:text-7xl md:text-8xl py-2 rounded font-mono text-gray-800">
            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{hour[DEZENA]}</span>
            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{hour[UNIDADE]}</span>

            <span className="-mx-2">:</span>

            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{minute[DEZENA]}</span>
            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{minute[UNIDADE]}</span>

            <span className="-mx-2">:</span>

            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{second[DEZENA]}</span>
            <span className="bg-gray-100 rounded mx-0.5 px-3 ">{second[UNIDADE]}</span>
        </div>
    )
}
