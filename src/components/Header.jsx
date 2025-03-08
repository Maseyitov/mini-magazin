import { useState } from "react"
import "./Header.css"

let Header = () => {

    let [pushsenaNike , setPushsenaNike] = useState(1)
    let [pushsenaJordon , setPushsenaJordon] = useState(1)
    let [pushsenaLacosste , setPushsenaLacosste] = useState(1)

    let [nikeloveyearHendler , setNikeLoveyearHendler] = useState(false)
    let [jordanloveyearHendler , setJordonLoveyearHendler] = useState(false)
    let [lacossteloveyearHendler , setLacossteLoveyearHendler] = useState(false)

    let nikeSenaHendler = 1200
    let jordonSenaHendler = 2000
    let lacossteSenaHendler = 1500

    let [proverkaTovar , setProverkaTovar] = useState(nikeSenaHendler)
    let [proverkaTovar2 , setProverkaTovar2] = useState(jordonSenaHendler)
    let [proverkaTovar3 , setProverkaTovar3] = useState(lacossteSenaHendler)

    let PlusyearHendlerNike = () => {
        setPushsenaNike(pushsenaNike + 1)
        setProverkaTovar(proverkaTovar + nikeSenaHendler)
    }
    let PlusyearHendlerJordon = () => {
        setPushsenaJordon(pushsenaJordon + 1)
        setProverkaTovar2(proverkaTovar2 + jordonSenaHendler)
    }
    let PlusyearHendlerLacosste = () => {
        setPushsenaLacosste(pushsenaLacosste + 1)
        setProverkaTovar3(proverkaTovar3 + lacossteSenaHendler)
    }

    let MinusyearHendlerNike = () => {
        if (pushsenaNike > 1 ) {
            setPushsenaNike(pushsenaNike - 1)
            setProverkaTovar(proverkaTovar - nikeSenaHendler)
        }
    }
    let MinusyearHendlerJordon = () => {
        if (pushsenaJordon > 1 ) {
            setPushsenaJordon(pushsenaJordon - 1)
            setProverkaTovar2(proverkaTovar2 - jordonSenaHendler)
        }
    }
    let MinusyearHendlerLacosste = () => {
        if (pushsenaLacosste > 1 ) {
            setPushsenaLacosste(pushsenaLacosste - 1)
            setProverkaTovar3(proverkaTovar3 - lacossteSenaHendler)
        }
    }

    let nikeLoveHendler = () => {
        setNikeLoveyearHendler(!nikeloveyearHendler)
    }
    let jordanLoveHendler = () => {
        setJordonLoveyearHendler(!jordanloveyearHendler)
    }
    let lacssteLoveHendler = () => {
        setLacossteLoveyearHendler(!lacossteloveyearHendler)
    }
    



    return (
        <header>
            <div className="globalDivContayner-1">
            <h1>Shopping Beg</h1>
            </div>
            <div className="globalDivContayner-2">
            <div className="divContayner-1">
                <button>✕</button>
                <button onClick={nikeLoveHendler} className={nikeloveyearHendler ?" Cet-app-color" : "" }>❤</button>
            </div>
            <div className="divContayner-2">
                <img src="https://media.wired.com/photos/63728604691ed08cc4b98976/4:3/w_1880,h_1410,c_limit/Nike-Swoosh-News-Gear.jpg" alt="" />
            </div>
            <div className="divContayner-3">
                <h3> Nike</h3>
            </div>
            <div className="divContayner-4"> 
                <button onClick={PlusyearHendlerNike}>+</button>
                <h1>{pushsenaNike}</h1>
                <button onClick={MinusyearHendlerNike}>-</button>
            </div>
            <div className="divContayner-5">
            <h2 >${proverkaTovar}</h2>
            </div>
            </div>

            <div className="globalDivContayner-2">
            <div className="divContayner-1">
                <button>✕</button>
                <button onClick={jordanLoveHendler} className={jordanloveyearHendler ?" Cet-app-color" : "" }>❤</button>
            </div>
            <div className="divContayner-2">
                <img src="https://assets.gq.ru/photos/5d9f476010e0190008fb08b6/16:9/w_2560%2Cc_limit/air-jordan-1.jpg" alt="" />
            </div>
            <div className="divContayner-3">
                <h3> Jordan </h3>
            </div>
            <div className="divContayner-4"> 
                <button onClick={PlusyearHendlerJordon}>+</button>
                <h1>{pushsenaJordon}</h1>
                <button onClick={MinusyearHendlerJordon}>-</button>
            </div>
            <div className="divContayner-5">
            <h2 >${proverkaTovar2}</h2>
            </div>
            </div>

            <div className="globalDivContayner-2">
            <div className="divContayner-1">
                <button>✕</button>
                <button onClick={lacssteLoveHendler} className={lacossteloveyearHendler ?" Cet-app-color" : "" }>❤</button>
            </div>
            <div className="divContayner-2">
                <img src="https://sportbrend.com/image/cache/webp/catalog/products/392/392f80e8041d08931c366b5ffd7db62d-500x500.webp" alt="" />
            </div>
            <div className="divContayner-3">
                <h3>Lacosste </h3>
            </div>
            <div className="divContayner-4"> 
                <button onClick={PlusyearHendlerLacosste}>+</button>
                <h1>{pushsenaLacosste}</h1>
                <button onClick={MinusyearHendlerLacosste}>-</button>
            </div>
            <div className="divContayner-5">
            <h2 >${proverkaTovar3}</h2>
            </div>
            </div>
        </header>
    )
}

export default Header