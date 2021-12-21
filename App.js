import store from "./redux/store";
import { Provider } from "react-redux";

import StackNav from "./routes/StackNav";

export default function App() {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
}
