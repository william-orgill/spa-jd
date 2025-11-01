import JDApp from "./components/JDApp";
import { AppProvider } from "./context/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <JDApp />
    </AppProvider>
  );
}
