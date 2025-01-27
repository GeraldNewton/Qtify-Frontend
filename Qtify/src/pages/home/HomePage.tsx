import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();

  const {initializeQueue} = usePlayerStore();

	useEffect(() => {
		if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);
  

  useEffect(()=>{
    fetchFeaturedSongs();
    fetchTrendingSongs();
    fetchMadeForYouSongs();
  },[fetchFeaturedSongs,fetchTrendingSongs,fetchMadeForYouSongs])

  return (
    <main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-700 to-zinc-900">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text:3xl font-bold mb-6">Good Afternoon</h1>
          <FeaturedSection />
        {/* </div> */}

        <div className="space-y-8">
          <SectionGrid title="Made For You" songs={madeForYouSongs} isLoading={isLoading}></SectionGrid>
          <SectionGrid title="Trneding" songs={trendingSongs} isLoading={isLoading}></SectionGrid>
        </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
