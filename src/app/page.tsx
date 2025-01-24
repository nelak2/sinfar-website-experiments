import SinfarFooter from "./_components/sf-footer";
import SinfarHeader from "./_components/sf-header";
import SinfarHome from "./_components/sf-home";

export default async function Home() {

  return (
    <main>
      <SinfarHeader />
      <SinfarHome />
      <SinfarFooter />
    </main>
  );
}
