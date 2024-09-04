import { CustomBreadcrumb } from "@/components/CustomBreadcrumb";
import { ProductTypeAccordion } from "@/components/ProductTypeAccordion";


export default function Page () {
    return (
        <main>
          <div className=" w-11/12 mx-auto py-5 flex flex-col gap-y-5">
          <div>
            <CustomBreadcrumb />
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
            </div>
           <p className="invisible">filter</p>
            </div>
            <div className="bg-white w-9/12">
            <p className="invisible">products</p>
            </div>
          </div>
        </main>
    )
}