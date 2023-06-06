import React from "react";
import {ITarefa} from "../../Interfaces/ITarefa";

type Props = {
    tarefa: ITarefa,
    selectTask: (selectedTask: ITarefa) => void
}

export default function Item({tarefa, selectTask}: Props) {
    return (
        <li
            onClick={() => selectTask(tarefa)}
            className={'rounded px-2 py-1 border-2 ' +
                (tarefa.selected ? 'bg-gray-200  border-gray-300 ' : 'bg-gray-100 border-gray-100') +
                (tarefa.finished ? ' opacity-70 cursor-not-allowed ' : ' cursor-default ')
            }
        >
            <div>{formatName(tarefa.nome, tarefa.finished)}</div>
            <span className="text-gray-600">{tarefa.tempo}</span>
        </li>
    );
}


function formatName(name: string, finished: boolean) {
    if (finished) {
        return <div className="grid grid-cols-2">
            <div className="font-semibold text-lg">{name}</div>
            <div className=" text-right text-sky-600 text-xl font-bold">✓</div>
        </div>
    }

    return <span className="font-semibold text-lg">{name}</span>
}
