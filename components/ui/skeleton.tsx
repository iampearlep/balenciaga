import { cn } from "@/utils/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#D0D0D0] dark:bg-neutral-50/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
