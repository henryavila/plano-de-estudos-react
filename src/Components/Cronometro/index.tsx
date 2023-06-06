import Timer from "./Timer";
import Button from "../Button";
import Header from "../Elements/Header";
import {ITarefa} from "../../Interfaces/ITarefa";
import React, {useEffect, useState} from "react";
import {timeToSeconds} from "../../Commons/Utils/Time";

type Props = {
    selected: ITarefa | undefined,
    finishTask: () => void,
    setTimeRunning: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cronometro({selected, finishTask, setTimeRunning}: Props) {

    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.tempo) {
            setTime(timeToSeconds(selected.tempo))
        }
    }, [selected])

    const countdown = (timer: number = 0) => {
        setTimeRunning(true);
        setTimeout(() => {
            if (timer > 0) {
                setTime(timer - 1)

                return countdown(timer - 1)
            }

            setTimeRunning(false);
            finishTask()
        }, 1000)
    }


    return (
        <div>
            <Header>
                Escolha um card e inicie o cronômetro
            </Header>
            <div>
                <Timer time={time}/>
            </div>

            <Button
                onClick={() => countdown(time)}>
                Começar
            </Button>
        </div>
    )
}
