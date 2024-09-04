import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { CheckboxWithText } from "./CheckboxWithText"
  
  const labels = [
    'Coats',
    'Tops',
    'Dresses',
    'Knitwear',
    'Shirts',
    'Skirts',
    'Shorts',
    'Pants',
    'Jackets',
    'Sweaters',
    'Accessories',
    'All'
  ]

  const sizes = [
    'S (4-6)',
    'M (8-10)',
    'L (12-14)',
    'XL (16-18)',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
  ]


  export function ProductTypeAccordion() {
    
    return (
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Type Of Product</AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-col gap-y-4">
             {labels.map((label, index) => {
              return (
                <CheckboxWithText label={label} key={index} />
              )
             })}
              </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Gender</AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-col gap-y-4">
          <CheckboxWithText label={'MAN'}  />
          <CheckboxWithText label={'WOMAN'}  />
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
           <div className="flex flex-row flex-wrap gap-5">
            {sizes.map((size, index) => {
                return (
                    <button className="py-2 px-2 border rounded-sm" key={index}>{size}</button>
                )
            })}
           </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  