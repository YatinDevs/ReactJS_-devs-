import Event from "./components/Event";
import EventAssign from "./components/EventAssign";
import EventBubbling from "./components/Event_Bubbling/EventBubbling";

export default function MyApp() {
  return (
    <div>
      <h1>Events & Event_Bubbling</h1>
      <hr></hr>
      <EventAssign />
      <hr></hr>

      <Event></Event>
      <hr></hr>
      <EventBubbling />
    </div>
  );
}
