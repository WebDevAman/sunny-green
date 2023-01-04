export const navData = [
  {
    title: 'PARTICULIER',
    slug: '/prijs-berekenen-zonnepanelen',
    submenu: [
      // {
      //   title: `ZonneHuren`,
      //   slug: `/particulier/zonnepanelen-huren`,
      // },

      // {
      //   title: `ZonneHuren`,
      //   slug: `/particulier/zonnepanelen-huren/`,
      // },
      {
        title: `ZonneKopen`,
        slug: `/particulier/zonnepanelen-kopen/`,
      },
      // {
      //   title: `ZonneLaden`,
      //   slug: `/particulier/laadpaal-thuis/`,
      // },
      // {
      //   title: `ZonneSparen`,
      //   slug: `/particulier/zonnesparen/`,
      // },
      // {
      //     title: `ZonneSparen`,
      //     slug: `/particulier/zonnesparen`,
      // },
      {
        title: `Laadpaal thuis`,
        slug: `/particulier/laadpaal-thuis`,
      },
    ],
  },
  {
    title: 'ZAKELIJK',
    slug: '/prijs-berekenen-zonnepanelen',
    submenu: [
      {
        title: `MKB ZonneLeasen`,
        slug: `/zakelijk/zonnepanelen-leasen/`,
      },
      // {
      //   title: `ZonneKopen`,
      //   slug: `/zakelijk/zonnepanelen-kopen/`,
      // },
      // {
      //   title: `Carport`,
      //   slug: `/zakelijk/carport-zonnepanelen/`,
      // },
      // {
      //   title: `WKR`,
      //   slug: `/zakelijk/de-groene-wkr-werkgever/`,
      // },
      // //   {
      //     title: `ZonneLeasen MKB`,
      //     slug: `/zakelijk/zonnepanelen-leasen`,
      //   },
      // {
      //     title: `ZonneCarport`,
      //     slug: `/zakelijk/carport-zonnepanelen`,
      // },
      {
        title: `ZonneKopen Zakelijk`,
        slug: `/prijs-berekenen-zonnepanelen`,
      },
      // {
      //     title: `De Groene WKR`,
      //     slug: `/zakelijk/de-groene-wkr-werkgever`,
      // },
    ],
  },
  {
    title: 'OVER ONS',
    slug: '/over-sunnygreen-nl/',
    submenu: [
      // {
      //   title: `B Corp`,
      //   slug: `/over-enie-nl/bcorp`,
      // },
      // {
      //   title: `Producten`,
      //   slug: `/over-enie-nl/onze-producten`,
      // },
      // {
      //   title: `Kennisbank`,
      //   slug: `/kennisbank`,
      // },
      // {
      //   title: `Ons team`,
      //   slug: `/over-enie-nl/ons-team/`,
      // },
      // {
      //   title: `Vriendenactie`,
      //   slug: `/over-enie-nl/vriendenactie/`,
      // },
      // {
      //   title: `Vacatures`,
      //   slug: `/veelgestelde-vragen-over-zonnepanelen`,
      // },
      // {
      //   title: `Nieuws`,
      //   slug: `/nieuws/`,
      // },
      {
        title: `Veelgestelde vragen`,
        slug: `/veelgestelde-vragen-over-zonnepanelen`,
      },
      {
        title: `Privacy statement`,
        slug: `/privacy-statement-sunnygreen-nl`,
      },
      {
        title: `Cookie statement`,
        slug: `/cookie-statement-sunnygreen-nl`,
      },
      {
        title: `Contact`,
        slug: `/contact`,
      },
      {
        title: `Algemene voorwaarden`,
        slug: `/algemene-voorwaarden`,
      },
      {
        title: `Onze producten`,
        slug: `/over-enie-nl/onze-producten`,
      },
    ],
  },
]


  // <div className={`${mobSum ? 'h-fit py-2 mt-2 pt-2 border-t' : 'h-0 py-0 overflow-hidden'} grid grid-cols-2 transition-all duration-300 w-full`}>
  //                           <div className="flex flex-col gap-3">
  //                               <div className='flex items-center gap-2'>
  //                                   <span className='text-sm opacity-90'>Totaal incl.</span>
  //                               </div>
  //                               {/* right one  */}
  //                               {/* <div className='flex items-center gap-2'>
  //                                   <span className='text-sm opacity-90'>Btw-teruggave </span>
  //                               </div> */}
  //                               <div className='flex items-center gap-2'>
  //                                   <span className='text-xs font-medium opacity-90'>Totaal na btw-teruggave </span>
  //                               </div>
  //                           </div>
  //                           <div className="flex flex-col text-right gap-2">
  //                               <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
  //                               {/* <span className='text-sm opacity-90'>€ {((data.no_of_panels * 549) / 121 * 21).toFixed(2)}</span> */}
  //                               <span className='text-sm font-medium opacity-90'>€ {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) / 121 * 21))).toFixed(2)}</span>
  //                           </div>
  //                       </div>


    // <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
    //                     <div className="flex flex-col gap-2">
    //                       <div className="flex items-center gap-2">
    //                         <span className="text-xs opacity-90">
    //                           Totaal incl. 
    //                         </span>
    //                       </div>
    //                       {/* <div className="flex items-center gap-2">
    //                         <span className="text-xs opacity-90">
    //                           Btw-teruggave{' '}
    //                         </span>
    //                       </div> */}
    //                       <div className="flex items-center gap-2">
    //                         <span className="text-xs font-medium opacity-90">
    //                           Totaal na btw-teruggave{' '}
    //                         </span>
    //                       </div>
    //                     </div>
    //                     <div className="flex flex-col text-right gap-2">
    //                       <span className="text-xs opacity-90">
    //                         € {(data.no_of_panels * 549).toFixed(2)}
    //                       </span>
    //                       {/* <span className="text-xs opacity-90">
    //                         €{' '}
    //                         {(((data.no_of_panels * 549) / 121) * 21).toFixed(
    //                           2
    //                         )}
    //                       </span> */}
    //                       <span className="text-xs font-medium opacity-90">
    //                         €{' '}
    //                         {(
    //                           (data.no_of_panels * 549).toFixed(2) -
    //                           ((data.no_of_panels * 549) / 121) * 21
    //                         ).toFixed(2)}
    //                       </span>
    //                     </div>
    //                   </div>

    //  <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
    //                         <div className="flex flex-col gap-3">
    //                             <div className='flex items-center gap-2'>
    //                                 <span className='text-sm opacity-90'>Totaal incl.</span>
    //                             </div>
    //                             {/* <div className='flex items-center gap-2'>
    //                                 <span className='text-sm opacity-90'>Btw-teruggave </span>
    //                             </div> */}
    //                             <div className='flex items-center gap-2'>
    //                                 <span className='text-xs font-medium opacity-90'>Totaal na btw-teruggave </span>
    //                             </div>
    //                         </div>
    //                         <div className="flex flex-col text-right gap-2">
    //                             <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
    //                             <span className='text-sm opacity-90'>€ {((data.no_of_panels * 549) / 121 * 21).toFixed(2)}</span>
    //                             <span className='text-sm font-medium opacity-90'>€ {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) / 121 * 21))).toFixed(2)}</span>
    //                         </div>
    //                     </div>
