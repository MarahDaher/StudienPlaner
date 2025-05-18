import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button className="bg-primary text-primary-foreground">Click me</Button>
      </div>
    </>
  );
}

export default App;
