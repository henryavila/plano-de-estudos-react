import {ITarefa} from "./Interfaces/ITarefa";

export type AppTypes = {
    tarefas: ITarefa[] | [],
    selectTask: (selectedTask: ITarefa) => void
}
