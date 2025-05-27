import BrowseStyle from "@/components/browse-style/BrowseStyle";
import Hero from "@/components/hero/Hero";
import Topics from "@/components/Topics/Topics";
export default function Home() {
  return (
    <div>
    <Hero/>
    <Topics start={0} end={4} title="NEW ARRIVALS"/>
    <div className="line"></div>
    <Topics start={5} end={9} title="top selling"/>
    <BrowseStyle/>
    </div>
  );
}
