import logo from "../../assets/img-logo.png"
import styles from "../Login/Login.module.css"

export default function Login() {
    return(
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.logo}>
                <a href="#"><img src={logo} alt="logo" width="80%"/></a>
            </div>
            <div className={styles.div_info}>
                <form name="login" id="login" onSubmit="javascript:return submitsignin(this);" action="/signin/v2/lookup/" method="post" noValidate>
                    <div className={styles.head}>
                        <span id="headtitle">LOGIN</span>
                    </div> 
                    <div className={styles.service_name}>
                        <span>Para acessar People</span>
                    </div>
                    <div>
                        <div>
                            <div className={styles.textbox_div}>
                                <span>
                                    <input type="text" id="login_id" placeholder="Endereço de e-mail" name="login_id" class="textbox"  />
                                </span>
                                <span>
                                    <input type="password" name="PASSWORD" id="password" placeholder="Inserir Senha"  />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textbox_action}>
                        <span>Esqueceu a Senha?</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}