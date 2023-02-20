import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";
import projectData from "@/data";
import Filter from "@/components/Filter";

export default function Home() {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const queryParams = router.query.tags;
  
  useEffect(() => {
    if (queryParams) {
      const queryTags = queryParams.split(",");
      const queryT = queryTags.forEach(tag => checkedItems[tag] = true);
      setCheckedItems(checkedItems);

      const filtered = projectData.filter(item =>
        item.tags.some(tag => queryTags.includes(tag))
      );
      setFilteredData(filtered);
    }
    else {
      setCheckedItems({
        html: true,
        css: true,
        javascript: true,
        scss: true,
      });
      setFilteredData(projectData);
    }
  }, [queryParams]);

  
 
  return (
    <>
      <Head>
        <title>Nirdisto Projects</title>
        <meta
          name="description"
          content="Project List of Nirdisto Web Development Agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-16 flex">
        <Filter data={filteredData} checkedItems={checkedItems} setCheckedItems={setCheckedItems} setFilteredData= {setFilteredData} />
        <ProjectList projects={filteredData} />
      </main>
      <Footer />
    </>
  );
}
