import { TbSlash } from "react-icons/tb";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function CustomBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/women">Women</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <TbSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/women">Ready-to-wear</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <TbSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>New Arrival</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
