import { IonCard, IonCardContent, IonText, IonIcon, IonItem, IonItemGroup } from '@ionic/react'
import { calendarClearOutline, chevronForwardOutline } from 'ionicons/icons'
import React from 'react'

function SeeAppointment({ name, date, consulent, time, email, number, comment }) {
    return (
        <IonCard className="AppointmentCard" lines="none">
            <IonCardContent className="AppointmentCardContent">
                <IonItem className="BlueBorderAppointment" lines="none">
                    <IonIcon icon={calendarClearOutline} className="AppointmentCalendarIcon"></IonIcon>
                </IonItem>
                <IonItemGroup className="appointmentInfo">
                    <IonText className="appointmentText"><strong>Consulent: </strong>{consulent}</IonText>
                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date}</IonText>
                </IonItemGroup>
                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
            </IonCardContent>
        </IonCard>
    )
}

export default SeeAppointment
