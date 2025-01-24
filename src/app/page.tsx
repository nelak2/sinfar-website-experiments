import SFFooter from "./_components/sf-footer";
import SFHeader from "./_components/SFHeader/SFHeader";
import SFHome from "./_components/SFHome/SFHome";

export default async function Home() {

  return (
    <main>
      <SFHeader />
      <SFHome />
      <SFFooter />
    </main>
  );
}
