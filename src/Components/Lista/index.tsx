import Item from "./Item";
import Header from "../Elements/Header";
import React from "react";
import {AppTypes} from "../../AppTypes";

export default function Lista({tarefas, selectTask}: AppTypes) {

    return (
        <aside>
            <div className="mb-3">
                <Header>Estudos do dia</Header>
            </div>
            <ul className="space-y-3">
                {tarefas.map((tarefa, index) =>
                    <Item
                        key={tarefa.uuid}
                        selectTask={selectTask}
                        tarefa={tarefa}
                    />
                )}

            </ul>
        </aside>
    )
}
