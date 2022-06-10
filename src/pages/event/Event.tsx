import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import { Virtuoso } from 'react-virtuoso';
import { add } from 'ionicons/icons';
import { useState } from 'react';

import './Event.css';

const Event: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  // const [searchText, setSearchText] = useState('');

  const list = window.document.querySelector('ion-list')

  const handleInput = (searchText: string) => {
    const items = list?.childNodes;
    const query = searchText.toLowerCase();

    // console.log(query, items);

    // TODO: if empry query show all

    if (items) {
      requestAnimationFrame(() => {
        items.forEach((item) => {
          const shouldShow = item.textContent ? item.textContent.toLowerCase().indexOf(query) > -1 : false;
          (item as HTMLElement).style.display = shouldShow ? 'block' : 'none';
        });
      });
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar onIonChange={e => {
              // setSearchText(e.detail.value!)
              handleInput(e.detail.value!);
            }}></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        {/* Use a trigger */}
        <IonModal isOpen={showModal} >
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
          <IonContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eligendi
              autem molestiae culpa vero distinctio rerum quod doloremque fuga architecto.
              Labore mollitia quaerat ex maiores sunt in natus, asperiores ipsam.
            </p>
          </IonContent>
        </IonModal>

        <Virtuoso
          style={{ height: '80vh' }}
          totalCount={12}
          itemContent={index =>
            <div style={ {height: '100px'} }>
              <IonList>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src="./avatar-finn.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Lorem ipsum dolor</p>
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonAvatar slot="start">
                    <img src="./avatar-finn.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                  </IonLabel>
                </IonItem>
              </IonList>
            </div>
          }
        />


        <IonButton size='small' color="light" onClick={() => setShowModal(true)}>
          <IonIcon icon={add} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Event;
