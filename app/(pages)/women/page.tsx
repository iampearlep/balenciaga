import { CustomBreadcrumb } from "@/components/CustomBreadcrumb";
import { Products } from "@/components/Products";
import { ProductTypeAccordion } from "@/components/ProductTypeAccordion";


export default function Page () {
    return (
        <main>
          <div className=" w-11/12 mx-auto py-5 flex flex-col gap-y-5">
          <div>
            <CustomBreadcrumb firstItem="Women" firstLink="/women" secondItem="Ready-to-wear" secondLink="/women" pageTitle="New Arrivals" />
           </div>
            <h1 className="uppercase text-3xl md:text-[2.8rem]">New Arrivals</h1>
          </div>
          <div className="w-[95.6%] pt-2 pb-8">
            <div className="bg-white text-end py-3 px-5">
              <p>  Sort by: <span className="text-neutral-500 text-[0.95rem]"> Popular</span></p>
            </div>
          </div>
          <div className="w-[95.6%] flex flex-row gap-x-6">
            <div className="bg-white w-3/12 ">
            <div className="px-12 py-10 flex flex-col justify-center items-start gap-y-6">
            <ProductTypeAccordion />
            <div className="w-full mx-auto flex flex-col gap-y-3 justify-center items-center py-10">
              <button className="bg-black text-white  py-3 rounded-sm w-8/12">Apply</button>
              <button className="bg-white text-black border border-black  py-3 rounded-sm w-8/12">Clear all</button>
            </div>
            </div>
            </div>
            <div className="w-9/12 pb-10">
            <Products />
          <div className="flex justify-center items-center py-10"><button className="bg-black text-white px-4 py-3 rounded-sm w-2/12">See more</button></div>
            </div>
          </div>
        </main>
    )
}