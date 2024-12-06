import { CustomBreadcrumb } from "@/components/CustomBreadcrumb";
import { ProductTypeAccordion } from "@/components/ProductTypeAccordion";

export default function Page () {
    return (
        <main>
          <div className=" w-11/12 mx-auto py-5 flex flex-col gap-y-5">
          <div>
            <CustomBreadcrumb firstItem="Men" firstLink="/men" secondItem="Ready-to-wear" secondLink="/men" pageTitle="New Arrivals" />
           </div>
            <h1 className="uppercase text-3xl md:text-[2.8rem]">New Arrivals</h1>
          </div>
          <div className="md:w-[95.6%] pt-2 pb-8">
            <div className="bg-white text-end py-3 px-5">
              <p>Sort by: <span className="text-neutral-500 text-[0.95rem]"> Popular</span></p>
            </div>
          </div>
          <div className="md:w-[95.6%] flex md:flex-row gap-x-6">
            <div className="hidden md:flex bg-white w-3/12 ">
            <div className="px-12 py-10 flex flex-col justify-start items-start gap-y-6">
            <ProductTypeAccordion />
            <div className="w-full mx-auto flex flex-col gap-y-3 justify-center items-center py-10">
              <button className="bg-black text-white  py-3 rounded-sm w-8/12">Apply</button>
              <button className="bg-white text-black border border-black  py-3 rounded-sm w-8/12">Clear all</button>
            </div>
            </div>
            </div>
            <div className="w-11/12 md:w-9/12 mx-auto pb-10">
            <p>Men's products</p>
          <div className="flex justify-center items-center py-10"><button className="bg-black text-white px-4 py-3 rounded-sm w-4/12 md:w-2/12">See more</button></div>
            </div>
          </div>
        </main>
    )
}