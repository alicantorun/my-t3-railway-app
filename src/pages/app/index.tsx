import type { NextPage } from "next";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { SidebarProvider } from "../../context/SidebarContext";
import Sidebar from "../../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Pie from "../../components/ResponsivePie";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <>
      <SidebarProvider>
        <Header />

        <div className="flex dark:bg-gray-900 bg-white">
          <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem] h-48 flex">
            {/* <HomePage /> */}
            <div className="text-primary-500">GRAPH</div>
            <Pie
              data={[
                {
                  id: "savings",
                  label: "Savings",
                  value: 120,
                },
                {
                  id: "Eat",
                  label: "Eat",
                  value: 35,
                },
                {
                  id: "Commute",
                  label: "Commute",
                  value: 33,
                },
                {
                  id: "Watch TV",
                  label: "Watch TV",
                  value: 27,
                },
                {
                  id: "Sleep",
                  label: "Sleep",
                  value: 199,
                },
              ]}
            />
          </main>
          <div className="order-1">
            <Sidebar />
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Home;
