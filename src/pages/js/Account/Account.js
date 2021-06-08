import React, { useEffect, useState } from 'react'
import TopNav from '../TopNav'
import '../../styles/Account/Account.css'
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person } from 'ionicons/icons'
import { IonAvatar, IonButton, IonIcon, IonText, IonTitle } from '@ionic/react'
import axios from 'axios'

function Account() {
    const [consulent, setConsulent] = useState(false)
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const ConnectedConsulent = () => {
        setConsulent({
            Name: "Sanne de Boer",
            Adres: "Kon juul 75",
            PostCode: "3832BC",
            Location: "Leusden",
            Image: "",
        })
    }

    // useEffect(async () => {
    //     const response = await fetch("https://api.randomuser.me/")
    //     const data = await response.json();
    //     const [item] = data.results;
    //     setUser(item);
    //     setLoading(false);
    // }, []);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div>
            <TopNav />
            <div className="accountPageContent">
                <button className="settingsBtn" onClick={() => ConnectedConsulent()}><IonIcon icon={settingsOutline} className="iconProfile"></IonIcon></button>
                <IonAvatar className="Avatar" onClick={() => console.log(user)}><IonIcon icon={person} className="avatarIcon"></IonIcon></IonAvatar>
                <p>Welkom {user} </p>
                <p>{today}</p>
                <hr />
                <div className="statContainer">
                    <div className="heightContainer"><div className="blueborder"><IonIcon icon={resizeOutline} className="iconProfile"></IonIcon></div><p>{user} Cm</p></div>
                    <div className="weightContainer"><div className="blueborder"><IonIcon icon={scaleOutline} className="iconProfile"></IonIcon></div><p>{user} Kg</p></div>
                </div>
                <div className="consulentContainer">
                    <h3>Aangesloten bij</h3>
                    {consulent ? (
                        <div className="consulentShrtct">
                            <div className="consulentAvatar"></div>
                            <div className="consulentContent">
                                <p>{consulent.Name}</p>
                                <p>{consulent.Adres}, {consulent.PostCode}, {consulent.Location}</p>
                            </div>
                            <IonIcon icon={chevronForwardOutline} className="iconAccount"></IonIcon>
                        </div>
                    ) : (
                        <div className="noConsulentWarning">
                            <div className="blueWarning">
                                <IonIcon icon={alertCircleOutline} className="iconProfile"></IonIcon>
                            </div>
                            <div className="noConsulentWarningContent">
                                <p>Het lijkt er op dat u nog niet bent aangesloten bij een van onze consulenten. Een 1:1 diet consulent kan je helpen bij het behouden van een gezond dieet</p>
                                <button className="searchConsulent">Consulent zoeken</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <a className="borderBottom"></a>
        </div>
    )
}

export default Account
