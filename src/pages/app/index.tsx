import type { NextPage } from "next";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { SidebarProvider } from "../../context/SidebarContext";
import { BiBuoy } from "react-icons/bi";
import Sidebar from "../../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

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
          <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
            {/* <HomePage /> */}
          </main>
          <div className="order-1">
            <ActualSidebar />
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Home;
