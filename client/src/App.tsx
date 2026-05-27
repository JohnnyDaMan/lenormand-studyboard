import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// GitHub Pages 서브디렉토리 배포 경로인지 감지하여 wouter base 경로를 동적으로 결정합니다.
// URL 경로에 lenormand-studyboard가 포함되어 있으면 /lenormand-studyboard를 base로 설정하고,
// 마누스 미리보기 등 로컬 루트 환경이면 base를 비워둡니다.
const getRouterBase = () => {
  if (typeof window !== "undefined" && window.location.pathname.includes("/lenormand-studyboard")) {
    return "/lenormand-studyboard";
  }
  return "";
};

function App() {
  const routerBase = getRouterBase();

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {routerBase ? (
            <WouterRouter base={routerBase}>
              <Router />
            </WouterRouter>
          ) : (
            <Router />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
