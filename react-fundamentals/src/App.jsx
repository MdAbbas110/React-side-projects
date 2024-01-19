import { RecoilRoot, useRecoilValue } from 'recoil';
// import { notificationAtom } from './atoms.js';
import { atom } from 'recoil';

const messageAtom = atom({
  key: messageAtom,
  default: 7,
});
const jobAtom = atom({
  key: jobAtom,
  default: 0,
});

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  // const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messageAtom);
  // const notificationCount = useRecoilValue(notificationAtom);

  return (
    <>
      <button>Home</button>
      {/* <button>network({networkCount >= 100 ? '99+' : networkCount})</button> */}
      <button>Jobs({jobCount})</button>
      <button>Messages ({messageCount})</button>
      {/* <button>Notification({notificationCount})</button> */}
      <button>Profile </button>
    </>
  );
}

export default App;
