import "./Globals.css";

import { Sidebar } from "../src/components/sidebar";
import { Card, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  return (
    <main className="sm:ml-14 p-4">
      <Sidebar />
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg">
                Total Vendas
              </CardTitle>
            </div>
          </CardHeader>
        </Card>


      </section>
    </main>
  );
}

export default App;
