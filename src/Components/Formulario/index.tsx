import React, {useState} from "react";
import Button from "../Button";
import Header from "../Elements/Header";
import {ITarefa} from "../../Interfaces/ITarefa";
import {v4 as uuid} from 'uuid'

type Props = {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({setTarefas}: Props) {

    const [tarefa, setTarefa] = useState<ITarefa>({
        nome: '',
        tempo: '00:00',
        finished: false,
        selected: false,
        uuid: uuid()
    })

    return (
        <form onSubmit={adicionarTarefa}>
            <div className="space-y-6 md:space-y-0 md:grid grid-cols-2">
                <div className="md:pr-3">
                    <label htmlFor="tarefa">
                        <Header>Conteúdo</Header>
                    </label>
                    <input
                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que vc vai estudar?"
                        value={tarefa.nome}
                        onChange={evento => setTarefa({...tarefa, nome: evento.target.value})}
                        required
                    />
                </div>

                <div className="md:pl-3">
                    <label htmlFor="tempo">
                        <Header>Duração</Header>
                    </label>
                    <input
                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="24:00:00"
                        value={tarefa.tempo}
                        onChange={evento => setTarefa({...tarefa, tempo: evento.target.value})}
                        required
                    />
                </div>

            </div>

            <div className="mt-6">
                <Button type="submit">Adicionar</Button>
            </div>

        </form>
    );

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (tarefa.tempo === '00:00') {
            return;
        }

        setTarefas((tarefasAntigas) => [
                ...tarefasAntigas,
                {
                    ...tarefa,
                    selected: false,
                    finished: false,
                    uuid: uuid()
                }
            ]
        )

        setTarefa({
            nome: '',
            tempo: '00:00',
            finished: false,
            selected: false,
            uuid: uuid().toString()
        })
    }
}
