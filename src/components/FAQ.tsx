import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "HOW MUCH DO I PAY FOR SHIPPING?",
    answer: "The shipping charge will be added to your order and visible at checkout before you finalize the order. The shipping is based on the destination."
  },
  {
    question: "ACCEPTED PAYMENT METHODS?",
    answer: "We accept card payments with MasterCard, VISA or PayFast. Residents within South Africa are also offered the option to pay by invoice through our partner Klarna. Please see Klarna's home page for more information."
  },
  {
    question: "DO I HAVE TO PAY INTERNATIONAL TAXES AND DUTIES?",
    answer: "Your order may be subject to import duties and taxes, which are levied once a shipment reaches your country that is out of South Africa. We cannot control and are not responsible for any duties/taxes applied to your package upon delivery. You will be responsible for paying additional charges for customs clearance. Customs policies vary widely from country to country, please contact your local customs office for further information."
  },
  {
    question: "HOW DO I FIND THE RIGHT SIZE?",
    answer: "There is a size chart on each product page with garment measurements. Our sizes range from: XS, S, M, L, XL, XXL, XXXL on t-shirts. On sweaters: XS, S, M, L, XL, XXL."
  },
  {
    question: "HOW IS THE PRODUCT AND FIT?",
    answer: "Our t-shirt is a slim fit and made of cotton stretch which has a bit of stretch. There is a size chart provided on product for each size and fabric. Sweaters and hoodies are regular fits with rigid cotton fabric called brushed fleece. We use 100% cotton on our garments, where there might be a blended textile, we ensure to notify on the product front in bold."
  },
  {
    question: "HOW LONG UNTIL MY ORDER GETS SHIPPED?",
    answer: "If it is in stock and ready for shipping, we can ship your order the next business day."
  },
  {
    question: "WILL I BE ABLE TO TRACK MY SHIPMENT?",
    answer: "Tees & Gees offer free tracking on all of our shipments domestic and international. A tracking email will be sent to the email address you checkout with by the shipping service we have selected for your order. If you would like the tracking information sent to an alternate email address, please provide the address in the notes section at checkout. After your order has been placed, please wait 1-2 business days for the tracking email to be delivered. If you have not received an email with your tracking number after this time, please email info@teesngees.com to request a tracking number. Tracking numbers usually take 24 hours to activate after the shipping company has picked up the package."
  },
  {
    question: "WHO DO YOU SHIP WITH?",
    answer: "We use various shipping companies and try to always choose the best courier service for that destination. International Shipping will be offered by DHL or any suitable service provider. If you need your order to arrive by a specific date or require other special services, please email us info@teesngees.com and we'll take care of you. Tees & Gees reserves the right to use its discretion when selecting shipping services."
  },
  {
    question: "HOW LONG WILL MY ORDER TAKE TO ARRIVE?",
    answer: "South African courier orders take between 2-4 days. International orders take between 7-15 days from postage date. Please be aware some countries may have customs clearances which add time to the shipment. Please make sure someone is available to receive your shipment."
  },
  {
    question: "WHAT IF MY ORDER GETS DAMAGED?",
    answer: "This is very rare as we package your order in protective wrap to make sure it doesn't get damaged. Packaging may show signs of travel, but the product enclosed should be as new. Please contact Tees & Gees if you experience damaged goods as a result of shipping."
  }
];

const FAQ = () => {
  return (
     <section className="container max-w-3xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about orders, shipping, and more.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-muted/50 rounded-xl">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <a 
              href="/shop"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Shop now
            </a>
          </div>
        </section>
  );
};

export default FAQ;
