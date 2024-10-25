import { Skeleton } from "@/components/ui/skeleton"


export const ProductDetailsSkeleton = () => {
  return (
   <div className="w-11/12 mx-auto py-12 md:py-32">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
    <div>
        <Skeleton className="h-[600px] w-full rounded-sm" />
    </div>
    <div className="flex flex-col gap-y-4">
        <div>
        <Skeleton className="h-[50px] w-full rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[30px] w-full rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[15px] w-[50px] rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[20px] w-full rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[15px] w-[200px] rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[20px] w-[200px] rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[50px] w-[250px] rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[40px] w-full rounded-sm" />
        </div>
        <div>
        <Skeleton className="h-[40px] w-full rounded-sm" />
        </div>
    </div>
  </div>
   </div>
  )
}
