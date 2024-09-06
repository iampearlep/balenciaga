import { TbSlash } from "react-icons/tb";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CustomBreadcrumbProps {
  firstLink: string;
  firstItem: string;
  secondLink: string;
  secondItem: string;
  pageTitle: string;
}
export const CustomBreadcrumb : React.FC<CustomBreadcrumbProps> = ({firstItem, firstLink, secondItem, secondLink, pageTitle}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={firstLink}>{firstItem}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <TbSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={secondLink}>{secondItem}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <TbSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
