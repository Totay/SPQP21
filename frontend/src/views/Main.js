// import components
import Chat from '../components/Chat';

const Main = () => {
  let messages = [
    {
      id: 1,
      from: 1,
      message: "Hello World"
    },
    {
      id: 2,
      from: 2,
      message: "My name is not world"
    },
    {
      id: 3,
      from: 2,
      message: "How rude"
    },
  ];
  return (
    <main>
      <h1>Main page</h1>
      <Chat messages={messages} name="Jane Doe"></Chat>
    </main>
  )
}

export default Main
