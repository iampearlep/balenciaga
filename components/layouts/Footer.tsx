import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white border-white border-t">
        <div className="grid grid-cols-1 md:grid-cols-6 w-11/12 mx-auto ">
            <div className="flex flex-col gap-y-4 py-4 md:py-8">
                <h5 className="uppercase text-sm font-medium">Newsletter</h5>
                <Link className="text-[12px] underline" href='/'>Subscribe to our newsletter</Link>
            </div>
            <div className="flex flex-col gap-y-4 md:border-l border-white md:px-4 py-4 md:py-8">
                <h5 className="uppercase text-sm font-medium">Client services</h5>
                <div className="text-[12px] flex flex-col gap-y-3">
                <Link href="/" className="cursor-pointer">
                FAQ
            </Link>
            <Link href="/" className="cursor-pointer">
             Track Order
             </Link>
             <Link href="/" className="cursor-pointer">
             Exchanges and returns
             </Link>
             <Link href="/" className="cursor-pointer">
             Delivery
             </Link>
             <Link href="/" className="cursor-pointer">
             Payment
             </Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 md:border-l border-white md:px-4 py-4 md:py-8">
                <h5 className="uppercase text-sm font-medium">The Company</h5>
               <div className="text-[12px] flex flex-col gap-y-3">
               <Link href="/" className="cursor-pointer">
             Careers
             </Link>
             <Link href="/" className="cursor-pointer">
              Careers - Design
              </Link>
              <Link href="/" className="cursor-pointer">
              Legal
              </Link>
              <Link href="/" className="cursor-pointer">
              Privacy Policy and cookies
              </Link>
              <Link href="/" className="cursor-pointer">
              World Food Programme
              </Link>
               </div>
               
            </div>
            <div className="flex flex-col gap-y-4 md:border-l border-white md:px-4 py-4 md:py-8">
                <h5 className="uppercase text-sm font-medium">Connect</h5>
                <div className="text-[12px] flex flex-col gap-y-3">
                <Link href="/" className="cursor-pointer">
             Facebook
             </Link>
             <Link href="/" className="cursor-pointer">
              Instagram
              </Link>
              <Link href="/" className="cursor-pointer">
              Tiktok
              </Link>
              <Link href="/" className="cursor-pointer">
              Spotify
              </Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 md:border-l border-white md:px-4 py-4 md:py-8">
                <h5 className="uppercase text-sm font-medium">Botiques</h5>
               <div className="text-[12px] flex flex-col gap-y-3">
               <Link href="/" className="cursor-pointer">
             Store Appointment
             </Link>
             <Link href="/" className="cursor-pointer">
              Find a store nearby
              </Link>
              <Link href="/" className="cursor-pointer">
              Country / Region: Nigeria
              </Link>
              <Link href="/" className="cursor-pointer">
              Language: English
              </Link>
               </div>
            </div>
            <div className="flex flex-col gap-y-4 md:border-l border-white md:px-4 py-4 md:py-8">
                <h5  className="uppercase text-sm font-medium">Contact Us</h5>
            <div className="text-[12px] flex flex-col gap-y-3">
            <p>Our Clients advisors are available <span>Mon-Sat 9:30am - 7pm</span></p>
                <p>WhatsApp <span className="underline">+234 81 74 56 39 01</span></p>
                <p>Call us <span className="underline"> +234 81 74 56 39 01</span></p>
                <p>Email us</p>
            </div>
            </div>
        </div>
        <div className="py-4 mx-auto text-center text-sm border-white border-t">
            <p>&copy; 2024 Balenciaga</p>
        </div>
    </div>
  )
}
