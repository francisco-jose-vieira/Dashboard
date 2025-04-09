import {
  Home,
  Package,
  PanelBottom,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export const Sidebar = () => {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex ">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <a href="">
              <Package className="h-4" />
            </a>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="stick top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"outline"} className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir / Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium p-4">
                <a
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base"
                >
                  <Package className="h-5 w-5 transition-all md:text-base gap-2" />
                  <span className="sr-only">Logo do projeto</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Pedidos
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5 transition-all" />
                  Produtos
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5 transition-all" />
                  Clientes
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5 transition-all" />
                  Configurações
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
};
