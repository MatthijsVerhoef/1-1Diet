import React, { useState } from 'react'
import Logo from '../../../images/logodiet.svg'
import TopNav from '../TopNav'
import '../../styles/Appointments/Appointments.css'
import { IonButton, IonCard, IonCol, IonContent, IonDatetime, IonIcon, IonInput, IonItem, IonItemOption, IonLabel, IonModal, IonSelect, IonSelectOption, IonTab, IonText, IonTextarea } from '@ionic/react'
import { calendar, chevronBackOutline, close } from 'ionicons/icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom'

function Appointments() {
    const [user, setUser] = useState(true)
    const [showCalendar, setShowCalendar] = useState(false)
    const [value, onChange] = useState(new Date())
    const [modalController, setModalController] = useState(false)
    const [selectConsulent, setSelectConsulent] = useState([])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nummer, setNummer] = useState("")
    const [comment, setComment] = useState("")
    const [confirmModal, setConfirmModal] = useState({ isOpen: false })

    return (
        <IonContent className="calendarPage">
            <TopNav />
            <div className="calendarContent">
                {user ? (
                    <div className="calendarContainer">
                        <div className="datePicker">
                            <button className={showCalendar ? "currentWeek" : "currentWeekActive"} onClick={() => setShowCalendar(false)}>Week 22</button>
                            <button className={showCalendar ? "openCalendarActive" : "openCalendar"} onClick={() => setShowCalendar(current => !current)}>Mei</button>
                            <IonIcon icon={calendar} className="toCurrentDate"></IonIcon>
                        </div>
                        <div className="calendarPicker">
                            {showCalendar ? (
                                <Calendar onChange={onChange} value={value} className="calendar" />
                            ) : (null)}
                        </div>
                        <div className="calendarSlider"></div>
                        <div className="events">
                            <IonButton color="none" className="makeAppointment" onClick={() => setModalController(current => !current)}>Afspraak inplannen</IonButton>
                        </div>
                    </div>
                ) : (
                    <div className="noUserWarning">
                        <p>Het lijkt er op dat u nog geen account heeft, log in om een afspraak te maken bij een van onze consulenten!</p>
                        <button className="toLogin">Inloggen</button>
                    </div>
                )}
            </div>
            { modalController ? (
                <div className="Modal">
                    <div className="navigationInfo">
                        <IonIcon icon={chevronBackOutline} className="goBack" onClick={() => setModalController(false)}></IonIcon>
                        <img className="logo" src={Logo} onClick={() => console.log(name)}></img>
                    </div>
                    <form>
                        <div className="appointment">
                            <h2>Uw gegevens</h2>
                            <IonSelect placeholder="Kies je consulent" className="selectConsulent" onIonChange={(e) => setSelectConsulent(e.detail.value)}>
                                <IonSelectOption>Tim</IonSelectOption>
                                <IonSelectOption>Hugo</IonSelectOption>
                                <IonSelectOption>Aswin</IonSelectOption>
                                <IonSelectOption>Ilyas</IonSelectOption>
                                <IonSelectOption>Matthijs</IonSelectOption>
                            </IonSelect>
                            <IonItem className="flexitem" lines="none">
                                <IonDatetime onIonChange={(e) => setDate(e.detail.value)} className="selectDate" min="2021-05-27" max="2023-12-31" displayTimezone="utc" placeholder="Kies Datum" displayFormat="DD/MM/YYYY"></IonDatetime>
                                <IonDatetime onIonChange={(e) => setTime(e.detail.value)} className="selectDate" displayTimezone="utc" placeholder="Kies Tijd" displayFormat="HH:mm"></IonDatetime>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setName(e.target.value)} inputMode="name" name="naam" type="name" placeholder="Naam" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setEmail(e.target.value)} inputMode="email" autocomplete="email" minlength="5" name="email" type="email" placeholder="E-mail" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setNummer(e.target.value)} inputMode="tel" autocomplete="tel" name="telefoonnummer" minlength="10" maxlength="10" type="tel" placeholder="Telefoonnummer" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonTextarea onIonChange={(e) => setComment(e.target.value)} className="comment" name="comment" spellcheck="true" auto-grow="true" placeholder="Zet hier je opmerking"></IonTextarea>
                            </IonItem>
                            <IonButton color="none" className="submit" onClick={() => setConfirmModal({ isOpen: true })}>Bevestigen</IonButton>
                        </div>
                        <IonModal isOpen={confirmModal.isOpen} className="confirmModal">
                            <div className="navigationInfo">
                                <IonIcon icon={close} className="goBack" onClick={() => setConfirmModal({ isOpen: false })}></IonIcon>
                                <img className="logo" src={Logo} onClick={() => console.log(name)}></img>
                            </div>
                            <IonCol className="modalContent">
                                <h2>Bevestig afspraak</h2>
                                <p><strong>Naam:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Tel. nummer:</strong> {nummer}</p>
                                <p><strong>Consulent:</strong> {selectConsulent}</p>
                                <p><strong>Datum:</strong> {date}</p>
                                <p><strong>Tijd:</strong> {time}</p>
                                <p className="comment"><strong>Bericht:</strong> {comment}</p>
                                <IonButton className="submit" color="none">Afspraak opslaan</IonButton>
                                <a className="borderBottom"></a>
                            </IonCol>
                        </IonModal>
                        <a className="borderBottom"></a>
                    </form>
                </div>
            ) : (
                null
            )
            }
            <a className="borderBottom"></a>
        </IonContent >
    )
}

export default Appointments
