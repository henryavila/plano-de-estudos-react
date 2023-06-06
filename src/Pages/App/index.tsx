import React, {useState} from 'react';
import logo from '../../logo.svg';
import './Index.css';
import Formulario from "../../Components/Formulario";
import Lista from "../../Components/Lista";
import Cronometro from "../../Components/Cronometro";
import {ITarefa} from "../../Interfaces/ITarefa";

function App() {

    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [selected, setSelected] = useState<ITarefa>()
    const [timeRunning, setTimeRunning] = useState<boolean>(false)

    const selectTask = (selectedTask: ITarefa) => {

        if (timeRunning || selectedTask.finished) {
            return
        }

        setSelected(selectedTask)
        setTarefas(oldTasks => oldTasks.map(task => ({
            ...task,
            selected: task.uuid === selectedTask.uuid
        })))
    }

    const finishTask = () => {
        if (selected) {
            setTarefas(oldTasks => oldTasks.map(task => {
                if (task.uuid === selected.uuid) {
                    return {
                        ...task,
                        selected: false,
                        finished: true
                    }
                }

                return task
            }))
        }
    }

    return (
        <div className="max-w-5xl rounded-2xl shadow-lg my-5 mx-2 lg:mx-auto p-2 md:p-5  bg-white">

            <div className="text-center text-sky-400 font-semibold text-xl md:text-4xl mb-3 md:mb-16">
                <img src={logo} className="w-16 md:w-24 m-auto" alt="logo"/>
                <span>Plano de estudos</span>
            </div>

            <div className="md:grid md: grid-cols-3 place-content-center md:space-x-5 md:divide-x-2">
                <div className="space-y-8 md:mb-5 col-span-2">
                    <Formulario setTarefas={setTarefas}/>
                    <Cronometro
                        selected={selected}
                        finishTask={finishTask}
                        setTimeRunning={setTimeRunning}
                    />
                </div>
                <div className="mt-6 md:mt-0 md:pl-3">
                    <Lista
                        tarefas={tarefas}
                        selectTask={selectTask}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
