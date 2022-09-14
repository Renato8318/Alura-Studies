import React from 'react';
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './form.module.scss';

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você vai estudar?"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    name="tempo" 
                    id="tempo" 
                    step="1" 
                    value= {this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    min="00:00:00" 
                    max="01:30:00" 
                    required />
                </div>
                <Botao type="submit">
                    Adicionar  
                </Botao>
            </form>
        )
    }
}

export default Form;