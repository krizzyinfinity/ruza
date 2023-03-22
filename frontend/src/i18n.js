import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: {
          congragulation: "Congratulations",
          congragulation2:  "Your accommodation has been booked sucessfully! The details are in your confirmation email. If you want to cancel, please send us an email",
          error: "Oops",
          error2: "Something went wrong",
          roomName: "Room name",
          pricePerNight: "Price per night",
          totalDays: "Total days",
          from:"From",
          to: "To",
          noOfPeople:"Number of people",
          totalAmount:"Total amount",
          payNow:" Pay now",
          activities1: "Looking for an active holiday? Search no more!We offer kayak rentals, aquaglide 4.1 for windy days, paddle boards, bikes and much more!Grab a discount on all activities when you stay with us! Check out our webpage",
          acc1: "You need to book two small apartments to fit that many people in case two bedroom apartment is not available. Bear in mind that 2 beds are in the same room. You will have to make two separate bookings.If you have any trouble with the reservation, please send us an email.",
          acc3:"You need to book three small apartments to fit that many people. You have to make three separate bookings. If you have any trouble with the reservation, please send us an email",
          acc5:"Please have in mind that our small apartments have space for 2 people only plus a child. For large groups, please send us an email and we will come back to you with an offer based on availability",
          availability: "Check Availability",
          mandatory:"Num of people (mandatory)",
          accommodation:" Accommodation",
          desc:"Description",
          basePrice:"Base price",
          morePictures:" More pictures",
          book:" Book now",
          about:"We are a husband and a wife from Zadar Croatia. This house was Mira's family home that was transformed into apartments throughout years. This project was and still is our great passion. We have been in this business for almost 20 years and have many regular guests We love travelling and have travelled together many countries and continents. It is very exciting to see how other people live and what are their habbits. That is why we try so hard to provide an unforgettable holiday for our guests and are always here at your service. Looking forward to host you and to show you our beautiful island.",
          success:"Successfully booked your accommodation!",
          checkInbox:"Please check your inbox for confirmation email!",
          amenities:"Amenities",
          section1:"Our apartments feature swimming pool with a panoramic view of Zadar and surrounding islands. On our sun deck there is jacuzzi, table tennis, dart and our open-air cinema that plays songs or movies all day long. Badgmintom is in front of the house and also for you to use.  You can sit on our terrace and order a drink or a dinner. Kayak rentals, watersport equipment and taxi service can be arranged at the property. For more details, Please visit ",
          activities:"Activities",
          page:" page",
          section2: "We have two studio apartments, two one-bedroom apartments and one two-bedroom apartments. Small apartments are only comfortable for 2 people plus small child, or three people if it is a short-term stay as two beds are in the same room even in one-bedroom apartments, so it is something to keep in mind if you want to book the accommodation with us. For more details and to check availability, please visit ",

ruza:"Ruza apartments",
home:"Home",
aboutUs: "About",
village:"Small village for a big vacation!",
wrong:"Something went wrong. Please try later!",

past: "Cannot choose dates in the past!",



        }
      },
      hr: {
        translation: {
          congragulation: "Čestitamo",
          congragulation2:  "Vaš smještaj je uspješno rezerviran! Pojedinosti se nalaze u vašem e-mailu potvrde. Ako želite otkazati, pošaljite nam e-mail",
          error: "Oops",
          error2: "Nešto je pošlo krivo",
          roomName: "Naziv apartmana",
          pricePerNight: "Cijena po noćenju",
          totalDays: "Ukupno  broj noćenja ",
          from:"Od",
          to: "Do",
          noOfPeople:"Broj ljudi",
          totalAmount:"Totalni zbroj",
          payNow:" Plati sada",
          activities1: "Tražite aktivan odmor? Ne tražite više! Nudimo najam kajaka, aquaglide 4.1 za vjetrovite dane, supove, bicikle i još mnogo toga! Zgrabite popust na sve aktivnosti kada odsjednete kod nas! Provjerite našu web stranicu",
          acc1: "Morate rezervirati dva apartmana da bi mogli smjestiti toliko ljudi u slučaju da dvosoban apartman nije slobodan.Imajte na umu da su 2 kreveta u istoj sobi. Morat ćete napraviti dvije odvojene rezervacije. Ako imate problema s rezervacijom, pošaljite nam e-poštu.",
          acc3:"Morate rezervirati tri mala apartmana kako biste smjestili toliko ljudi. Morate napraviti tri zasebne rezervacije. Ako imate problema s rezervacijom, pošaljite nam e-mail",
          acc5:"Imajte na umu da naši mali apartmani imaju mjesta samo za 2 osobe plus dijete. Za velike grupe, pošaljite nam e-poštu i mi ćemo vam odgovoriti s ponudom ovisno o dostupnosti",
          availability: "Provjeri dostupnost",
          mandatory:"Broj osoba (obavezno!)",
          accommodation:"Smještaj",
          desc:"Opis",
          basePrice:"Osnovna cijena",
          morePictures:"Više slika ",
          book:"Rezerviraj",
          about:"Mi smo muž i žena iz Zadra. Ova kuća bila je Mirina obiteljska kuća koju smo godinama pretvarali u zasebne apartmane. Ovaj projekt je bio i ostao naša velika strast. U ovom poslu smo skoro 20 godina i imamo mnogo stalnih gostiju Volimo putovanja i zajedno smo proputovali mnoge zemlje i kontinente. Vrlo je uzbudljivo vidjeti kako drugi ljudi žive i kakve su im navike. Zato se toliko trudimo pružiti našim gostima nezaboravan odmor i uvijek Vam stojimo na usluzi. Radujemo se što ćemo vas ugostiti i pokazati vam naš prekrasni otok.",
          success:"Uspješno sterezervirali svoj smještaj!",
          checkInbox:"Provjerite svoju e-poštu za potvrdu plaćanja!",
          amenities:"Sadržaji",
          section1:"Naši apartmani imaju bazen s panoramskim pogledom na Zadar i okolne otoke. Na našoj sunčanoj terasi nalazi se jacuzzi, stolni tenis, pikado i naše kino na otvorenom u kojem se cijeli dan vrte pjesme ili filmovi. Badgmintom je ispred kuće i također ga možete koristiti. Možete sjesti na našu terasu i naručiti piće ili večeru. U objektu je moguće organizirati najam kajaka, opremu za vodene sportove, supove i usluge taksija. Za više detalja, posjetite ",
          activities:"Aktivnosti",
          page:" stranicu",
          section2: "Imamo dva studio apartmana, dva jednosobna apartmana i jedan dvosobni apartman. Mali apartmani su udobni samo za 2 osobe plus malo dijete, ili tri osobe ako se radi o kratkotrajnom boravku jer su dva kreveta u istoj prostoriji čak i u jednosobnim apartmanima, tako da je nešto što treba imati na umu ako želite rezervirati smještaj kod nas. Za više pojedinosti i provjeru dostupnosti posjetite ",

ruza:"Ruza apartmani",
home:"Početna stranica",
aboutUs: "O nama",
village:"Malo mjesto za vrhunski odmor!",
wrong:"Dogodila se pogreška. Molimo pokušajte ponovo kasnije!",

past:"Ne možete birati datume u prošlosti!",


        }
       

        
      },
      it: {
        translation: {

        }
        
       
      },
      de: {
        translation:{

        }
        
       
      },
      fr: {
        translation: {
            
        }
        
      },
    }
  });

  export default i18n;