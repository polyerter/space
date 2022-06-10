import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div>
                  <strong>asdasd</strong>
                  <p>Explore <a target="_blank" rel="noopener noreferrer" href="#">UI Components</a></p>
                </div>
              </IonCol>
              <IonCol>
                <strong>asdasd</strong>
                <p>Explore <a target="_blank" rel="noopener noreferrer" href="#">UI Components</a></p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
