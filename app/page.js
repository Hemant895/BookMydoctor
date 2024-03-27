import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Categorysearch from "./_components/Categorysearch";
export default function Home() {
  return (
   <div>
    <Hero/>
    <Categorysearch/>
   </div>
  );
}
