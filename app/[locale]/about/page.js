import WelcomePage from "@/components/ui/WelcomePage";
import Skiles from "@/components/ui/Skiles";
import Rating from "@/components/ui/Rating";
import Connects from "@/components/ui/Conects";
import AboutHighlights from "@/components/ui/AboutHighlights";

function Page() {
  return (
    <main className="space-y-20 pb-24">
      <WelcomePage />
      <Skiles />
      <AboutHighlights />

      <section className="container m-auto px-6">
        <Rating />
      </section>

      <section className="container m-auto px-6">
        <Connects />
      </section>
    </main>
  );
}

export default Page;
