import React from "react";
import style from "./Botao.module.scss";

type Props ={
    children: string,
    type?: "button" | "submit" | "reset" | undefined
}

class Botao extends React.Component<Props> {
render(): React.ReactNode {
    return <button type={this.props.type} className={style.botao}>{this.props.children}</button>;
    }
}

export default Botao;