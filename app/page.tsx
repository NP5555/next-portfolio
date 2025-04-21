import { 
  Approach, 
  Clients, 
  Experience, 
  Footer, 
  Grid, 
  Hero, 
  RecentProjects 
} from "@/components";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
