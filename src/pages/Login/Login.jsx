import logo from "../../assets/img-logo.png"
import styles from "../Login/Login.module.css"

export default function Login() {
    return(
        <div className={styles.geral}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#"><img src={logo} alt="logo" width="60%"/></a>
                </div>  
                <div>
                    <form>
                        <div className={styles.textbox_div}>
                            <span>
                                <label htmlFor="email">E-mail</label>
                                <input className={styles.input} type="email" placeholder="Digite seu e-mail" name="email" />
                            </span>
                            <span>
                                <label htmlFor="password">Senha</label>
                                <input className={styles.input} type="password" name="PASSWORD" placeholder="Digite sua Senha"  />
                            </span>
                        </div>  
                        <div className={styles.forgot_pass}>
                            <a href="#">Esqueceu a Senha?</a>
                        </div>
                        <div>
                            <input className={styles.input} type="submit" value="Entrar"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}